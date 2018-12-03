import { EventEmitter, Output, Input } from '@angular/core';


export class Collegue{
    photo:string;
    pseudo:string;
    score:number;

    constructor(photo:string, pseudo:string, score:number) {
        this.photo = photo;
        this.pseudo = pseudo;
        this.score = score;
    }

}


// Enum avis
export enum Avis {AIMER, DESTESTER}

export class Vote{

    constructor(public collegue:Collegue, public avis:Avis) {
    
    }

}