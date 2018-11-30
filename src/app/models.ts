import { Input } from "@angular/core";

export class Collegue {
    score:number;
    avatar:string;
    pseudo:string;

    constructor(pseudo:string, avatar:string, score:number)
    {
        this.score = score;
        this.avatar = avatar;
        this.pseudo = pseudo;
    }

    majAvis(event:Avis)
    {
        if(event === Avis.AIMER)
        {
            this.score += 10;
        }
        else
        {
            this.score -= 10;
        }
    }
}

export enum Avis {
    AIMER,
    DETESTER
}