import { Component, Input, OnInit } from '@angular/core';

@Component({

	selector : 'book-seats',
	templateUrl : './book-seats.component.html'

})

export class BookSeatsComponent{
@Input() availableSeats;
@Input() showTimeId;
@Input() numberofSeats;
iconColor : string;

	
	ngOnInit(){
		
		
	}
	
	selectSeat(seat: string){
		console.log(seat + ' has been selected');
		this.availableSeats.splice(this.availableSeats.indexOf(seat),1);
		
			this.iconColor = 'red';
		
		console.log(this.availableSeats);
	}


}