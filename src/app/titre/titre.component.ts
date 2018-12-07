import {Component} from '@angular/core';

@Component({
    selector: 'mon-composant',
    template: '<h1>Ceci est mon composant</h1>  <h2> hello  je suis une chose </h2>  <p> TODO :  </p> <input type ="text #champsaisi> '

})
export class TitreComponent {

    uneChose:string ;

   //  todo : Todo;

 cache : boolean;

    constructor(){

        this.uneChose = 'je suis une chose';
        
        this.cache = true;

      //  this.todo = new Todo();

    }

}