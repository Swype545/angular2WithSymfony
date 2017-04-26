export class Category{
	public label: string;
	
	constructor(label:string){
		this.label = label;
	}
}

export class Note{
	public id: number;
	public title: string;
	public content:string;
	public category: Category;
	public date: Date;
	
	constructor(id:number,title:string,content:string, date: Date, category: Category){
		this.id = id;
		this.title = title;
		this.content = content;
		this.date = new Date();	
		this.category = category;
	}
	
	/*addCategory(Category: category){
		this.category = category;
	}*/
}

