import { TestBed } from '@angular/core/testing';

import { ServicioAnimalesService } from './servicio-animales.service';

describe('ServicioAnimalesService', () => {
  let service: ServicioAnimalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAnimalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
