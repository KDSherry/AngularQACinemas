import { Component, Input } from '@angular/core';

@Component({

	selector : 'classification-thumbnail',
	templateUrl : 'classification-thumbnail.component.html'

})

export class ClassificationThumbnailComponent{
	@Input() classification: any;
}