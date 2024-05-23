import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NotesService]
})
export class AppComponent implements OnInit{
  note: Note = new Note();
  notes: Array<Note> = [];
  errMessage: string="";
  constructor(private notesService:NotesService){

  }
  saveNote(){
    this.notes.push(this.note);
    this.notesService.addNote(this.note).subscribe( data=>{
      
    }, error =>  this.errMessage=error
    )
  }
  ngOnInit(): void {
   this.notesService.getNotes().subscribe( data => this.notes = data,
    error => this.errMessage=error);
  }


  
}
