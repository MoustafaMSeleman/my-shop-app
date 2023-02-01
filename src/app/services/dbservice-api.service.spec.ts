import { TestBed } from '@angular/core/testing';

import { DbserviceApiService } from './dbservice-api.service';

describe('DbserviceApiService', () => {
  let service: DbserviceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbserviceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
