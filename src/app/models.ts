export class Collegue {
    pseudo: string;
    score: number;
    imageUrl: string;
    nom:string;
    prenom:string;
    mail:string;
    adresse:string;


    constructor(pseudo:string,imageUrl:string, score:number, nom:string, prenom:string, mail:string, adresse:string) {
        this.pseudo = pseudo;
		this.imageUrl = imageUrl;
		this.score = score;
		this.nom = nom;
		this.prenom = prenom;
		this.mail = mail;
		this.adresse = adresse;
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
