import { Component } from '@angular/core';
import { Hero } from "../hero"

import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
    person:Hero = {
      id:1,
      name:"Kevin"
    }
    heroes = HEROES;
    selectedHero?:Hero;
    onSelect = (hero:Hero)=>{
      this.selectedHero = hero
    }
}