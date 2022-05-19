import { TestBed } from '@angular/core/testing';

import { ServiceFilterMessengerService } from './service-filter-messenger.service';

describe('ServiceFilterMessengerService', () => {
  let service: ServiceFilterMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFilterMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
