import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isLoading = signal<boolean>(false);
  readonly isLoading = this._isLoading.asReadonly();

  setLoading(value: boolean) {
    this._isLoading.set(value);
  }
}