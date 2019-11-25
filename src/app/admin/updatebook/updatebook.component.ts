import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import BookserviceService from '../../shared/service/bookservice.service';
import { Books } from '../../Books';
import {  FormGroup , FormBuilder , FormControl , Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.scss']
})
export class UpdatebookComponent implements OnInit {
id: string;
book: Books;
updateBookForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router ,
    private fb: FormBuilder,
    private service: BookserviceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('bookid');
   this.service.getBookByID(+this.id).subscribe(data => {
    this.book = data;
   });
   this.updateBookForm = this.fb.group({
    isbn: ['', [Validators.required ]],
    author: ['' , [Validators.required ]],
    title: ['' , [Validators.required ]],
    imageLink: ['' , [Validators.required ]],
    noofcopies: ['' , [Validators.required ]],
    category : [ '', [Validators.required ] ],
    });
  }
  get isbn() { return this.updateBookForm.get('isbn'); }
  get author() { return this.updateBookForm.get('author'); }
  get title() { return this.updateBookForm.get('title'); }
  get imageLink() { return this.updateBookForm.get('imageLink'); }
  get noofcopies() { return this.updateBookForm.get('noofcopies'); }
  get categor() { return this.updateBookForm.get('category'); }
onSubmit() {
  this.book.ISBN = this.updateBookForm.value.isbn;
  this.book.author = this.updateBookForm.value.author;
  this.book.title = this.updateBookForm.value.title;
  this.book.imageLink = this.updateBookForm.value.imageLink;
  this.book.noofcopies = this.updateBookForm.value.noofcopies;
  this.book.category = this.updateBookForm.value.category;
 this.service.updateBookById(this.book.id , this.book).subscribe();
 Swal.fire('Book Added Successfully', '' , 'success');
}
}
