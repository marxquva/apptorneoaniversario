import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-top-cards',
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './top-cards.component.html',
  styleUrl: './top-cards.component.scss'
})
export class TopCardsComponent {

}
