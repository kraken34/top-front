export class Collegue {

    photo: string
    pseudo: string
    score: number

    constructor(photo: string, pseudo: string, score: number) {
        this.photo = photo
        this.pseudo = pseudo
        this.score = score
    }
}

export enum Avis { AIMER, DETESTER }

export class Vote {
    collegue: Collegue
    avis: Avis

    constructor(collegue: Collegue, avis: Avis) {
        this.collegue = collegue
        this.avis = avis
    }
}