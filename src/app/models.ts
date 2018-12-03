export class Collegue {

    nom: string;
    score: number = 0;
    lienPhoto: string;

    constructor(nom: string, lienPhoto: string) {
        this.nom = nom;
        this.lienPhoto = lienPhoto;
    }

    incrementScore(avis: Avis) {
        if (avis === Avis.AIMER) {
            this.score++;
        } else {
            this.score--;
        }
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
        
    console.log('suppression ici');
        this.votes = this.votes.filter(v => v !== voteI)
    }
}