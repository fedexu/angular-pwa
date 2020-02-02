import { TestBed } from '@angular/core/testing';

import { FavoriteApiService } from './favorite-api.service';

describe('FavoriteApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteApiService = TestBed.get(FavoriteApiService);
    expect(service).toBeTruthy();
  });
});
