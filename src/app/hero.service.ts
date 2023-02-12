import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
//Import the hero interface
import  {Hero} from './hero'

//Import the Heroes data
import  { HEROES } from './mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes():Observable<Hero[]>{
    const heroes = of(HEROES)
    return heroes
  }
}
