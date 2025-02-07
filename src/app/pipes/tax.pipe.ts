import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax',
  standalone: true
})
export class TaxPipe implements PipeTransform {

  transform(value: number, taxAmount: number): number {
    const tax = value + (value * taxAmount/100);
    return tax;
  }

}
