import { Injectable } from '@angular/core';

//import the hero interface
import { Hero } from './hero';
//import the mock data
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
}
