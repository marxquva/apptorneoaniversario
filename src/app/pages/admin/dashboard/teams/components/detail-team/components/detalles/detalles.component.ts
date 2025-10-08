import { Component } from '@angular/core';
import { ContactosComponent } from "./components/contactos/contactos.component";
import { InformacionComponent } from "./components/informacion/informacion.component";

@Component({
  selector: 'app-detalles',
  imports: [ContactosComponent, InformacionComponent],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.scss'
})
export class DetallesComponent {

}
