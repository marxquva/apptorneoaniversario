import { Routes } from '@angular/router';
import { GuestComponent } from './template/layout/guest/guest.component';
import { AdminComponent } from './template/layout/admin/admin.component';
import { authGuard } from '@services/auth.guard';

export const routes: Routes = [
  // Rutas para invitados
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/guest/authentication/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/guest/authentication/register/register.component').then(
            (c) => c.RegisterComponent
          ),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },

  // Rutas para administradores
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/admin/dashboard/default/default.component').then(
            (c) => c.DefaultComponent
          ),
      },
      {
        path: 'teams',
        loadComponent: () =>
          import('./pages/admin/dashboard/teams/teams.component').then(
            (c) => c.TeamsComponent
          ),
      },
      {
        path: 'teams/:id',
        loadComponent: () =>
          import('./pages/admin/dashboard/teams/components/detail-team/detail-team.component').then(
            (c) => c.DetailTeamComponent
          ),
      },

      {
        path: 'matches',
        loadComponent: () =>
          import('./pages/admin/dashboard/matches/matches.component').then(
            (c) => c.MatchesComponent
          ),
      },
      {
        path: 'statistics',
        loadComponent: () =>
          import('./pages/admin/dashboard/statistics/statistics.component').then(
            (c) => c.StatisticsComponent
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },

  // Ruta comodín (404)
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];

