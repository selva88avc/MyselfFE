import { Injectable } from '@angular/core';
 
import { Note } from './note';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
})

export class NotesService
 {
 
  constructor(private httpClient: HttpClient)
   {
 
   }
   // Method to retrive Note object from db.json using json-server

  getNotes(): Observable<Array<Note>>
   {
    return this.httpClient.get<Array<Note>>("http://localhost:3000/notes");
   }
   // To add , note object in db.json

  addNote(note: Note): Observable<Note>{ 
    return this.httpClient.post<Note>("http://localhost:3000/notes",note)
  }

}
