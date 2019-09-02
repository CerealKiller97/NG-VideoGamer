import { TestBed } from '@angular/core/testing';

import { PlatformsService } from './platforms.service';

describe('PlatformsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatformsService = TestBed.get(PlatformsService);
    expect(service).toBeTruthy();
  });
});
