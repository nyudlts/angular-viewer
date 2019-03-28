import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  label = 'Book';

  ngOnInit() {
    this.getLabel();
  }

  getLabel(): void {
    this.heroService.getLabel().subscribe(book => {
      this.label = book[0].entity_title
    })
  }

  constructor(private heroService: HeroService) { }

}
