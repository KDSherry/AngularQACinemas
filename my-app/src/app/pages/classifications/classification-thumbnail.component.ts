import { Component, Input } from '@angular/core';

@Component({

	selector : 'classification-thumbnail',
	template : `<div>
					<img [src] = "['assets/images/classifications/'+classification.image]" 
					[alt]="classification.class"
					class = "classImg"/>
					<div>{{classification.name}}</div>
					<div>{{classification.description}}</div>
				</div>`,
	styles : [`
	.classImg{height : 100px}`]

})

export class ClassificationThumbnailComponent{
	@Input() classification: any;
}