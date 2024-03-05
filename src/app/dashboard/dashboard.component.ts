import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { RouterLink } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink, HeroSearchComponent,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  private heroesSubscription?: Subscription;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  ngOnDestroy(): void {
    this.heroesSubscription?.unsubscribe();
  }

  getHeroes(): void {
    this.heroesSubscription = this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
