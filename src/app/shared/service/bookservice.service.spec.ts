import { TestBed } from '@angular/core/testing';
import BookserviceService from './bookservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BookserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports : [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: BookserviceService = TestBed.get(BookserviceService);
    expect(service.addBook).toBeTruthy();
  });
  it('should be created', () => {
    const service: BookserviceService = TestBed.get(BookserviceService);
    expect(service.deleteBookByID).toBeTruthy();
  });
  it('should be created', () => {
    const service: BookserviceService = TestBed.get(BookserviceService);
    expect(service.getAllbooks).toBeTruthy();
  });
  it('should be created', () => {
    const service: BookserviceService = TestBed.get(BookserviceService);
    expect(service.getBookByID).toBeTruthy();
  });
  it('should be created', () => {
    const service: BookserviceService = TestBed.get(BookserviceService);
    expect(service.updateBookById).toBeTruthy();
  });
});
