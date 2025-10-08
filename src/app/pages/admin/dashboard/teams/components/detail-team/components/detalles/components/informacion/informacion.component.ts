import { Component, OnInit } from '@angular/core';
import { TeamService } from '@services/equipos/team.service';
import { Team } from '@interfaces/team.interface';

@Component({
  selector: 'app-informacion',
  imports: [],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent implements OnInit{
  constructor(private teamService: TeamService) {}
  equipoSeleccionado: Team | null = null;
  ngOnInit(): void {
    this.teamService.selectedTeam$.subscribe(team => {
      this.equipoSeleccionado = team;
    });
  }
}
