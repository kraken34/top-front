import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(score:number): any {
   if(score >0){
    return ` + ${score}`;
   }else if(score < 0){
    return `${score}`;
   }else if(score==0){
     return `${score}`;
   }
  }

}
