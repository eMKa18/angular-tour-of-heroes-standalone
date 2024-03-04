import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { MockHeroService, MockMessageService } from './mock-heroes';
import { MessageService } from '../message.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { of } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesComponent],
      providers: [HeroesComponent, {provide: HeroService, useClass: MockHeroService}, {provide: MessageService, useClass: MockMessageService}, 
        {provide: ActivatedRoute, useValue: {params: of("")}}]
    }).compileComponents();
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show proper number of li elements', () => {
    const ne = fixture.nativeElement;
    const listElements = ne.querySelectorAll('li');
    expect((listElements).length).toEqual(3);
  });
});
