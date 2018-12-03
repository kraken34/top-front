import { Component, Input} from '@angular/core';

@Component({
    selector: 'mon-composant',
    template: `
        <h1>{{titre}}</h1>
    `
})
export class Collegue {

    pseudo: string

    score: number

    listImages: string[];


   constructor( pseudo, score, listImages) { 

        this.pseudo = pseudo;

        this.score =score;

        this.listImages = listImages
    }

    traiter(av:Avis){

        if(av===Avis.AIMER){

            this.score+=100;

        }else{

            this.score-=100;

        }

    }


}

export enum Avis {

    AIMER, DETESTER

}

  