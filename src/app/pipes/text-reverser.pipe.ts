import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReverser'
})
export class TextReverserPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return (value as string).split('').reverse().join('');
    }
    return null;
  }

}
