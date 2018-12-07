import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../models';

@Pipe({
  name: 'collegue'
})
export class ColleguePipe implements PipeTransform {

  transform(tabCollegue: Collegue[], args?: string): Collegue[] {
    if (args != null) {
      return tabCollegue.filter((c:Collegue)=> c.pseudo.startsWith(args.toUpperCase()));
    }
    else {
      return tabCollegue;
    }
  }

}
