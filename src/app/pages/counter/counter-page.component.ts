import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  templateUrl: './counter-page.component.html',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatSlideToggleModule],
})
export class CounterPageComponent  {
  contador = 10;
  incrementarBy(i: number){
    this.contador += i
  }
}
