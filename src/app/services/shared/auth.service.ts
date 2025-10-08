import { Injectable, computed, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';


interface JwtPayload {
  usuario: string;
  // Agrega aquí más campos si tu token los tiene
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token = signal<string | null>(localStorage.getItem('token'));

  // Método para guardar el token
  setToken(token: string): void {
    localStorage.setItem('token', token);
    this._token.set(token);
  }

  // Método para obtener el token actual
  getToken(): string | null {
    return this._token();
  }

  // Método para saber si el usuario está autenticado
  isLoggedIn = computed(() => this._token() !== null);

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
    this._token.set(null);
  }

  // ✅ Método para obtener los datos del token decodificado
  getUserFromToken(): JwtPayload | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded;
    } catch (err) {
      console.error('Token inválido', err);
      return null;
    }
  }
}
