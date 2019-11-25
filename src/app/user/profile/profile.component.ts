import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../../shared/service/userservice.service';
import BookserviceService from '../../shared/service/bookservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
user: any;
books: any;
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

}
