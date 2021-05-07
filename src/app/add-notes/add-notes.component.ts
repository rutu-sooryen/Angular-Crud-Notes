import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControlDirective, NgForm } from '@angular/forms';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: 'add-notes.component.html',
  styleUrls: ['add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {

  @Input() title: string = '';
  @Input() body: string = '';
  @Input() notesButtonName: string = '';
  @Input() selectedId: any;

  constructor(private notesService: NotesService) { }

  ngOnInit() { }

  @ViewChild('notesForm') notesForm: NgForm;

  saveProductDetails(notesForm: NgForm) {
    if (this.notesButtonName === 'Update') {
      this.notesService.notesList.findIndex((selectedNote: any) => {
        if (selectedNote.id === this.selectedId) {
          selectedNote.title = this.title;
          selectedNote.body = this.body;
        }
      });
    } else {
      var addNote = {
        id: this.notesService.notesList.length + 1,
        title: notesForm.controls.title.value,
        body: notesForm.controls.body.value
      }
      this.notesService.notesList.push(addNote);
    }
    this.notesForm.reset();
  }

  addNewNotes() {
    this.notesForm.reset();
    this.notesButtonName = 'Save';
  }
}
