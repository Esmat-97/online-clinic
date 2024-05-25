import { TestBed } from '@angular/core/testing';

import { DocRequestsService } from './doc-requests.service';

describe('DocRequestsService', () => {
  let service: DocRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
});
