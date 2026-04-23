import { Component, OnInit, signal } from '@angular/core';
import { CommonModule,AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { Observable, startWith, map, combineLatest } from 'rxjs';
import { LoginService } from '@services/shared/login.service';
import { Torneo, Team } from '@interfaces/login.interface';
import { AuthService } from '@services/shared/auth.service';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatSelectModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  hide = signal(true);
  successMessage: string | null = null;
  errorMessage: string | null = null;
  isLoading = false;

  torneos$!: Observable<Torneo[]>;
  equipos$!: Observable<Team[]>;
  filteredTorneos$!: Observable<Torneo[]>;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private loginService: LoginService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Inicializar formulario
    this.loginForm = this.formBuilder.group({
      torneoname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      equipo: ['', Validators.required]
    });

    this.torneos$ = this.loginService.getTorneos();
    this.equipos$ = this.loginService.getTeams();

    // Asignar el primer torneo al campo 'torneoname' cuando se cargan los torneos
    this.torneos$.subscribe(torneos => {
      if (torneos.length > 0) {
        this.loginForm.get('torneoname')?.setValue(torneos[0].nombre_torneo);
      }
    });

    // Filtrar torneos según input del usuario
    this.filteredTorneos$ = combineLatest([
        this.torneos$,
        this.loginForm.get('torneoname')!.valueChanges.pipe(startWith(''))
      ]).pipe(
        map(([torneos, search]) =>
          torneos.filter(t =>
            t.nombre_torneo.toLowerCase().includes((search || '').toLowerCase())
          )
        )
    );
  }

  // Función privada que filtra las opciones
  /*private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.torneos.filter(option => option.toLowerCase().includes(filterValue));
  }*/

  togglePassword() {
    this.hide.set(!this.hide());
  }

  submit() {

    this.successMessage = null;
    this.errorMessage = null;

    if (this.loginForm.valid) {

      this.isLoading = true;
      const formData = this.loginForm.value;

      const loginPayload = {
        usuario: formData.equipo,     // 👈 Aquí usamos 'equipo' como usuario
        password: formData.password
      };

      this.loginService.login(loginPayload.usuario, loginPayload.password).subscribe({
        next: (res) => {
          //this.toastr.success('Inicio de sesión exitoso', 'Éxito');
          this.successMessage = 'Inicio de sesión exitoso ✅';
          //console.log('Login exitoso:', res.data.token);
          this.authService.setToken(res.data.token);
          this.router.navigate(['/admin/teams']);
          this.isLoading = false;
        },
        error: (err) => {
          const msg = err.error?.message || 'Error al iniciar sesión';
          this.errorMessage = err.error?.message || 'Error al iniciar sesión ❌';
          //this.toastr.error(msg, 'Error');
          console.error('Error al iniciar sesión:', err.error?.message || err.message);
          this.isLoading = false;
          //alert('Login fallido: ' + (err.error?.message || 'Error desconocido'));
        }
      });

    } else {
      this.loginForm.markAllAsTouched();
      this.errorMessage = 'Completa todos los campos requeridos ⚠️';
      //this.toastr.warning('Completa todos los campos requeridos', 'Formulario inválido');
    }
  }


 
}
