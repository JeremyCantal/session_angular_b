import { TestBed } from '@angular/core/testing';

import { RocketDetailsResolver } from './rocket-details.resolver';

describe('RocketDetailsResolver', () => {
  let resolver: RocketDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RocketDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
