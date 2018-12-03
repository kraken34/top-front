export class Collegue {
    pseudo: string;
    score: number;
    photo: string;

    constructor(photo:string, pseudo:string, score:number) {
        this.photo = photo
        this.pseudo = pseudo
        this.score = score
    }

    misAvis(event:Avis){
        if(event==Avis.AIMER){
            this.score+=10;
        }else{
            this.score-=10;
        }
    }

}
export enum Avis {AIMER = "aimé",DESTESTER="détesté"};

export class Vote{
    personne: Collegue;
    avisPerso : Avis;

    constructor(personne:Collegue, avisPerso:Avis){
        this.personne = personne;
        this.avisPerso = avisPerso;
    }

    AvisNbPoints(){
        if(this.personne.score >=100){
           return this.personne.pseudo+" est "+Avis.AIMER+" avec un score de "+this.personne.score;
            
        }else{
           return this.personne.pseudo+" est "+Avis.DESTESTER+" avec un score de "+this.personne.score;
        }
    }


}
