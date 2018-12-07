
export class CollegueForm {
    matricule :String
    pseudo : String
    urlImage: String
}

export class Collegue {

    pseudo: string

    score: number

    listImages: string[];

    nom : String

    prenom : String 

    email : String 

    adresse : String 


    constructor(pseudo: string, score: number, listImages: string[], nom : String, prenom : String, email : String , adresse : String   ) {

        this.pseudo = pseudo;

        this.score = score;

        this.listImages = listImages
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.adresse = adresse; 
        


    }

}

export enum Avis {

    AIMER, DETESTER
}

export class Vote {

    colleg: Collegue

    avis: Avis


    constructor(colleg: Collegue, avis: Avis) {

        this.colleg = colleg;

        this.avis = avis

    

 }

    }

