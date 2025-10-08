import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { SinDatosComponent } from "@components/shared/sin-datos/sin-datos.component";

@Component({
  selector: 'app-partidos',
  imports: [MatCardModule, SinDatosComponent],
  templateUrl: './partidos.component.html',
  styleUrl: './partidos.component.css'
})
export class PartidosComponent {

}
