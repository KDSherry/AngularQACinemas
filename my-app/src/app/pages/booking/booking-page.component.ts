import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaStore } from "../../flux/cinema-store.service";
import { IMovie } from "../../flux/movie";
import { CinemaActions } from "../../flux/cinema-actions.service";
import { Observable } from 'rxjs/Observable';

@Component({
	
	templateUrl : './booking-page.component.html',
	styles : [`
	.tablehead{color : blue;text-align : left;};
	.tablerow{border-bottom : 30px grey solid; }`]
	
})

export class BookingPageComponent{
	showtime : any;
	filminfo : any;
	adultTicket : number = 0;
	childTicket : number = 0;
	totalTicket : number = 0;
	seatsRemaining : number = 0;
	
	constructor(private route : ActivatedRoute, private cinemaStore : CinemaStore){
		
	}
	
	ngOnInit(){
		
		
		this.showtime = this.cinemaStore.getShowingById(this.route.snapshot.params['id']);
		
	
		
		this.filminfo = this.cinemaStore.getMovieById(this.showtime.movieID);
		this.seatsRemaining = this.showtime.seatsRemaining;
		
		
	}
	removeAdult(){
		if (this.adultTicket>0){
			this.adultTicket= this.adultTicket-1;
			this.totalTicket= this.totalTicket -1;
			this.seatsRemaining+=1;
			console.log(this.adultTicket,this.childTicket, this.totalTicket, this.seatsRemaining);
			
		}
	}
	addAdult(){
		if (this.seatsRemaining!==0){
			this.adultTicket+=1;
			this.totalTicket+=1;
			this.seatsRemaining-=1;
			console.log(this.adultTicket,this.childTicket, this.totalTicket, this.seatsRemaining);
		}
		
	}
	removeChild(){
		if (this.childTicket>0){
			this.childTicket= this.childTicket-1;
			this.totalTicket= this.totalTicket -1;
			this.seatsRemaining+=1;
						console.log(this.adultTicket,this.childTicket, this.totalTicket, this.seatsRemaining);
		}
		
	}
	addChild(){
		if (this.seatsRemaining!==0){
			this.childTicket+=1;
			this.totalTicket+=1;
			this.seatsRemaining-=1;
						console.log(this.adultTicket,this.childTicket, this.totalTicket, this.seatsRemaining);
		}
		
	}
}
