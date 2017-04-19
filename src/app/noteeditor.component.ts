import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './classes';
import { Category } from './classes';

@Component({
  selector: 'noteeditor',
  templateUrl: 'app/templates/noteeditor.html',
})
export class NoteEditorComponent{ 
	@Input() noteEdit: Note;
	@Input() categories: Category[];
	@Output() closeModify:EventEmitter<any> = new EventEmitter();
	
	
	oldNote: Note;
	
	ngOnInit(){
		console.log("yo");
		this.oldNote = Object.assign({},this.noteEdit);
	}
	
	isFormValid(){
		
		console.log(this.noteEdit.title);
		console.log(this.oldNote.title);
		if(this.noteEdit.title.length >= 4 && this.noteEdit.content.length > 0){
			return true;
		}else{return false;}
	}
	
	SaveNote(noteEdit: Note){
		//TODO: Interaction avec DB
		alert("in1");
		this.closeModify.emit(null);
	}
	
	CancelEdit(){
		this.noteEdit.title = this.oldNote.title;
		this.noteEdit.content = this.oldNote.content;
		this.noteEdit.date = this.oldNote.date;
		this.noteEdit.category = this.oldNote.category;
		//this.closeModify.emit(null);
	}
}