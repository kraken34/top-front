import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeau-component',
  templateUrl: './bandeau-component.component.html',
  styleUrls: ['./bandeau-component.component.css']
})
export class BandeauComponentComponent implements OnInit {
titre:string;
description:string
  constructor() {
    this.titre = 'Application Top Collègues';
    this.description = 'Les meilleurs collègues du moment'
   }

  ngOnInit() {
  }

}
