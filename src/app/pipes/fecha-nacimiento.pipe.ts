import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
import 'moment/locale/es';

@Pipe({
  name: 'fechaNacimiento'
})
export class FechaNacimientoPipe implements PipeTransform {

  transform(
    value: string | Date | moment.Moment | null | undefined,
    modo: 'fecha' | 'edad' = 'fecha',
    formatoSalida: string = 'DD/MM/YYYY'
  ): string {
    if (!value) {
      return '';
    }

    moment.locale('es');
    const fecha = moment(value);

    if (!fecha.isValid()) {
      return 'Fecha inválida';
    }

    if (modo === 'edad') {
      const hoy = moment();
      const edad = hoy.diff(fecha, 'years');
      return `${edad} años`;
    }

    return fecha.format(formatoSalida);
  }
}
