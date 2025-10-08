import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-sin-datos',
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './sin-datos.component.html',
  styleUrl: './sin-datos.component.css'
})
export class SinDatosComponent {
  @Input() title: string = '';
}


