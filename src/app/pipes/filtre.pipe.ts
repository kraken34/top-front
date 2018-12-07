import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../models';

@Pipe({
  name: 'filtrePseudo'
})
export class FiltrePipe implements PipeTransform {

  transform(value: Collegue[], filtreP: string, args?: any): any 
  { 
    if(!filtreP){ 
      return value; 
    } else{ 
      return value.filter(p => p.pseudo.toUpperCase().includes(filtreP.toUpperCase())) 
    }
}

}
