import { TestBed } from '@angular/core/testing';

import { VintageService } from './vintage.service';

describe('VintageService', () => {
  let service: VintageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VintageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
