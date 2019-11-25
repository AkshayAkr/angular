import { Component, OnInit } from '@angular/core';
import { Userbooks } from '../../userbooks';
import { AdminserviceService } from '../../shared/service/adminservice.service';
import { Users } from '../../Users';
import { Books } from 'src/app/Books';

@Component({
  selector: 'app-books-user',
  templateUrl: './books-user.component.html',
  styleUrls: ['./books-user.component.scss']
})
export class BooksUserComponent implements OnInit {
  inputdata: string;
  user:  Users[] = [];
  userBook: any[] = [];
  newuser: Userbooks ;
  books: Books[] = [];
  userBookIds: any[] = [];
  commonarray: Userbooks[] = [];
  testarray: Userbooks[] = [];
  testarray2: Userbooks[] = [];
    constructor(private admin: AdminserviceService) { }
    ngOnInit() {
      this.getdetails();
    }
    async getdetails () {
      await this.admin.getAllUsers().subscribe(data =>  {
        this.user = data ;
      });
      await this.admin.getAllbooks().subscribe(data => {
          this.books = data;
       this.books.map(out => {
                this.user.map(dat => {
                 dat.bookid.map(dataout => {
                   // tslint:disable-next-line: triple-equals
                   if (dataout.bid == out.id) {
                    this.newuser = {id: 1, name: '', author: '', title: '', issuedDate: '', imageLink: ''} ;
                    this.newuser.id = out.id;
                    this.newuser.name = dat.name;
                    this.newuser.author = out.author;
                    this.newuser.issuedDate = dataout.startdate.slice(0, 10);
                    this.newuser.imageLink = out.imageLink;
                    this.newuser.title = out.title;
                    this.commonarray.push(this.newuser);
                    this.testarray.push(this.newuser);
                    this.testarray2.push(this.newuser);
                   }
                  });
              });
            });
        });
      }
    sortByUserName() {
     this.commonarray = this.testarray.sort(function(a, b) {
        const x  = a.name.toLowerCase();
        const y  = b.name.toLowerCase();
        if (x < y) {return -1; }
        if (x > y) {return 1; }
        return 0;
    });
    }
    sortByTitle() {
      this.commonarray = this.testarray.sort(function(a, b) {
        const x  = a.title.toLowerCase();
        const y  = b.title.toLowerCase();
        if (x < y) {return -1; }
        if (x > y) {return 1; }
        return 0;
    });
    }
    sortByAuthor() {
      this.commonarray = this.testarray.sort(function(a, b) {
        const x  = a.author.toLowerCase();
        const y  = b.author.toLowerCase();
        if (x < y) {return -1; }
        if (x > y) {return 1; }
        return 0;
    });
    }
    sortByIssuedDate = () => {
      this.commonarray =  this.testarray.sort(function(a, b) {
            const p = a.issuedDate.slice(5, 7);
            const q = b.issuedDate.slice(5, 7);
            const x  = a.issuedDate.slice(8, 10);
            const y  = b.issuedDate.slice(8, 10);
            if ( p === q ) {
            if (x < y) {return -1; }
            if (x > y) {return 1; }
            return 0;
            } else if (p > q) {
                return 1;
            } else  { return  -1; }
        });
    }
    filterarray() {
      return this.testarray2.filter(data => {
        return data.author.toLowerCase().indexOf(this.inputdata.toLowerCase()) !== -1 ||
        data.title.toLowerCase().indexOf(this.inputdata.toLowerCase()) !== -1  ||
        data.name.toLowerCase().indexOf(this.inputdata.toLowerCase()) !== -1 ||
        data.issuedDate.toLowerCase().indexOf(this.inputdata.toLowerCase()) !== -1 ;
      });
    }
    search() {
      this.commonarray = this.filterarray();
    }
}
