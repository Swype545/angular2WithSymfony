import { Component, Input } from '@angular/core';
import { Note } from './classes';
import { Category } from './classes';

const CATEGORIES:Category[] = [
	{label: "theBestCategory"},
	{label: "theWorstOne"},
];

const NOTES:Note[] = [
	{id: 1,title: "my first note",content: "my first content", date: new Date(), category:CATEGORIES[1]},
	{id: 2,title: "my second note",content: "my second content", date: new Date(), category:CATEGORIES[1]},
	{id: 3,title: "my third note",content: "my third content", date: new Date(), category:CATEGORIES[0]}
];



@Component({
  selector: 'notelist',
  templateUrl: 'app/templates/notelist.html',
})
export class NoteListComponent  { 
	notes = NOTES;
	categories = CATEGORIES;
	//isModifyVisible = false;
	/*note = new Note(0,"New Note","New Content");
	
	createNote(){
		this.notes.push(this.note);
	}*/
}