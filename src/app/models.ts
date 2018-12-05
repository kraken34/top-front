export class Collegue {
    pseudo: string;
    score: number;
    photo: string;

    constructor(photo:string, pseudo:string, score:number) {
        this.photo = photo
        this.pseudo = pseudo
        this.score = score
    }

}
export enum Avis {AIMER,DESTESTER};

export class Vote{
    personne: Collegue;
    avisPerso : Avis;

    constructor(personne:Collegue, avisPerso:Avis){
        this.personne = personne;
        this.avisPerso = avisPerso;
    }

    AvisNbPoints(){
        if(this.personne.score >=100){
           return this.personne.pseudo+" est adoré(e) avec un score de "+this.personne.score;
            
        }else{
           return this.personne.pseudo+" est detesté(e) avec un score de "+this.personne.score;
        }
    }


}
