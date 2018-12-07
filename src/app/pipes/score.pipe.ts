import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value > 0) {
      return `<span class="scorePlus score">+${value}</span>`
    } else if (value == 0) {
      return `<span class="score0 score">${value}</span>`
    } else {
      return `<span class="scoreMoins score">${value}</span>`
    }
  }
}
