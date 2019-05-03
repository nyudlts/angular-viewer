import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor (public heroService: HeroService) {}

  ngOnInit () {}

}
