import { Component, OnInit } from '@angular/core';
import { Category } from './classes';
import { CategoriesService } from './categories.service'

@Component({
  selector: 'newcategory',
  templateUrl: 'app/templates/newCategory.html',
  providers:[CategoriesService]
})
export class NewCategoryComponent implements OnInit { 
	public newCategory:Category;

	constructor(private categoriesService: CategoriesService){}
	
	//Creating the new category
	ngOnInit(){
		this.newCategory = new Category("", -1);
	}

	//Check if the form is valid
	isFormValid(){
		if(this.newCategory.label.length >= 4){
			return true;	
		}else{return false;}
	}

	//We create a category in the database
	createCategory(){
		this.categoriesService.addCategory(this.newCategory).subscribe(
			data => { console.log(data) },
			err => console.error(err));
	}

}