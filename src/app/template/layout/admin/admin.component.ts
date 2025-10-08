import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '@services/shared/auth.service';


// Importa tus propios componentes standalone
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-admin',
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    SidebarComponent,
    MatIconModule,
    MatButtonModule
],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{

  isShowSidebar = true;
  isMobileScreen = false;
  userName: any | null = null;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobileScreen = result.matches;
        this.isShowSidebar = !this.isMobileScreen; // Ocultar sidebar en móviles
      });
    
    const token = this.authService.getToken();
    const loggedIn = this.authService.isLoggedIn();

    const user = this.authService.getUserFromToken();
    this.userName = user || 'Invitado';

    /*console.log(user);

    console.log('Token actual:', token);
    console.log('¿Está logueado?', loggedIn);*/
  }



  toggleSidebar(): void {
    this.isShowSidebar = !this.isShowSidebar;
  }

   get isOver(): boolean {
    return this.isMobileScreen;
  }
}
