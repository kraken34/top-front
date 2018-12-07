import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../app.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  filtrerList:Collegue[] = [];

  transform(value: Collegue[], args?: string): any {

    if(args == null) {
      return value;
    } else{
      return value.filter(collegue => collegue.pseudo.includes(args))
    }


  }



}
