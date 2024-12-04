import { TestBed } from '@angular/core/testing';

import { WineViewService } from './wine-view.service';

describe('WineViewService', () => {
  let service: WineViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
