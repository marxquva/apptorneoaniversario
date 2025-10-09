import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacion'
})
export class SituacionPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Habilitado';
      case 2:
        return 'En revisión';
      case 3:
        return 'Requiere Filtro';
      case 4:
        return 'No permitido';
      default:
        return 'Desconocido';
    }
  }
}
