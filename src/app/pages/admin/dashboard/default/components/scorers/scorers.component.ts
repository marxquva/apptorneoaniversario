import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-scorers',
  imports: [MatButtonModule,MatCardModule, MatIconModule],
  templateUrl: './scorers.component.html',
  styleUrl: './scorers.component.scss'
})
export class ScorersComponent {

}
