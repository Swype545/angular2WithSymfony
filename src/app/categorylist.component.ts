import { Component,  OnInit } from '@angular/core';
import { Category } from './classes';

import { CategoriesService } from './categories.service'

@Component({
  selector: 'categorylist',
  templateUrl: 'app/templates/categorylist.html',
  providers:[CategoriesService]
})
export class CategoryListComponent{ 
	private categories:Category[];	
	public oldCategories: Category[];
	public modify = false;
	constructor(private categoriesService: CategoriesService){}
	
	//Loading categories from the DB + creating a copy
	ngOnInit(): void{
		this.categories = this.categoriesService.getCategories();
		this.oldCategories = this.deepClone(this.categories);
	};

	//Enable editing for categories
	editCategories(){
		this.modify = true;
	}

	//Cancel editing: we reverse all the changes. We put the copy element in the real element
	cancelEdit(){
		for(let i in this.categories){
			console.log(this.categories[i].label);
			console.log("old: " + this.oldCategories[i].label);
			this.categories[i].label = this.oldCategories[i].label;
		}
		this.modify = false;
	}

	//We delete a category: we sent it to the db and we reload the elements
	deleteCategory(category:Category){
		this.categoriesService.deleteCategory(category);
		this.categories = this.categoriesService.getCategories();
	}
	
	//We save the element in the database
	saveEdit(){
		this.categoriesService.modifyCategories(this.categories);
	}

	//Method to copy
	deepClone(oldArray: Object[]) {
    	let newArray: any = [];
    	oldArray.forEach((item) => {
      		newArray.push(Object.assign({}, item));
    	});
    	return newArray;
  	}

}