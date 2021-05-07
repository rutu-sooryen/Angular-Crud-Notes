import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedNoteTitle: string;
  selectedNoteBody: string;
  notesButtonName: string;
  selectedId: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  logout() {
    this.router.navigate(['/login']);
  }

  sendSelectedNote(event) {
    this.notesButtonName = 'Update';
    this.selectedNoteTitle = event.title;
    this.selectedNoteBody = event.body;
    this.selectedId = event.id;
  }
}
