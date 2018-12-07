import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collegue } from '../models';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  collegue: Collegue;
  pseudo: string;

  constructor(private route: ActivatedRoute, private col: CollegueService) {
    this.pseudo = route.snapshot.paramMap.get("pseudo")

    col.chercherParPseudo(this.pseudo)
      .subscribe(col => this.collegue = col)

  }

  ngOnInit() {
  }

}
