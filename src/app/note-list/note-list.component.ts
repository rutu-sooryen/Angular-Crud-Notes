import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/notes.service';
import { notesList } from '../models/note-model';

@Component({
  selector: 'app-note-list',
  templateUrl: 'note-list.component.html',
  styleUrls: ['note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  notesList: Array<object>;
  displayMessage: boolean = false;
  @Output() selectedNote = new EventEmitter<object>();

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getAllNotes().subscribe((notesList: Array<object>) => {
      this.notesList = notesList;
    });
  }

  selectNote(note) {
    this.selectedNote.emit(note);
  }

  deleteNote(removedNote) {
    this.notesList.splice(this.notesList.findIndex((note: any) => note.id === removedNote.id), 1);
    if (this.notesList.length === 0) {
      this.displayMessage = true;
    }
  }
}
