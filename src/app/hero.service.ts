import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { BOOK } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getMetadata(): Observable<Book[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched metadata');
    return of(BOOK);
  }

  getLabel(): Observable<Book[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched label');
    return of(BOOK);
  }

}
