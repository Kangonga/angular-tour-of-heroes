import { Component } from '@angular/core';
import { Hero } from "../hero"
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})

export class HeroesComponent {
    constructor (
      private heroService: HeroService
    ){}
    person:Hero = {
      id:1,
      name:"Kevin"
    }

    heroes:Hero[] = [];
    selectedHero?:Hero;

    onSelect = (hero:Hero)=>{
      this.selectedHero = hero
    }
    getHeroes():void {
      // this.heroes = this.heroService.getHeroes()
      this.heroService.getHeroes()
      .subscribe(heroes=>this.heroes = heroes)
    }

    ngOnInit():void {
      this.getHeroes()
    }
}