import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  filteredList: Collegue[]

  transform(tab: Collegue[], filter: string): Collegue[] {
    return tab.filter(col => col.pseudo.includes(filter ? filter : ""))
  }
}