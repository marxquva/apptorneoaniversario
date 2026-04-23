import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '@interfaces/message.interface';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '@services/shared/auth.service';



@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getComunicadoById(idedicion: number): Observable<Message[]> {
    const token = this.authService.getToken(); // ✅ Usa el servicio

    const headers = {
      Authorization: `Bearer ${token}`
    };

    return this.http
      .get<{ success: boolean, data: Message[] }>(
        `${environment.apiUrl}/comunicados/edicion/${idedicion}`,
        { headers }
      )
      .pipe(map(response => response.data));
  }



}
