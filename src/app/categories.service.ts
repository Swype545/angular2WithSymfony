import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Category } from './classes';
import { Observable } from 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService{
	//categories: Category[] = [];
	private apiURL = 'http://localhost/AppWeb/Notepad/web/app_dev.php/note/API/';
	private apiURLAllCategories = this.apiURL+"categories/showAll";
	private apiURLAddCategory = this.apiURL+"categories/create";
	
	constructor(private http: Http){};
	
	//We load every categories from the database
	getCategories(){
		
		return this.http.get(this.apiURLAllCategories)
			.map((res:Response) => res.json());
		
		//this.categories = [new Category("theBestOne", 1), new Category("theWorstOne", 2)];


		//return this.categories;
	}

	deleteCategory(category: Category){
		//We delete the category from the database
	}

	addCategory(category: Category){
		//We add a category in the database
		//alert(this.categories[0].label);
		//We add a note in the database		
		let jsCategory = {
			"label": category.label
		}
		return this.http.post(this.apiURLAddCategory,JSON.stringify(jsCategory),{})
			.map((res:Response) => res.json());
	}

	modifyCategories(categories: Category[]){
		//We modify every categories in the database (PUT for every elements)
	}


}