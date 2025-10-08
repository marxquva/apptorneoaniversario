import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '@services/shared/auth.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  userName: any | null = null;

  constructor(
      private router: Router,
      private authService: AuthService
  ) {}

  ngOnInit(): void {
  
      const user = this.authService.getUserFromToken();
      this.userName = user || 'Invitado';

  }

  onProfile(): void {
    // Aquí puedes redirigir al perfil
    //console.log('Ir a perfil');
  }

  onLogout(): void {
    // Aquí colocas tu lógica de logout (auth service, limpiar tokens, etc.)
    //console.log('Cerrar sesión');
    //this.authService.setToken(res.token);
    this.authService.logout();
    this.router.navigate(['/']);
    
  }
}
