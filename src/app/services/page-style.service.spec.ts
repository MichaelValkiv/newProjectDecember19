import { TestBed } from '@angular/core/testing';

import { PageStyleService } from './page-style.service';

describe('PageStyleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageStyleService = TestBed.get(PageStyleService);
    expect(service).toBeTruthy();
  });
});
