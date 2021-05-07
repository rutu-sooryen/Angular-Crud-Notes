import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoteListComponent } from 'src/app/note-list/note-list.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoteListComponent,
    DashboardComponent,
    AddNotesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports:[FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
