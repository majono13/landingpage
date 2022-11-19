import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly url: string = environment.url;

  constructor(private http: HttpClient) {}

  newUser(user: User): Observable<any> {
    return this.http.post(`${this.url}/user`, user);
  }
}
