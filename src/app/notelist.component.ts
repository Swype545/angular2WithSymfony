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

		this.loadNotes();
		this.loadCategories();
		//this.categories = this.categoriesService.getCategories();

	};

	loadNotes(){
		this.notesService.getNotes().subscribe(
			data => { this.notes = data },
			err => console.error(err),
			() => console.log(this.notes));

	}
	
	loadCategories(){
		this.categoriesService.getCategories().subscribe(
			data => { this.categories = data },
			err => console.error(err),
			() => console.log('done'));
	}
	
	//We delete the note the children sent
	deleteNote(note: Note){
		this.notesService.deleteNote(note).subscribe(
			data => { 
						console.log(data);
						this.loadNotes();
					},
			err => console.error(err),
			() => console.log('done'));
	}

	saveNote(note:Note){
		this.notesService.editNote(note).subscribe(
			data => { 
						console.log(data); 
						this.loadNotes();
					},
			err => console.error(err),
			() => console.log('done'));
	}
}