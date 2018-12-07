import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../models';

@Pipe({
  name: 'filtrePseudo'
})
export class FiltrePseudoPipe implements PipeTransform {
  transform(value: Collegue[], filtreP: string, args?: any): Collegue[] {
    if(!filtreP){
      return value;
    }
    else{
      return value.filter(p => p.pseudo.toLowerCase().includes(filtreP.toLowerCase()))
    }
  }
}
