import { TestBed } from '@angular/core/testing';

import { ExpansionesService } from './expansiones.service';

describe('ExpansionesService', () => {
  let service: ExpansionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpansionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
