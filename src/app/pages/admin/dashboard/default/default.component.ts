import { Component } from '@angular/core';
import { TopCardsComponent } from './components/top-cards/top-cards.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScorersComponent } from "./components/scorers/scorers.component";
import { MatCardModule } from "@angular/material/card";
import { WelcomeComponent } from "./components/welcome/welcome.component";

@Component({
  selector: 'app-default',
  imports: [LatestNewsComponent, TopCardsComponent, MatGridListModule, ScorersComponent, MatCardModule, WelcomeComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {

}
