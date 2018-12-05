export class Collegue {

    nom: string;
    score: number;
    lienPhoto: string;

    constructor(nom: string, score: number, lienPhoto: string) {
        this.nom = nom;
        this.score =score;
        this.lienPhoto = lienPhoto;
    }

    // incrementScore(avis: Avis) {
    //     if (avis === Avis.AIMER) {
    //         this.score++;
    //     } else {
    //         this.score--;
    //     }
    // }
}

export class CollegueAcDetails extends Collegue{
    email: string;

    constructor(nom: string, score: number, lienPhoto: string, email:string) {
        super(nom, score, lienPhoto);
        this.email=email;
    }
}

export enum Avis { AIMER = 'AIMER', DETESTER = 'DETESTER' };

export class Vote {
    collegue: Collegue;
    avis: Avis;

    constructor(collegue: Collegue, avis: Avis) {
        this.collegue = collegue;
        this.avis = avis;
    }
}

export class HistoriqueVotes {

    votes: Vote[] = new Array<Vote>();

    constructor() {
    }

    incrementHistoriqueVote(vote: Vote) {
        this.votes.unshift(vote);
    }

    supprimerVote(voteI: Vote) {
        
        this.votes = this.votes.filter(v => v !== voteI)
    }
}