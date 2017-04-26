import { Injectable } from "@angular/core";
import { Note } from './classes';
import { Category } from './classes';
import { Observable } from 'rxjs/Rx';

import { CategoriesService } from './categories.service'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NotesService{
	constructor(private categoriesService: CategoriesService){};
	private NOTES: Note[];
	private CATEGORIES: Category[];
	
	
	loadNotes(){
		this.categoriesService.loadCategories();
		this.CATEGORIES = this.categoriesService.getCategories();	
		this.NOTES = [new Note(1, "my first note", "my first content", new Date(), this.CATEGORIES[0]), new Note(2, "my second note", "my second content", new Date(), this.CATEGORIES[1])];
	}
	
	getNotes(): Note[]{
		return this.NOTES;
	}
	
}