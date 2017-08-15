import { Component, OnInit } from '@angular/core';

@Component({
	
	template : `
	<div class = 'mdl-card__supporting-text'>
		<strong>
			Below is a brief guide to film classifications used at our cinemas. 
			For further information, please visit the 
			<a href = "http://www.bbfc.co.uk/what-classification" target = "_blank">BBFC website</a>.
		</strong>
		<br/>
		<br/>
		<div *ngFor = "let classification of classifications">
			<classification-thumbnail 
			[classification] = "classification">
			</classification-thumbnail>
		</div>
	</div>`
	
})

export class ClassificationsPageComponent{

	classifications: any;

	ngOnInit(){
		this.classifications = allClassifications;
	}
}
const allClassifications = [
	{
		"id" : "0",
		"class" : "U",
		"name" : "Universal",
		"image" : "u.png",
		"description" : "Suitable for persons of all ages."
	},
	
	{
		"id" : "1",
		"class" : "PG",
		"name" : "Parental Guidance",
		"image" : "pg.png",
		"description" : "Generally suitable for all ages, though may contain scenes that are unsuitable for young children. Therefor, parental discression is advised."
	},
	
	{
		"id" : "2",
		"class" : "12A",
		"name" : "12A",
		"image" : "12A.png",
		"description" : "Generally unsuitable for viewers under the age of 12 years. However, children under the age of 12 may view only if accompanied by a responsible adult."
	},
	
	{
		"id" : "3",
		"class" : "15",
		"name" : "15",
		"image" : "15.png",
		"description" : "Not suitable for viewers under the age of 15 years. People under the age of 15 years will not be allowed to view films with this classification under any circumstances."
	},
	
	{
		"id" : "4",
		"class" : "18",
		"name" : "18",
		"image" : "18.png",
		"description" : "Not suitable for viewers under the age of 18 years. People under the age of 18 years will not be allowed to view films with this classification under any circumstances."
	},
	]