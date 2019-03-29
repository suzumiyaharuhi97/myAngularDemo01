import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';
import { MessageService } from '../messageService/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }


  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService:fecthed heroes")
    return of(HEROES);
  }
}
