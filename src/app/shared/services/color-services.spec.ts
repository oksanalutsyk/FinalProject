import { TestBed } from '@angular/core/testing';

import { ColorServices} from './color-services';

describe('ColorServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorServices= TestBed.get(ColorServices);
    expect(service).toBeTruthy();
  });
});
