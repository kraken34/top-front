export class Collegue {
    lienPhoto:string;
    pseudo:string;
    score:number;
    nom:string;
    prenom:string;
    email:string;

    constructor(lienPhoto:string, pseudo:string, score:number, nom:string, prenom:string, email:string) {
        this.lienPhoto = lienPhoto;
        this.pseudo = pseudo;
        this.score = score;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }
}

export enum Avis {
    AIMER, DETESTER
}


export class Vote {
    collegue:Collegue;
    avis:Avis;
    constructor(collegue:Collegue, avis:Avis) {
        this.collegue = collegue;
        this.avis = avis;
    }
}