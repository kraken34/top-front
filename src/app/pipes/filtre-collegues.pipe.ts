import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../models';

@Pipe({
  name: 'filtreCollegues'
})
export class FiltreColleguesPipe implements PipeTransform {

  transform(collegues:Collegue[], pseudo: string): any {

    if (pseudo==null){
      return collegues;
    }else{
      return collegues.filter(col=>col.nom.toUpperCase()
                                    .includes(pseudo.toLocaleUpperCase()));
    }
  }

}
