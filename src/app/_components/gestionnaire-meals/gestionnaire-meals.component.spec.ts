import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireMealsComponent } from './gestionnaire-meals.component';

describe('GestionnaireMealsComponent', () => {
  let component: GestionnaireMealsComponent;
  let fixture: ComponentFixture<GestionnaireMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionnaireMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnaireMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
