import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(value > 0) {
      return   `<span class="bleu"> + ${value}</span>`
    } else if(value < 0) {
      return  `<span class="rouge">${value}</span>`
    } else {
      return  `<span class="vert">${value}</span>`
    }
  }
}
