import { Component, OnInit } from '@angular/core';
import {  FormGroup , FormBuilder , Validators } from '@angular/forms';
import BookserviceService from '../../shared/service/bookservice.service';
import { BookDetails } from 'src/app/BookDetails';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  category: string;
  book: BookDetails = {  ISBN: 0, category: '', noofcopies: 0 , isAvailable: '' , author: '' , title: '' , imageLink: ''};
  constructor(private fb: FormBuilder, private bookService: BookserviceService ) { }
  addBook: FormGroup;
  ngOnInit() {
    this.addBook = this.fb.group({
      isbn: ['', [Validators.required ]],
      author: ['' , [Validators.required ]],
      title: ['' , [Validators.required ]],
      imageLink: ['' , [Validators.required ]],
      noofcopies: ['' , [Validators.required ]],
      category : ['' , [Validators.required]],
      });
  }
  get isbn() { return this.addBook.get('isbn'); }
  get author() { return this.addBook.get('author'); }
  get title() { return this.addBook.get('title'); }
  get imageLink() { return this.addBook.get('imageLink'); }
  get noofcopies() { return this.addBook.get('noofcopies'); }
  get categor() { return this.addBook.get('category'); }
async onSubmit() {
this.book.ISBN = this.addBook.value.isbn;
this.book.author = this.addBook.value.author;
this.book.category = this.addBook.value.category;
this.book.imageLink = this.addBook.value.imageLink;
this.book.noofcopies = this.addBook.value.noofcopies;
this.book.title = this.addBook.value.title;
this.book.isAvailable = 'Yes';
await this.bookService.addBook(this.book).subscribe(data => {
  Swal.fire('Book Added Successfully' , '' , 'success');
});
 }
}

