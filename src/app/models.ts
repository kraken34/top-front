export class Collegue {
    pseudo: string
    score: number
    listImages: string[];

    constructor() {
        this.pseudo = `Stephane`;
        this.score = 300;
        this.listImages = [`https://wallpapercave.com/wp/wp1811952.jpg`, `https://wallpapersite.com/images/pages/pic_w/1799.jpg`, `http://hdqwalls.com/wallpapers/skyscraper-movie-10k-ve.jpg`];
    }
    traiter(av:Avis){
        if(av===Avis.AIMER){
            this.score+=100;
        }else{
            this.score-=100;
        }
    }

}
export enum Avis {
    AIMER, DETESTER
}