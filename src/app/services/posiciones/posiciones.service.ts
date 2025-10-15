import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Posicion } from '@interfaces/posicion.interface';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '@services/shared/auth.service';

@Injectable({
  providedIn: 'root'
})

export class PosicionesService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getTablaPosicionById(idedicion: number): Observable<Posicion[]> {
    const token = this.authService.getToken();

    const headers = {
      Authorization: `Bearer ${token}`
    };

    return this.http
      .get<{ success: boolean, data: Posicion[] }>(
        `${environment.apiUrl}/posiciones/edicion/${idedicion}`,
        { headers }
      )
      .pipe(map(response => response.data));
  }



}
