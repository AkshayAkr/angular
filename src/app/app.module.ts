import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { StartpageComponent } from './startpage/startpage.component';
import { FormsModule } from '@angular/forms';
import { BookModule } from './book/book.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    StartpageComponent
  ],
  imports: [
    BrowserModule,
    RatingModule,
    ReactiveFormsModule,
    BookModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
