import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BooksUserComponent } from './books-user.component';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

describe('BooksUserComponent', () => {
  let component: BooksUserComponent;
  let fixture: ComponentFixture<BooksUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksUserComponent ],
      imports : [FormsModule, MDBBootstrapModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
