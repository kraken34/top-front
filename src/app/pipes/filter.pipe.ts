import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Collegue[], filt: string): any {
    if(!filt) return items
    else {
      return items.filter( it => {
        return it.pseudo.toLowerCase().includes(filt.toLowerCase())
      });
    }
}
}