import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);
  constructor() { }

  getUserById(id: number): Observable<any> {
    return this.httpClient.get("http://localhost:3000/users/" + id);
  }

  getUsers(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/users");
  }
}
