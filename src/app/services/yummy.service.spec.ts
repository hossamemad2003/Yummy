import { TestBed } from '@angular/core/testing';

import { YummyService } from './yummy.service';

describe('YummyService', () => {
  let service: YummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
