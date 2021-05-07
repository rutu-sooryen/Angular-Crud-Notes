import { TestBed } from '@angular/core/testing';
import { NotesService } from 'src/app/notes.service';

describe('ProductsService', () => {
  let service: NotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
