import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMealModalComponent } from './edit-meal-modal.component';

describe('EditMealModalComponent', () => {
  let component: EditMealModalComponent;
  let fixture: ComponentFixture<EditMealModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMealModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMealModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
