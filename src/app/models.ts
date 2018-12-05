export class Collegue {
    pseudo: string
    score: number
    listImages: string[];

    constructor(pseudo, score, images:string[]) {
        this.pseudo = pseudo;
        this.score = score;
        this.listImages = images;
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