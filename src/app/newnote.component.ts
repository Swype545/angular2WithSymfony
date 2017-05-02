import { Component, OnInit } from '@angular/core';
import { Note } from './classes';
import { Category } from './classes';
import { CategoriesService } from './categories.service';
import { NotesService } from './notes.service';

@Component({
  selector: 'newnote',
  templateUrl: 'app/templates/newnote.html',
    providers:[CategoriesService, NotesService]
})
export class NewNoteComponent implements OnInit { 
	
	constructor(private categoriesService: CategoriesService, private notesService: NotesService){}
	public categories: Category[]= [];
	public newNote: Note;
	
	//Initialisation: loading categories + create the new object
	ngOnInit(){
		this.loadCategories();
		this.newNote = new Note(-1, "", "", new Date(), this.categories[0]);
	}

	loadCategories(){
		this.categoriesService.getCategories().subscribe(
			data => { this.categories = data
					  //We Create the newNote object when the categories are loaded
					  this.newNote.category = this.categories[0];
					},
			err => console.error(err),
			() => console.log('done'));
	}
	
	//Check if the form is valid
	isFormValid(){
		if(this.newNote.title.length >= 4 && this.newNote.content.length > 0){
			return true;
		}else{return false;}
	}

	//Add the note in the database
	createNote(){
		this.notesService.addNote(this.newNote).subscribe(
			data => { console.log(data); },
			err => console.error(err));
	}
}