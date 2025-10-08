import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { SinDatosComponent } from "@components/shared/sin-datos/sin-datos.component";

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
];

@Component({
  selector: 'app-goleadores',
  imports: [MatTableModule, CommonModule, MatDividerModule, SinDatosComponent],
  templateUrl: './goleadores.component.html',
  styleUrl: './goleadores.component.scss'
})
export class GoleadoresComponent {
  displayedColumns3: string[] = ['product', 'price'];
  dataSource3 = PAYMENT_DATA;
}
