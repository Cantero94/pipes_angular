import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class TextHiderPipe implements PipeTransform {
  transform(valor: string, args: number): string {
    if (!valor) return valor;

    switch (args) {
      case 1: // Email
        const [localPart, domain] = valor.split('@');
        if (localPart.length <= 3) return valor;
        return `${localPart.slice(0, 3)}***@${domain}`;
      case 2: // DNI
        return `${valor.slice(0, 2)}***${valor.slice(-2)}`;
      case 3: // Tarjeta de crédito
        return `${valor.slice(0, 4)} **** **** ${valor.slice(-4)}`;
      default:
        return valor;
    }
  }
}