import { Component } from '@angular/core';
import { Hero } from "./hero"
import {FormsModule} from '@angular/forms'

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
}
