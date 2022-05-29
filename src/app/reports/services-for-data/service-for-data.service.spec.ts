import { TestBed } from '@angular/core/testing';

import { ServiceForDataService } from './service-for-data.service';

describe('ServiceForDataService', () => {
  let service: ServiceForDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceForDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
