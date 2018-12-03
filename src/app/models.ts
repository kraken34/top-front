

export class Collegue{

    nom:string;
    score:number=0;
    lienPhoto:string;
    

    constructor(nom:string, lienPhoto:string){
        this.nom = nom;
        this.lienPhoto = lienPhoto;
    }
}

export enum Avis {AIMER = 'AIMER',DETESTER = 'DETESTER'};