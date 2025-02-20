import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})

export class AdultFilterPipe implements PipeTransform {
  palabrasMalsonantes: string[] = ['tonto', 'mierda', 'puta', 'gilipollas', 'cabrón', 'cabron', 'idiota', 'subnormal', 'zorra', 'maricón', 'maricon', 'coño', 'polla', 'joder', 'mamón', 'mamon', 'pendejo', 'pene', 'payaso', 'marrano', 'marrana', 'guarra', 'guarro'];

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      //Al principio pensé en hacerlo así, pero hacer un listado dentro me parecía un poco cutre
      //return (value as string).replace(/(tonto|mierda|puta)/gi, '****');
      //Sin embargo usando expresiones regulares y un array de palabras malsonantes, se puede hacer de forma más elegante
      const expresionRegular = new RegExp(`\\b(${this.palabrasMalsonantes.join('|')})\\b`, 'gi');
      return (value as string).replace(expresionRegular, '****');
    }
    return null;
  }

}
