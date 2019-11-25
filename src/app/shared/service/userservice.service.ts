import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Users } from '../../Users';
import { UserDetails} from '../../UserDetails';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:3000/user');
   }
  getUserById(id: number): Observable<Users> {
  return this.http.get<Users>('http://localhost:3000/user/' + id);
  }
  renewUserBookById(id: number , user: Users): Observable<Users> {
    return this.http.put<Users>('http://localhost:3000/user/' + id , user);
  }
  addUser(user: UserDetails): Observable<UserDetails> {
    return this.http.post<UserDetails>('http://localhost:3000/user' , user);
  }
}
