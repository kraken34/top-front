import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value>0) {
      return `<div class="score scorePositif"> +${value}<div>`;
    }else if(value<0){
      return `<div class="score scoreNegatif">${value}<div>`;
    }else{
      return `<div class="score">${value}<div>`;
    }
    
  }

}
