import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }


  // Implement addContacts method using HttpClient for saving a Contacts details
  addContact(contact: any): Observable<any> {
    return this.httpclient.post("http://localhost:3000/contacts", contact);
  }

  // Implement getAllContactss method using HttpClient for getting all Contacts details
  getAllContacts(): Observable<any> {
    return this.httpclient.get("http://localhost:3000/contacts");
  }

}
