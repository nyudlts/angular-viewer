import { Component, Injectable } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

@Injectable({
  providedIn: 'root',
})

export class AppComponent {

  title = 'Resource';

  constructor(public heroService: HeroService) {}

}
