import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Partido } from '@interfaces/partido.interface';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '@services/shared/auth.service';

@Injectable({
  providedIn: 'root'
})

export class MatchesService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getFixtureById(idedicion: number): Observable<Partido[]> {
    const token = this.authService.getToken();

    const headers = {
      Authorization: `Bearer ${token}`
    };

    return this.http
      .get<{ success: boolean, data: Partido[] }>(
        `${environment.apiUrl}/fixture/edicion/${idedicion}`,
        { headers }
      )
      .pipe(map(response => response.data));
  }



}
