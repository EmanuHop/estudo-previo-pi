import { TestBed } from '@angular/core/testing';

import { EstudoprevioService } from './estudoprevio.service';

describe('EstudoprevioService', () => {
  let service: EstudoprevioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudoprevioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
