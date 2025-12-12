import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { SinDatosComponent } from "@components/shared/sin-datos/sin-datos.component";

interface Contact {
  name: string;
  role: string;
  img: string;
  starred: boolean;
}

@Component({
  selector: 'app-resumen',
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatInputModule, MatListModule, SinDatosComponent],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.scss'
})
export class ResumenComponent {
  contacts: Contact[] = [
      { name: 'Georgeanna Ramero', role: 'Sales', img: 'assets/images/profile/user-4.jpg', starred: true },
      { name: 'Alda Ziemer', role: 'Engineering', img: 'assets/images/profile/user-4.jpg', starred: false },
      { name: 'Juan Granado', role: 'Support', img: 'assets/images/profile/user-7.jpg', starred: false },
      // añade los demás
    ];
}
