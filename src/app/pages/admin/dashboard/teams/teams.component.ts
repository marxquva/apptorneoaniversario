import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb.component';
import { ListadoTeamComponent } from './components/listado-team/listado-team.component';
import { DetailTeamComponent } from './components/detail-team/detail-team.component';
import { TeamService } from '@services/equipos/team.service';
import { LoadingService } from '@services/shared/loading.service';
import { EstadoService } from '@services/shared/estado.service';

@Component({
  selector: 'app-teams',
  imports: [ListadoTeamComponent, DetailTeamComponent, RouterModule, MatButtonModule, MatIconModule, MatCardModule, BreadcrumbComponent, MatInputModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit {

  private teamService = inject(TeamService);
  private loadingService = inject(LoadingService);
  private estadoService = inject(EstadoService);

  isLoading = computed(() => this.loadingService.isLoading());
  breadcrumbItems = ['Torneo', 'Equipos'];  
  mostrar = true;

  constructor(private breakpointObserver: BreakpointObserver) {}
  
  ngOnInit(): void {
    
    const edicionId = 2;
    this.loadingService.setLoading(true);

    this.teamService.getEquipoById(edicionId).subscribe({
      next: (teams) => {
        this.teamService.setTeams(teams);
        //console.log(teams);

        if (teams.length > 0) {
          this.teamService.setSelectedTeam(teams[0]); // ✅ solo el primero
        }

        this.loadingService.setLoading(false);
      },
      error: (error) => {
        console.error('Error al cargar los equipos:', error);
        this.loadingService.setLoading(false);
      }
    });

    // Luego suscribirse al servicio para reflejar los cambios
    this.estadoService.mostrar$.subscribe(valor => {
      this.mostrar = valor;
    });

  }

}
