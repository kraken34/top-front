import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
if (value >0 ) {
 return `<span class="scoreP" style="color:green" >+ ${value}</span>`   
}
 else if (value <0)
  {
    return `<span class="scoreM"> ${value}</span>`   

 } else  {
  return `<span class="scoreN"> ${value}</span>`   

 }

    }
  }


