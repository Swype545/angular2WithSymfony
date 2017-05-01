import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './classes';
import { Category } from './classes';

@Component({
  selector: 'notehandler',
  templateUrl: 'app/templates/notehandler.html',
})

export class NoteHandlerComponent{ 
	@Input() note: Note;
	@Input() categories: Category[];
	@Output() deleteNote:EventEmitter<any> = new EventEmitter();
	@Output() SaveNote:EventEmitter<any> = new EventEmitter();

	modifying = false;

	//We close the window and we send a message to the parent to save the note
	closeModify(note:Note){
		this.modifying = false;
		this.SaveNote.emit(note);
	}
	
	//we send a message to the parent to delete the note
	delNote(note: Note){
		this.deleteNote.emit(note);
	}
	
}