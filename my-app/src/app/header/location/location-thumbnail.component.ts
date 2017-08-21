import { Component, Input } from '@angular/core';

@Component({

	selector : 'location-thumbnail',
	templateUrl : 'location-thumbnail.component.html'

})

export class LocationThumbnailComponent{
	@Input() location: any;
}