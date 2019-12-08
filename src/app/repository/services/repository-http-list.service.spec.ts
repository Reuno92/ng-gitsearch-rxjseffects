import { TestBed } from '@angular/core/testing';

import { RepositoryHttpListService } from './repository-http-list.service';

describe('RepositoryHttpListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryHttpListService = TestBed.get(RepositoryHttpListService);
    expect(service).toBeTruthy();
  });
});
