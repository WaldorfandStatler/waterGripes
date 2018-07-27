import { TestBed, inject } from '@angular/core/testing';

import { GripeService } from './gripe.service';

describe('GripeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GripeService]
    });
  });

  it('should be created', inject([GripeService], (service: GripeService) => {
    expect(service).toBeTruthy();
  }));
});
