import { TestBed } from '@angular/core/testing';

import { MessageServices } from './message-services';

describe('MessageServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageServices = TestBed.get(MessageServices);
    expect(service).toBeTruthy();
  });
});
