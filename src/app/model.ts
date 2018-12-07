export class Collegue {

    nom: string
    prenom: string
    pseudo: string
    email: string
    adresse: string
    score: number
    photo: string

    constructor(nom?: string, prenom?: string, pseudo?: string, email?: string, adresse?: string, score?: number, photo?: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.pseudo = pseudo;
        this.email = email;
        this.adresse = adresse;
        this.score = score;
        this.photo = photo;
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