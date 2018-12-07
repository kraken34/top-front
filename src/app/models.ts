import { Input } from "@angular/core";

export class CollegueForm {
    matricule:string;
    pseudo:string;
    imgURL:string;

    constructor() {
        
    }
}
 
export class Collegue {
    score:number;
    photo:string;
    pseudo:string;
    nom:string;
    prenom:string;
    email:string;
    adresse:string;

    constructor(pseudo:string, photo:string, nom:string, prenom:string, adresse:string, email:string, score:number) {
        this.score = score;
        this.photo = photo;
        this.pseudo = pseudo;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.adresse = adresse;
    }
}

export enum Avis {
    AIMER,
    DETESTER
}

export class Vote {
    cible:Collegue;
    avis:Avis;

    constructor(cible:Collegue, avis:Avis){
        this.cible = cible;
        this.avis = avis;
    }

    toString() {
        if(this.avis === Avis.AIMER)
        {
            return `${this.cible.pseudo} est adoré(e) et détient désormais un score de ${this.cible.score}`
        }
        else
        {
            return `${this.cible.pseudo} est détesté(e) et détient désormais un score de ${this.cible.score}`
        }
    }
}