import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tiempoDesdeAhora'
})
export class ElapsedTimeCalcPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let fecha = new Date(value as string);
    let ahora = new Date();

    if (fecha.getTime() > ahora.getTime()) {
      return "Introduce una fecha del pasado";
    }
    
    let diferencia = ahora.getTime() - fecha.getTime();
    let segundos = diferencia / 1000;
    let minutos = segundos / 60;
    let horas = minutos / 60;
    let dias = horas / 24;
    let meses = dias / 30;
    let años = meses / 12;

    if (años >= 1) {
      return Math.floor(años) + " años";
    }
    if (meses >= 1) {
      return Math.floor(meses) + " meses";
    }
    if (dias >= 1) {
      return Math.floor(dias) + " días";
    }
    if (horas >= 1) {
      return Math.floor(horas) + " horas";
    }
    if (minutos >= 1) {
      return Math.floor(minutos) + " minutos";
    }
    if (segundos >= 1) {
      return Math.floor(segundos) + " segundos";
    }
    return "ahora";
  }

}
