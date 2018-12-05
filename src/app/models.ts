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

    constructor(collegue, avis) {
        this.collegue = collegue;
        this.avis = avis;
    }
}