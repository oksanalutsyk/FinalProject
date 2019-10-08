import { TestBed } from '@angular/core/testing';

import { FirstHomeSliderService } from './first-home-slider.service';

describe('FirstHomeSliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstHomeSliderService = TestBed.get(FirstHomeSliderService);
    expect(service).toBeTruthy();
  });
});
