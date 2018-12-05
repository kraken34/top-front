import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collegue } from '../models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() collegue: Collegue;
  
  pseudo: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.pseudo = route.snapshot.paramMap.get("pseudo")

  }

  ngOnInit() {
  }

  changerDePage() {
    this.router.navigate(['/' + this.collegue.pseudo, { pseudo: "pseudo" }])
  }
}
