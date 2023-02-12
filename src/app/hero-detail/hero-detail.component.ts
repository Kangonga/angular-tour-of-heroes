import { Component,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from "../hero"
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private heroService:HeroService,
    private location:Location
  ){}
  
  getHero():void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id)
    .subscribe(hero=> this.hero = hero)
  }
  ngOnInit(){
    this.getHero();
  }
  // @Input() hero?:Hero;

  goBack(){
    this.location.back();
  }
  hero?:Hero;
}
