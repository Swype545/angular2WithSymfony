import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Note } from './classes';
import { Category } from './classes';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { CategoriesService } from './categories.service'



@Injectable()
export class NotesService{
	//Resolve HTTP using the constructor
	constructor(private categoriesService: CategoriesService){}; //private http: Http,private categoriesService: CategoriesService

	//variable initialisation
	private NOTES: Note[];
	private CATEGORIES: Category[];
	private apiURL = 'http://localhost/AppWeb/Notepad/web/app_dev.php/note/API/';
	private apiURLAllNotes = this.apiURL+"notes/showAll";
	

	/*getNotes(): Observable<Note[]>{
		return this.http.get(this.apiURLAllNotes)
			.map((res:Response) => res.json());
	}*/

	//Method to load notes from API
	getNotes(){
		this.CATEGORIES = this.categoriesService.getCategories();	
		this.NOTES = [new Note(1, "my first note", "my first content", new Date(), this.CATEGORIES[0]), new Note(2, "my second note", "my second content", new Date(), this.CATEGORIES[1])];

		//We use get request to load elements
		/*return this.http.get(this.apiURLAllNotes)
			.map((res:Response) => res.json());*/

		//alert(response);
		return this.NOTES;
	}

	deleteNote(note: Note){
		//We delete the note in the database
	}

	addNote(note: Note){
		//We add a note in the database
	}

	modifyNote(note: Note){
		//We modify a note in the database
	}
}