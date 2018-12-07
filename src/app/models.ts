export class Collegue {

  pseudo: string;
  score: number;
  imageUrl: string[];
  vote: Vote;

  constructor(pseudo: string, imageUrl: string[], score = 0) {

    this.pseudo = pseudo;
    this.imageUrl = imageUrl;
    this.score = score;
  }
}

export class CollegueForm {
  matricule: string;
  pseudo: string;
  imageUrl: string;

}

export enum Avis { AIMER, DETESTER }

export class Vote {
  collegue: Collegue;
  avis: Avis;

  constructor(collegue: Collegue, avis: Avis) {
    this.collegue = collegue;
    this.avis = avis;
  }

  toString() {
    if (this.avis === Avis.AIMER) {
      return `${this.collegue.pseudo} est aimé.e, il/elle a désormais un score de ${this.collegue.score}`;
    } else {
      return `${this.collegue.pseudo} est détesté.e, il/elle a désormais un score de ${this.collegue.score}`;
    }
  }

}
