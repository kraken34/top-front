import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrerByPseudo'
})
export class FiltrerByPseudoPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
        if(args==undefined){
          return value;
        }else{
          return value.filter((val)=>val.pseudo.toLowerCase().includes(args.toLowerCase()));
        }

     
  }

}
