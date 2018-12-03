export class Collegue {
    pseudo: string;
    score: number;
    photo: string

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
export enum Avis {AIMER,DESTESTER};