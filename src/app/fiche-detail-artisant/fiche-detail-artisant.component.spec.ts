import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDetailArtisantComponent } from './fiche-detail-artisant.component';

describe('FicheDetailArtisantComponent', () => {
  let component: FicheDetailArtisantComponent;
  let fixture: ComponentFixture<FicheDetailArtisantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheDetailArtisantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheDetailArtisantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
