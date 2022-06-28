import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  //importa img nel component e lo richiamo nell'html tramite variabile
  logo = 'assets/images/logo-white.png';

  ngOnInit(): void {
  }

}
