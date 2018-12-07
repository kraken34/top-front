import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let cssClass = "";
    
    if(value > 0) {
      cssClass="scorePositif";
      value = "+"+value;
    }
    else if(value < 0) {
      cssClass="scoreNegatif";
    }
    else {
      cssClass="scoreNul";
    }

    let tmp = `<div class="${cssClass}">${value}</div>`;
    
    return tmp ;
  }

}
