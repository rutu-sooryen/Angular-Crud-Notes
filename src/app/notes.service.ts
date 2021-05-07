import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  notesList: Array<object>;

  checkAuthentication() {
    var userInfo = {
      username: "rutu.dave",
      password: "rutu@123"
    }
    return userInfo;
  }

  getAllNotes() {
    return new Observable((observe) => {
      return this.http.get('assets/notes-list.json').subscribe((list: Array<object>) => {
        this.notesList = list;
        observe.next(list);
      });
    });
  }
}
