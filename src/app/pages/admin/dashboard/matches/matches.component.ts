import { Component } from '@angular/core';
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


@Component({
  selector: 'app-matches',
  imports: [MatFormFieldModule, MatDialogModule, MatRadioModule, FormsModule, MatTabsModule, MatButtonModule, BreadcrumbComponent, MatCardModule, MatDividerModule, MatIcon, MatInputModule, MatOption, MatSelect, SinDatosComponent],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})

export class MatchesComponent {
 constructor(private dialog: MatDialog) {}
 favoriteSeason='Todos';
 seasons: string[] = ['Todos', 'Campo 1', 'Campo 2'];
 breadcrumbItems = ['Torneo', 'Partidos'];

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
