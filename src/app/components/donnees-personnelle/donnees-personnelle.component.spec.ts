import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesPersonnelleComponent } from './donnees-personnelle.component';

describe('DonneesPersonnelleComponent', () => {
  let component: DonneesPersonnelleComponent;
  let fixture: ComponentFixture<DonneesPersonnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonneesPersonnelleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonneesPersonnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
