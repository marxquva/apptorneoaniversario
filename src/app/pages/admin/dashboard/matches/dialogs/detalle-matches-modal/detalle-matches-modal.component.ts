import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detalle-matches-modal',
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './detalle-matches-modal.component.html',
  styleUrl: './detalle-matches-modal.component.css'
})
export class DetalleMatchesModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DetalleMatchesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}

