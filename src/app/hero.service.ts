import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
//Import the hero interface
import  {Hero} from './hero'

//Import the Heroes data
import  { HEROES } from './mock-heroes'

//import the messages service
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(
    private messageService:MessageService
  ){}

  getHeroes():Observable<Hero[]>{
    const heroes = of(HEROES)
    this.messageService.add("Hero service: fetched heroes")
    return heroes
  }
  getHero(id:Number):Observable<Hero>{
    const hero = HEROES?.find(h=> h.id === id)!
    this.messageService.add(`Hero service: fetched hero id=${id}`)
    return of(hero)
  }
}