import { Pipe, PipeTransform } from '@angular/core';
import { Collegue, Avis } from '../models';

@Pipe({
  name: 'filtrecollegue'
})
export class FiltrecolleguePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value == null || value == [] || args == null) {

      return value;

    } else 

    return value.filter((col: Collegue) => col.pseudo.includes(args));

  }

}

    