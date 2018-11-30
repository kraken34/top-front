export class Collegue {
    pseudo: string;
    score: number;
    photo: string

    constructor(photo:string, pseudo:string, score:number) {
        this.photo = photo
        this.pseudo = pseudo
        this.score = score
    }

    

}
export enum Avis {AIMER,DESTESTER};