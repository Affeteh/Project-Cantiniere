import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailledUserModalComponent } from './detailled-user-modal.component';

describe('DetailledUserModalComponent', () => {
  let component: DetailledUserModalComponent;
  let fixture: ComponentFixture<DetailledUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailledUserModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailledUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
