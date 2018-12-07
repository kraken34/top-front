import { AvisComponent } from './avis/avis.component';
    
export class Collegue {
        pseudo:string;
        score:number;
        avis:AvisComponent;
        images:string;
        nom:string;
        prenom:string;
        adresse:string;
        email:string


        constructor(pseudo:string, score:number, images:string, nom:string, prenom:string, adresse:string, email:string) {
            this.pseudo  = pseudo
            this.score = score
            this.nom = nom
            this.prenom = prenom
            this.adresse = adresse
            this.email = email
            this.images = images
        }
        }
export enum Avis {
    AIMER='AIMER',
    DETESTER='DETESTER'
}
export class Vote {
    collegue:Collegue
    avis:Avis
    
    constructor(collegue:Collegue, avis:Avis) {
     this.collegue = collegue
     this.avis = avis
    }
}