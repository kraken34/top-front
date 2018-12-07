import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})

export class ScorePipe implements PipeTransform {
  pos: boolean
  transform(value: number, args?: any): string {
    this.pos = (value >= 0)
    return '<span class=' + (this.pos ? 'blue' : 'red') + '>Score : ' + (this.pos ? '+' : "") + value + '</span>';
  }
}