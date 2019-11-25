import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from 'src/app/Books';
import { Observable } from 'rxjs';
import { BookDetails } from '../../BookDetails';
@Injectable({
  providedIn: 'root'
})
export default class BookserviceService {

  constructor(private http: HttpClient) { }
  getAllbooks(): Observable<Books[]> {
    return this.http.get<Books[]>('http://localhost:3000/data');
  }
  getBookByID(id: number): Observable<Books> {
    return this.http.get<Books>('http://localhost:3000/data/' + id);
  }
  deleteBookByID(id: number): Observable<Books> {
    return this.http.delete<Books>('http://localhost:3000/data/' + id);
  }
  updateBookById(id: number , book: Books): Observable<Books> {
    return this.http.put<Books>('http://localhost:3000/data/' + id , book);
  }
  addBook(book: BookDetails): Observable<BookDetails> {
    return this.http.post<BookDetails>('http://localhost:3000/data' , book);
  }
}
