import { TestBed } from '@angular/core/testing';

import { ServiceSearchResultMessengerService } from './service-search-result-messenger.service';

describe('ServiceSearchResultMessengerService', () => {
  let service: ServiceSearchResultMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSearchResultMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
