import { Component } from '@angular/core';
import { Hero } from '../hero';  
//import { HEROES } from '../mock-heros'; --> sustituido por el hero.service
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  //heroes= HEROES; --> sustituido por la declaracion heroes: Hero[] = []
  heroes: Hero[] = [];  

  selectedHero!: Hero;

  constructor(private heroService: HeroService) {} 

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}



