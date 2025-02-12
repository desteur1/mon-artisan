import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesibiliteComponent } from './accesibilite.component';

describe('AccesibiliteComponent', () => {
  let component: AccesibiliteComponent;
  let fixture: ComponentFixture<AccesibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesibiliteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
