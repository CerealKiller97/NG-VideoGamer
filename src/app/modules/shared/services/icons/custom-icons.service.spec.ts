import { TestBed } from '@angular/core/testing';

import { CustomIconsService } from './custom-icons.service';

describe('CustomIconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomIconsService = TestBed.get(CustomIconsService);
    expect(service).toBeTruthy();
  });
});
