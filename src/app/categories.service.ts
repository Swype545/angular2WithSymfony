import { Injectable } from "@angular/core";
import { Category } from './classes';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriesService{
	private CATEGORIES: Category[];
	
	loadCategories(){
		this.CATEGORIES = [new Category("theBestOne"), new Category("theWorstOne")];
	}
	
	getCategories(): Category[]{
		return this.CATEGORIES;
	}
}