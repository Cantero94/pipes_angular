import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contar'
})
export class WordCounterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return (value as string).split(' ').length;
    }
    return null;
  }

}
