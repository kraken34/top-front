

export class Collegue{

    nom:string;
    score:number=0;
    lienPhoto:string;
    
    constructor(nom:string, lienPhoto:string){
        this.nom = nom;
        this.lienPhoto = lienPhoto;
    }

    incrementScore(avis:Avis){
        if (avis === Avis.AIMER){
            this.score++;
          }else{
            this.score--;
          }
    }

}

export enum Avis {AIMER = 'AIMER',DETESTER = 'DETESTER'};