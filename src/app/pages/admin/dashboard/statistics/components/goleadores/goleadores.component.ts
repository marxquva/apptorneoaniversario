import { Component, OnInit, computed, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { SinDatosComponent } from "@components/shared/sin-datos/sin-datos.component";
import { PosicionesService } from '@services/posiciones/posiciones.service';
import { LoadingService } from '@services/shared/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Goleador } from '@interfaces/posicion.interface';

/*
export interface paymentData {
id: number;
color: string;
imagePath: string;
pname: string;
category: string;
price: number;
}
const PAYMENT_DATA: paymentData[] = [
{
id: 1,
color: 'primary',
imagePath: 'assets/images/profile/user-1.jpg',
pname: 'Juan Rios',
category: 'Alcoholica',
price: 12,
},
{
id: 2,
color: 'success',
imagePath: 'assets/images/profile/user-2.jpg',
pname: 'Wallet',
category: 'Bill payment',
price: 10,
},
{
id: 3,
color: 'warning',
imagePath: 'assets/images/profile/user-1.jpg',
pname: 'Credit Card',
category: 'Money reversed',
price: 9,
},
{
id: 4,
color: 'error',
imagePath: 'assets/images/profile/user-2.jpg',
pname: 'Refund',
category: 'Bill Payment',
price: 6,
},
];*/

@Component({
  selector: 'app-goleadores',
  imports: [MatTableModule, CommonModule, MatDividerModule, SinDatosComponent, MatProgressSpinnerModule],
  templateUrl: './goleadores.component.html',
  styleUrl: './goleadores.component.scss'
})
export class GoleadoresComponent implements OnInit {
  displayedColumns3: string[] = ['jugador', 'goles'];
  //dataSource3 = PAYMENT_DATA;

  constructor(private loadingService: LoadingService, private posicionesService: PosicionesService) {}
  isLoading = computed(() => this.loadingService.isLoading());
  goledores = signal<Goleador[]>([]);

  ngOnInit(): void {
    const edicionId = 2;
    this.loadingService.setLoading(true);

    this.posicionesService.getGoleadoresById(edicionId).subscribe({
      next: (res) => {
        if (res) {
          //console.log(res)
          this.goledores.set(res);
        } else {
          this.goledores.set([]);
        }
        this.loadingService.setLoading(false);

      },
      error: (error) => {
        console.error('Error al cargar el fixture:', error);
        this.loadingService.setLoading(false);
      }
    });
  }

}
