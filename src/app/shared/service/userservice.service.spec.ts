import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserserviceService } from './userservice.service';

describe('UserserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports : [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: UserserviceService = TestBed.get(UserserviceService);
    expect(service.addUser).toBeTruthy();
  });
  it('should be created', () => {
    const service: UserserviceService = TestBed.get(UserserviceService);
    expect(service.getAllUsers).toBeTruthy();
  });
  it('should be created', () => {
    const service: UserserviceService = TestBed.get(UserserviceService);
    expect(service.getUserById).toBeTruthy();
  });
  it('should be created', () => {
    const service: UserserviceService = TestBed.get(UserserviceService);
    expect(service.renewUserBookById).toBeTruthy();
  });
});
