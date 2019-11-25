import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userbooks } from 'src/app/userbooks';
import { Books } from 'src/app/Books';
import { Users } from 'src/app/Users';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<Users[]> {
   return this.http.get<Users[]>('http://localhost:3000/user');
  }
  getAllbooks(): Observable<Books[]> {
    return this.http.get<Books[]>('http://localhost:3000/data');
  }
}
