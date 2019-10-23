import { TestBed } from '@angular/core/testing';

import { ExampleGuardService } from './example-guard.service';

describe('ExampleGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleGuardService = TestBed.get(ExampleGuardService);
    expect(service).toBeTruthy();
  });
});
