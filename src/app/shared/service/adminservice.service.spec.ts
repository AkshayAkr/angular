import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminserviceService } from './adminservice.service';

describe('AdminserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports : [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: AdminserviceService = TestBed.get(AdminserviceService);
    expect(service.getAllUsers).toBeTruthy();
  });
  it('should be created', () => {
    const service: AdminserviceService = TestBed.get(AdminserviceService);
    expect(service.getAllbooks).toBeTruthy();
  });
});
