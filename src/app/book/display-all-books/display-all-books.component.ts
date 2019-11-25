import { Component, OnInit } from '@angular/core';
import BookserviceService from '../../shared/service/bookservice.service';
import { Books } from '../../Books';

@Component({
  selector: 'app-display-all-books',
  templateUrl: './display-all-books.component.html',
  styleUrls: ['./display-all-books.component.css']
})
export class DisplayAllBooksComponent implements OnInit {
bookarray: Books[] = [];
testarray:  Books[] = [];
checkarray: Books[] = [];
inputdata: string;
category: any[] = [];
  constructor(private book: BookserviceService) { }
  ngOnInit() {
    this.book.getAllbooks().subscribe(data => {
      this.bookarray = data;
      this.testarray = data;
      this.checkarray = data;
    });
  }
filterarray() {
  if (this.category.length > 0) {
  this.checkarray = this.check();
  return this.checkarray.filter(data => {
    return data.author.toLowerCase().indexOf(this.inputdata.toLowerCase()) !== -1 ||
    data.title.toLowerCase().indexOf(this.inputdata.toLowerCase()) !== -1 ;
  });
  } else {
  return this.bookarray.filter(data => {
    return data.author.toLowerCase().indexOf(this.inputdata.toLowerCase()) !== -1 ||
    data.title.toLowerCase().indexOf(this.inputdata.toLowerCase()) !== -1 ;
  });
}
}
search() {
  this.testarray = this.filterarray();
}
filterdata(e: any) {
const selected = [...this.category];
if (e.checked) {
  const value = e.element.value;
  selected.push(value);
} else {
  for (let i = 0 ; i < selected.length; i++) {
    if ( selected[i] === e.element.value) {
        selected.splice(i, 1);
    }
  }
 }
this.category = selected;
if (this.category.length > 0) {
this.testarray = this.check();
} else {
  this.testarray = this.bookarray;
}
}
check() {
  const newarray = [];
  this.bookarray.map(data => {
    this.category.map(out =>  {
         if (data.category === out)   {
           newarray.push(data);
         }
      });
    });
    return newarray;
}
}
