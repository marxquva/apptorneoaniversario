import { Component,Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { AuthService } from '@services/shared/auth.service';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit{
  userName: any | null = null;
  @Input() title: string = '';
  @Input() items: string[] = [];
  constructor(
      private authService: AuthService
  ) {}

  ngOnInit(): void {
  
      const user = this.authService.getUserFromToken();
      this.userName = user || 'Invitado';

  }
}


