import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { HeroService } from '../hero.service';
import { Metadata } from '../metadata';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  book: Book;

  metadata: Metadata[];

  label = 'Book'

  getMetadata(): void {
    this.heroService.getMetadata().subscribe(metadata => {
      this.metadata = Object.values(metadata[0].metadata)
      console.log(this.metadata)
    })
  }

  getLabel(): void {
    this.heroService.getLabel().subscribe(book => {
      this.label = book[0].entity_title
    })
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getLabel();
    this.getMetadata();
  }

}
