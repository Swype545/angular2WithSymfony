import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Note } from './classes';
import { Category } from './classes';

import { NotesService } from './notes.service'
import { CategoriesService } from './categories.service'

@Component({
  selector: 'notelist',
  templateUrl: 'app/templates/notelist.html',
  providers:[NotesService, CategoriesService]
})
export class NoteListComponent implements OnInit { 
	
	public notes:Note[];
	public categories:Category[];
	constructor(private notesService: NotesService, private categoriesService: CategoriesService){}
	
	//We load the categories and the notes from the DB at the initialisation
	ngOnInit(): void{

		this.notes = this.notesService.getNotes();
		this.categories = this.categoriesService.getCategories();

	};

	//We delete the note the children sent
	deleteNote(note: Note){
		this.notesService.deleteNote(note);
		//We Reload notes
		this.notesService.getNotes();
	}

	saveNote(note:Note){
		this.notesService.addNote(note);
	}
}