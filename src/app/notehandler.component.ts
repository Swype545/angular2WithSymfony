import { Component, Input, EventEmitter } from '@angular/core';
import { Note } from './classes';
import { Category } from './classes';

@Component({
  selector: 'notehandler',
  templateUrl: 'app/templates/notehandler.html',
})

export class NoteHandlerComponent{ 
	@Input() note: Note;
	@Input() categories: Category[];

	modifying = false;

	
	closeModify(){
		this.modifying = false;
	}
	
	/*createNote(){
		if(this.modifying == false){
			this.notes.push(this.actualNote);
		}
		this.modifyNote(this.actualNote, "edit");
	}*/
	
	deleteNote(note: Note){
		/*
		//ENVOYER UN MESSAGE AU PARENT POUR ENLEVER L'ELEMENT DE LA LISTE
		var index=-1;
		for(let i in this.notes){
			if(note == this.notes[i]){
				index = i;
				break;
			}
		}
		this.notes.splice(index,1);*/
		
	}
	
}