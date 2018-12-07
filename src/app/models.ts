import { AvisComponent } from './avis/avis.component';

export class Collegue {
    photo: string;
    pseudo: string;
    avis: AvisComponent;
    score: number;
    nom: string;
    prenom: string;
    email: string;
    adresse: string;

    constructor(photo, pseudo, score, nom, prenom, email, adresse) {
        this.photo = photo;
        this.pseudo = pseudo;
        this.score = score;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.adresse = adresse;
    }
}

export enum Avis {
    AIMER = 'AIMER',
    DETESTER = 'DETESTER'
}

export class Vote {
    colleg: Collegue;
    avis: Avis;

    constructor(colleg: Collegue, avis: Avis) {
        this.colleg = colleg;
        this.avis = avis;
    }
}