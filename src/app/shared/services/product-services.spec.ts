import { TestBed } from '@angular/core/testing';

import { ProductServices} from './product-services';

describe('ProductServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductServices= TestBed.get(ProductServices);
    expect(service).toBeTruthy();
  });
});
