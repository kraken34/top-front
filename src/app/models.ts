export class Collegue {
    pseudo: string
    score: number
    listImages: string[];

    constructor(pseudo, score, images) {
        this.pseudo = pseudo;
        this.score = score;
        this.listImages = images;
    }
    traiter(av: Avis) {
        if (av === Avis.AIMER) {
            this.score += 100;
        } else {
            this.score -= 100;
        }
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