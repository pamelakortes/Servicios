import { TestBed } from '@angular/core/testing';

import { InfoPersonalService } from './info-personal.service';

describe('InfoPersonalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoPersonalService = TestBed.get(InfoPersonalService);
    expect(service).toBeTruthy();
  });
});
