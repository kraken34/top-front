import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, args?: any): any {

    if(value > 0) {
      return `<span class="scorePos scoreStyle">${value}</span>`
    } else if (value == 0) {
      return `<span class="scoreJuste scoreStyle">${value}</span>`
    } else {
    return `<span class="scoreStyle scoreNeg">${value}</span>`;
    }
  }

}
