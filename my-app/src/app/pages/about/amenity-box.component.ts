import { Component, Input } from '@angular/core';

@Component({

	selector : 'amenity-box',
	templateUrl :'amenity-box.component.html'
})

export class AmenityBoxComponent{
	@Input() amenity: any;
}