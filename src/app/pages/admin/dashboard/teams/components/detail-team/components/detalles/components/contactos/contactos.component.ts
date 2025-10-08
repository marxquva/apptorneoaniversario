import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from "@angular/material/icon";
import { TeamService } from '@services/equipos/team.service';
import { Team } from '@interfaces/team.interface';

@Component({
  selector: 'app-contactos',
  imports: [MatExpansionModule, MatIcon],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css',
})
export class ContactosComponent implements OnInit{
  panelOpenState = true;
  constructor(private teamService: TeamService) {}
  equipoSeleccionado: Team | null = null;
  ngOnInit(): void {
    this.teamService.selectedTeam$.subscribe(team => {
      this.equipoSeleccionado = team;
    });
  }
}
