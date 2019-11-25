import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/shared/service/userservice.service';
import BookserviceService from 'src/app/shared/service/bookservice.service';
import { Users } from '../../Users';
import { Books } from '../../Books';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {
  user: Users;
  review: {bookid: number , comments: string , rating: number };
  returnId: number;
  comment = '';
  rating = 1;
  books: Books[] = [];
  bookDetails: Books;
    constructor(private userService: UserserviceService , private book: BookserviceService) { }
    ngOnInit() {
      const userid = localStorage.getItem('userid');
      this.userService.getUserById(+userid).subscribe(data => {
          this.user = data ;
        });
        this.book.getAllbooks().subscribe(data => {
            this.books = data;
          });
    }
    onRate(event: any) {
        this.rating = event.starRating._value;
    }
  async return(id: number) {
      this.returnId = id;
      await this.book.getBookByID(id).subscribe(data => {
        console.log(data);
        this.bookDetails = data;
      });
    }
   async returnbook() {
     console.log('s');
      this.review = {bookid : 0 , comments : '' , rating : 0 };
      this.review.bookid = this.returnId;
      this.review.comments = this.comment;
      this.review.rating = this.rating;
      this.user.comments.push(this.review);
      for (let i = 0 ; i < this.user.bookid.length; i++) {
         if (this.user.bookid[i].bid === this.returnId) {
          this.user.bookid.splice(i, 1);
          this.user.allBooks.splice(i, 1);
        }
      }
      this.user.noofbooks -= 1;
      this.bookDetails.noofcopies += 1;
      if (this.bookDetails.isAvailable === 'No') {
        this.bookDetails.isAvailable = 'Yes';
      }
      await this.book.updateBookById(this.bookDetails.id, this.bookDetails).subscribe();
      await this.userService.renewUserBookById(this.user.id , this.user).subscribe(data => {
         Swal.fire('Book Returned Successfully', '', 'success' ); } );
    }
   async renew(id: number) {
      this.user.bookid.map(data => {
        // tslint:disable-next-line: triple-equals
        if (data.bid == id) {
          const sdate = new Date();
          const edate = new Date();
          edate.setDate(edate.getDate() + 7);
          data.startdate = sdate.toISOString();
          data.enddate = edate.toISOString();
        }
      });
      await this.userService.renewUserBookById(this.user.id , this.user).subscribe(data => {
        });
    }
}
