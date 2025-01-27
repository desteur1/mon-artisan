import { TestBed } from '@angular/core/testing';

import { ArtisanDataService } from './artisan-data.service';

describe('ArtisanDataService', () => {
  let service: ArtisanDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisanDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
