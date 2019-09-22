import { TestBed } from '@angular/core/testing';

import { BrendsService } from './brends.service';

describe('BrendsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrendsService = TestBed.get(BrendsService);
    expect(service).toBeTruthy();
  });
});
