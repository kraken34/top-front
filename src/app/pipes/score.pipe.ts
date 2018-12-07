import { Pipe, PipeTransform } from '@angular/core';
import { ValueTransformer } from "@angular/compiler/src/util";
@Pipe({
  name: 'score'
})



export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value < 0){
      return `

      <span class="scorenégatif"><h2> ${value}</h2></span> `;

    }
  else {
    return `

    <span class="scorepositif"><h3> + ${value}</h3></span>`;

  }
  }

}
