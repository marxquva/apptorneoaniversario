import { Component, OnInit, computed, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOption } from "@angular/material/core";
import { MatSelect } from "@angular/material/select";
import { DetalleMatchesModalComponent } from './dialogs/detalle-matches-modal/detalle-matches-modal.component';
import { SinDatosComponent } from "@components/shared/sin-datos/sin-datos.component"; 
import { MatchesService } from '@services/partidos/matches.service';
import { LoadingService } from '@services/shared/loading.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Partido } from '@interfaces/partido.interface';

@Component({
  selector: 'app-matches',
  imports: [MatFormFieldModule, MatDialogModule, MatRadioModule, FormsModule, MatTabsModule, MatButtonModule, BreadcrumbComponent, MatCardModule, MatDividerModule, MatIcon, MatInputModule, MatOption, MatSelect, SinDatosComponent, CommonModule, MatProgressSpinnerModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})

export class MatchesComponent implements OnInit {

 constructor(private dialog: MatDialog, private loadingService: LoadingService, private matchesService: MatchesService) {}
 isLoading = computed(() => this.loadingService.isLoading());
 
 seasons = [
    { cancha: { idcancha: 0, nombre_cancha: 'Todos' } },
    { cancha: { idcancha: 1, nombre_cancha: 'Cancha A' } },
    { cancha: { idcancha: 2, nombre_cancha: 'Cancha B' } }
  ];
  favoriteSeason = 0;

  fases = [
    { id: 1, nombre: 'Fecha 1' },
    { id: 2, nombre: 'Fecha 2' },
    { id: 3, nombre: 'Fecha 3' }
  ];
  faseSeleccionada = 1;



 breadcrumbItems = ['Torneo', 'Partidos'];
 partidos = signal<Partido[]>([]);
 partidosFiltrados = signal<{ nombre_cancha: string; partidos: Partido[] }[]>([]);

  searchTerm = signal<string>('');

  ngOnInit(): void {
    const edicionId = 2;
    this.loadingService.setLoading(true);

    this.matchesService.getFixtureById(edicionId).subscribe({
      next: (res) => {
        if (res) {
          const partidosProcesados = res.map((p: any) => {
            const local = p.programaciones?.find((x: any) => x.eslocal === 1);
            const visitante = p.programaciones?.find((x: any) => x.eslocal === 0);
            return {
              ...p,
              localEquipo: local?.equipo,
              localGoles: local?.goles ?? '-',
              visitanteEquipo: visitante?.equipo,
              visitanteGoles: visitante?.goles ?? '-'
            };
          });

          this.partidos.set(partidosProcesados);
          this.actualizarFiltrados();
        } else {
          this.partidos.set([]);
          this.partidosFiltrados.set([]);
        }
        this.loadingService.setLoading(false);
      },
      error: (error) => {
        console.error('Error al cargar el fixture:', error);
        this.loadingService.setLoading(false);
      }
    });
  }

  partidosPorCancha = computed(() => {
    const lista = this.partidos();
    const agrupado: { [cancha: string]: Partido[] } = {};

    lista.forEach(p => {
      const nombre = p.cancha?.nombre_cancha || 'Sin cancha';
      if (!agrupado[nombre]) agrupado[nombre] = [];
      agrupado[nombre].push(p);
    });

    return Object.entries(agrupado).map(([nombre_cancha, partidos]) => ({
      nombre_cancha,
      partidos
    }));
  });
  
  // Agrupa partidos por cancha
  agruparPorCancha(): { idcancha: number; nombre_cancha: string; partidos: Partido[] }[] {
    const lista = this.partidos();
    const agrupado: { [id: number]: { nombre_cancha: string; partidos: Partido[] } } = {};

    lista.forEach(p => {
      const id = p.cancha?.idcancha ?? 0; // 0 para Sin cancha
      const nombre = p.cancha?.nombre_cancha || 'Sin cancha';

      if (!agrupado[id]) agrupado[id] = { nombre_cancha: nombre, partidos: [] };
      agrupado[id].partidos.push(p);
    });

    return Object.entries(agrupado).map(([id, value]) => ({
      idcancha: +id,
      nombre_cancha: value.nombre_cancha,
      partidos: value.partidos
    }));
  }


  // Aplica filtro según el radio seleccionado
  filtrarPorCancha() {
    this.actualizarFiltrados();
  }

  filtrarPorFase() {
    // Aquí puedes filtrar los partidos según la faseSeleccionada
    // Ejemplo:
    // const partidosFiltradosPorFase = this.partidos().filter(p => p.faseId === this.faseSeleccionada);
    // Actualiza el filtrado global:
    this.actualizarFiltrados();
  }


  private actualizarFiltrados() {
    const canchaSeleccionadaId = this.favoriteSeason;
    const textoBusqueda = this.searchTerm().toLowerCase();

    const todosLosGrupos = this.agruparPorCancha();

    // Filtramos por cancha
    let gruposFiltrados = canchaSeleccionadaId === 0
      ? todosLosGrupos
      : todosLosGrupos.filter(g => g.idcancha === canchaSeleccionadaId);

    if (textoBusqueda.trim() === '') {
      // Si no hay texto, dejamos como está
      this.partidosFiltrados.set(gruposFiltrados);
      return;
    }

    // Filtramos los partidos dentro de cada grupo según el texto buscado
    gruposFiltrados = gruposFiltrados.map(g => {
      const partidosFiltradosPorEquipo = g.partidos.filter(p => {
        const local = p.localEquipo?.nombre_equipo.toLowerCase() || '';
        const visitante = p.visitanteEquipo?.nombre_equipo.toLowerCase() || '';
        return local.includes(textoBusqueda) || visitante.includes(textoBusqueda);
      });
      return {
        ...g,
        partidos: partidosFiltradosPorEquipo
      };
    })
    // Eliminamos grupos sin partidos
    .filter(g => g.partidos.length > 0);

    this.partidosFiltrados.set(gruposFiltrados);
  }

  onSearchChange(value: string) {
    this.searchTerm.set(value);
    this.actualizarFiltrados(); // Actualiza el filtrado cada vez que cambia el texto
  }




 abrirModalDetalle() {
    this.dialog.open(DetalleMatchesModalComponent, {
      data: {
        equipo1: 'Burn in hell',
        equipo2: 'Headbangers FC',
        hora: '10:00 AM',
        resultado: '2 - 1'
      },
      width: '400px'
    });
  }

}
