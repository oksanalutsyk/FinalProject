import { TestBed } from '@angular/core/testing';

import { SizeServices } from './size-services';

describe('SizeServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SizeServices = TestBed.get(SizeServices);
    expect(service).toBeTruthy();
  });
});
