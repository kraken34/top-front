import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../models';

@Pipe({
  name: 'filtrerCollegue'
})
export class FiltrerColleguePipe implements PipeTransform {

  transform(items: Collegue[], filtrage: string): any {
if (!filtrage) return items
else {
  return items.filter( it => {
    return it.pseudo.toLowerCase().includes(filtrage.toLowerCase()); 
  });
}
   }

}
