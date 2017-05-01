import { Injectable } from "@angular/core";
import { Category } from './classes';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriesService{
	categories: Category[] = [];
	
	//We load every categories from the database
	getCategories(){
		if(this.categories.length == 0){
			this.categories = [new Category("theBestOne", 1), new Category("theWorstOne", 2)];
		}

		return this.categories;
	}

	deleteCategory(category: Category){
		//We delete the category from the database
	}

	addCategory(category: Category){
		//We add a category in the database
		//alert(this.categories[0].label);
		this.categories.push(category);
	}

	modifyCategories(categories: Category[]){
		//We modify every categories in the database (PUT for every elements)
	}


}