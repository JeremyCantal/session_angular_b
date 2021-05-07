import { TestBed } from '@angular/core/testing';

import { RocketResolver } from './rocket.resolver';

describe('RocketResolver', () => {
  let resolver: RocketResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RocketResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
