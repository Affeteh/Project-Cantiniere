import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMealModalComponent } from './delete-meal-modal.component';

describe('DeleteMealModalComponent', () => {
  let component: DeleteMealModalComponent;
  let fixture: ComponentFixture<DeleteMealModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMealModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMealModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
