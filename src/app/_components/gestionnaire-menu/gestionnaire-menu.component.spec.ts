import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireMenuComponent } from './gestionnaire-menu.component';

describe('GestionnaireMenuComponent', () => {
  let component: GestionnaireMenuComponent;
  let fixture: ComponentFixture<GestionnaireMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionnaireMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnaireMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
