import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private router: Router,
    private notesService: NotesService
  ) { }

  ngOnInit(): void { }

  checkCredentials(loginForm) {
    var response = this.notesService.checkAuthentication()
    if (response.username == this.username && response.password == this.password) {
      this.router.navigate(['/dashboard']);
    }
    else {
      alert("Please Enter valid username and password");
    }
  }
}
