import { TestBed } from '@angular/core/testing';

import { VisualitzacionServiceService } from './visualitzacion-service.service';

describe('VisualitzacionServiceService', () => {
  let service: VisualitzacionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualitzacionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
