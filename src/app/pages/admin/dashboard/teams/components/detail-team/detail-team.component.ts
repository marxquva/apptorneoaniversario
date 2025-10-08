import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { DetallesComponent } from "./components/detalles/detalles.component";
import { JugadoresComponent } from "./components/jugadores/jugadores.component";
import { PartidosComponent } from "./components/partidos/partidos.component";
import { TeamService } from '@services/equipos/team.service';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { EstadoService } from '@services/shared/estado.service';


interface Team {
  idequipo: number;
  nombre_equipo: string;
  descripcion: string;
  logotipo: string;
  urlfacebook: string;
  procedencia: string;
}

@Component({
  selector: 'app-detail-team',
  imports: [MatTabsModule, DetallesComponent, JugadoresComponent, PartidosComponent, MatIconModule, MatButtonModule],
  templateUrl: './detail-team.component.html',
  styleUrl: './detail-team.component.css'
})
export class DetailTeamComponent {


  teamId: string | null = null;
  equipoSeleccionado: Team | null = null;
  constructor(private route: ActivatedRoute, private estadoService: EstadoService) {}
  private teamService = inject(TeamService);

  ngOnInit(): void {
    this.teamService.selectedTeam$.subscribe(team => {
      if (team) {
        this.equipoSeleccionado = team;
      }
    });

    //this.teamId = this.route.snapshot.paramMap.get('id');
    //console.log('ID del equipo:', this.teamId);

    // Aquí puedes llamar a un servicio para obtener el equipo por ID
    // this.teamService.getTeamById(this.teamId).subscribe(...)
  }

  toggleMostrar() {
    const actual = this.estadoService.getMostrar();
    this.estadoService.setMostrar(!actual);
  }

}


