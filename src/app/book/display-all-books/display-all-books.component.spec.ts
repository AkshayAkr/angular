import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllBooksComponent } from './display-all-books.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DisplayAllBooksComponent', () => {
  let component: DisplayAllBooksComponent;
  let fixture: ComponentFixture<DisplayAllBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllBooksComponent ],
      imports: [MDBBootstrapModule, FormsModule, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
