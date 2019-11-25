import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIndividualBookComponent } from './display-individual-book.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DisplayIndividualBookComponent', () => {
  let component: DisplayIndividualBookComponent;
  let fixture: ComponentFixture<DisplayIndividualBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayIndividualBookComponent ],
      imports : [MDBBootstrapModule, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIndividualBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
