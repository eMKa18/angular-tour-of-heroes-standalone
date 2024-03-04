import { TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { MockHeroService, MockMessageService } from './mock-heroes';
import { MessageService } from '../message.service';


describe('HeroesComponent standalone', () => {
  let component: HeroesComponent;
  let heroService: HeroService;
  let msgService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesComponent, {provide: HeroService, useClass: MockHeroService}, {provide: MessageService, useClass: MockMessageService}]
    });
    component = TestBed.inject(HeroesComponent);
    heroService = TestBed.inject(HeroService);
    msgService = TestBed.inject(MessageService);
  });

  it('should list heroes', () => {
    component.ngOnInit();
    expect(component.heroes.length).not.toEqual(0);
  });
});
