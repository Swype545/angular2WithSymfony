export class Note{
	public id: number;
	public title: string;
	public content:string;
	public category: Category;
	public date: Date;
	
	constructor(id:number,title:string,content:string, date: Date){
		this.id = id;
		this.title = title;
		this.content = content;
		this.date = new Date();
		
	}
}

export class Category{
	public label: string;
	
	constructor(label:string){
		this.label = label;
	}
	
}