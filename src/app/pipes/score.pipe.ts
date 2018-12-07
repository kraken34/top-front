import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: string): string {

    return (+value>0)? `+${value}` : `${value}`;

  }
}
