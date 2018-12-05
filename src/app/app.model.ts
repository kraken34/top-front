import { EventEmitter, Output, Input } from '@angular/core';


export class Collegue{
    photo:string;
    pseudo:string;
    score:number;
    nom:string;
    prenom:string;
    email:string;
    adresse:string;

    constructor(photo:string, pseudo:string, score:number, nom:string, prenom:string, email:string, adresse:string) {
        this.photo = photo;
        this.pseudo = pseudo;
        this.score = score;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.adresse = adresse;
    }

}


// Enum avis
export enum Avis {AIMER, DESTESTER}

export class Vote{

    constructor(public collegue:Collegue, public avis:Avis) {
    
    }

}