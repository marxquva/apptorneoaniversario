import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-welcome',
  imports: [MatCardModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
