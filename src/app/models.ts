export class Collegue {
    pseudo: string;
    score: number;
    listImages: string[];

    constructor(pseudo, score, images:string[]) {
        this.pseudo = pseudo;
        this.score = score;
        this.listImages = images;
    }
}
export class CollegueFull extends Collegue{
    nom:string
    prenom:string;
    email:string;
    adresse:string;

    constructor(pseudo, score, images:string[],nom,prenom,email,adresse){
        super(pseudo, score, images);
        this.nom=nom;
        this.prenom=prenom;
        this.email=email;
        this.adresse=adresse;
    }
}

export enum Avis {
    AIMER, DETESTER
}

export class Vote {
    collegue: Collegue;
    avis: Avis;
    oldScore:number;
	dateVote:Date;

    constructor(collegue, avis,oldScore,date) {
        this.collegue = collegue;
        this.avis = avis;
        this.oldScore=oldScore;
        this.dateVote=date;
    }
}