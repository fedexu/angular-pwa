import { TestBed } from '@angular/core/testing';

import { FavoritesDataService } from './favorites-data.service';

describe('FavoritesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoritesDataService = TestBed.get(FavoritesDataService);
    expect(service).toBeTruthy();
  });
});
