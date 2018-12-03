export class Collegue {
    lienPhoto:string;
    pseudo:string;
    score:number;
    constructor(lienPhoto:string, pseudo:string, score:number) {
        this.lienPhoto = lienPhoto;
        this.pseudo = pseudo;
        this.score = score;
    }
}

export enum Avis {
    AIMER, DETESTER
}