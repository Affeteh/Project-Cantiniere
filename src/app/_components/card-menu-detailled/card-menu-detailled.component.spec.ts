import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMenuDetailledComponent } from './card-menu-detailled.component';

describe('CardMenuDetailledComponent', () => {
  let component: CardMenuDetailledComponent;
  let fixture: ComponentFixture<CardMenuDetailledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMenuDetailledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMenuDetailledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
