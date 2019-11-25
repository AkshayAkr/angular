import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import bookservice from '../../shared/service/bookservice.service';
import { UserserviceService } from '../../shared/service/userservice.service';
import { Books } from '../../Books';
import { Users } from '../../Users';
import Swal from 'sweetalert2';
import { async } from 'q';

@Component({
  selector: 'app-display-individual-book',
  templateUrl: './display-individual-book.component.html',
  styleUrls: ['./display-individual-book.component.scss']
})
export class DisplayIndividualBookComponent implements OnInit {
  id: string;
  book: Books;
  user: Users;
  userid: string;
  addBook: {bid: number , startdate: string, enddate: string};
  userComments: Users[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router ,
    private service: bookservice,
    private userService: UserserviceService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('bookid');
    this.service.getBookByID(+this.id).subscribe(data => {
      this.book = data;
      });
      this.userService.getAllUsers().subscribe(data => {
        this.userComments = data;
      });
  }
      addtoCart() {
        let flag = 0;
    this.userComments.map(data => {
      if (data.id === +this.userid) {
        this.user = data;
        flag = 1;
      }
    });
    if (flag === 1) {
   this.check(); }
  }
  async check() {
  if (this.user.noofbooks === 2) {
    Swal.fire('Cart Full' , 'You can only take two books at a time' , 'error');
    } else if (this.user.noofbooks === 1) {
      this.user.bookid.map(async data => {
        if (data.bid === this.book.id) {
          Swal.fire('Book Already Present in Cart' , '' , 'warning');
        } else {
          this.user.noofbooks += 1;
          this.addBook = {bid: 0 , startdate: '' , enddate: ''};
          const sdate = new Date();
          const edate = new Date();
          edate.setDate(edate.getDate() + 7);
          this.addBook.bid = this.book.id;
          this.addBook.startdate = sdate.toISOString();
          this.addBook.enddate = edate.toISOString();
          this.user.bookid.push(this.addBook);
          this.user.allBooks.push(this.book.id);
          this.user.oldBookDetails.push(this.book.id);
          this.book.noofcopies -= 1;
          if (this.book.noofcopies === 0 ) {
            this.book.isAvailable = 'No';
          }
          await this.userService.renewUserBookById(this.user.id , this.user).subscribe(dat => {
          });
          await this.service.updateBookById(this.book.id , this.book).subscribe(dataa => {
          });
          Swal.fire('Book Added Successfully Into The Cart' , '' , 'success');
        }
      });
} else {
          this.user.noofbooks += 1;
          this.addBook = {bid: 0 , startdate: '' , enddate: ''};
          const sdate = new Date();
          const edate = new Date();
          edate.setDate(edate.getDate() + 7);
          this.addBook.bid = this.book.id;
          this.addBook.startdate = sdate.toISOString();
          this.addBook.enddate = edate.toISOString();
          this.user.bookid.push(this.addBook);
          this.user.allBooks.push(this.book.id);
          this.user.oldBookDetails.push(this.book.id);
          this.book.noofcopies -= 1;
          if (this.book.noofcopies === 0 ) {
            this.book.isAvailable = 'No';
          }
          await this.userService.renewUserBookById(this.user.id , this.user).subscribe(dat => {
          });
          await this.service.updateBookById(this.book.id , this.book).subscribe(dataa => {
          });
          Swal.fire('Book Added Successfully Into The Cart' , '' , 'success');
}
  }
 submit() {
   const loggedinStatus = localStorage.getItem('logins');
   this.userid = localStorage.getItem('userid');
   if (loggedinStatus === 'Yes') {
     if (this.userid  !== '1') {
   this.addtoCart();
     } else {
      Swal.fire('Admin cannot take books' , '' , 'warning');
     }
   } else {
    Swal.fire('Redirecting to login . Kindly Login To Continue' , '' , 'warning');
    this.router.navigate(['/login']);
   }
  }
}
