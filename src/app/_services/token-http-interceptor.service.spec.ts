import { TestBed } from '@angular/core/testing';

import { TokenHttpInterceptorService } from './token-http-interceptor.service';

describe('TokenHttpInterceptorService', () => {
  let service: TokenHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
