import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuardAdmin } from './auth.guard';
import { AuthGuardUser } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardAdmin],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([AuthGuardAdmin], (guard: AuthGuardAdmin) => {
    expect(guard).toBeTruthy();
  }));
});

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardUser],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([AuthGuardUser], (guard: AuthGuardUser) => {
    expect(guard).toBeTruthy();
  }));
});
