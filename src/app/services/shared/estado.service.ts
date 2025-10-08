import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  // Estado inicial: false
  private mostrarSubject = new BehaviorSubject<boolean>(true);
  // Observable para que los componentes puedan suscribirse
  mostrar$ = this.mostrarSubject.asObservable();

  constructor() {}

  // Método para cambiar el estado
  setMostrar(valor: boolean): void {
    this.mostrarSubject.next(valor);
  }

  // Método para obtener el valor actual (sin necesidad de suscripción)
  getMostrar(): boolean {
    return this.mostrarSubject.getValue();
  }
}
