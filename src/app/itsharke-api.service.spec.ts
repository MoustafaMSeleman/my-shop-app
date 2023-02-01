import { TestBed } from '@angular/core/testing';

import { ItsharkeApiService } from './itsharke-api.service';

describe('ItsharkeApiService', () => {
  let service: ItsharkeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItsharkeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
