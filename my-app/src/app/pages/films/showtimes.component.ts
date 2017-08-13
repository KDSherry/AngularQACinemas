import { Component, Input } from '@angular/core';

@Component({
	
	selector: 'showtimes',
	template : `<div>
					<div class = "showtimeT">
						<h5 >Showtimes</h5>
					</div>
					<ol class = 'mdl-list mdl-grid'>
						<li class = 'mdl-list_item mdl-cell' *ngFor= "let filmtime of filmtimes">
							<div class = "">
								{{filmtime.showingTime}}
							</div>
						</li>
					</ol>
				</div>`,
	styles :[`
			ol {width : 30em},
			ol li {float: left; width: 10em},
			.showtimesT{float:right}
				`]
})

export class ShowtimesComponent{
	@Input() filmid : string;
	filmtimes = [];
	
	ngOnInit(){
		
			showingTimes.forEach(showtime => {
				if (showtime.movieID===this.filmid){
					this.filmtimes.push(showtime)
				}
				this.filmtimes = this.orderTimes(this.filmtimes)
			});
			

	}
	
	orderTimes(array){
		return array.sort((a,b)=>{
			if (a.showingTime>b.showingTime){
				return 1;
			}
			else if (a.showingTime===b.showingTime){
				return 0
			}
			else {
				return -1;
			}
		})
		
		
	}
	
	
}

const showingTimes = [
					 {
						"movieID" : "0",
						"cinemaID" : "0",
						"showingTime" : "13:00"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "0",
						"showingTime" : "15:00"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "0",
						"showingTime" : "17:00"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "0",
						"showingTime" : "19:00"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "0",
						"showingTime" : "13:30"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "0",
						"showingTime" : "17:30"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "0",
						"showingTime" : "21:30"
					 },
					{
						"movieID" : "2",
						"cinemaID" : "0",
						"showingTime" : "14:00"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "0",
						"showingTime" : "16:00"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "0",
						"showingTime" : "18:00"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "0",
						"showingTime" : "20:00"
					 },
					 {
					 	"movieID" : "3",
						"cinemaID" : "0",
						"showingTime" : "16:15"
					 },
					 {
					 	"movieID" : "3",
						"cinemaID" : "0",
						"showingTime" : "16:45"
					 },
					 {
					 	"movieID" : "3",
						"cinemaID" : "0",
						"showingTime" : "17:15"
					 },					 
					 {
						"movieID" : "3",
						"cinemaID" : "1",
						"showingTime" : "13:00"
					 },
					 {
						"movieID" : "3",
						"cinemaID" : "1",
						"showingTime" : "15:00"
					 },
					 {
						"movieID" : "3",
						"cinemaID" : "1",
						"showingTime" : "17:00"
					 },
					  {
						"movieID" : "3",
						"cinemaID" : "1",
						"showingTime" : "19:00"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "1",
						"showingTime" : "13:30"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "1",
						"showingTime" : "17:30"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "1",
						"showingTime" : "21:30"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "1",
						"showingTime" : "14:00"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "1",
						"showingTime" : "16:00"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "1",
						"showingTime" : "18:00"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "1",
						"showingTime" : "20:00"
					 },
					 {
					 	"movieID" : "0",
						"cinemaID" : "1",
						"showingTime" : "16:15"
					 },
					 {
					 	"movieID" : "0",
						"cinemaID" : "1",
						"showingTime" : "16:45"
					 },
					 {
					 	"movieID" : "0",
						"cinemaID" : "1",
						"showingTime" : "17:15"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "2",
						"showingTime" : "09:00"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "2",
						"showingTime" : "09:20"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "2",
						"showingTime" : "09:40"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "2",
						"showingTime" : "10:00"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "2",
						"showingTime" : "10:20"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "2",
						"showingTime" : "10:40"
					 },
					 {
						"movieID" : "3",
						"cinemaID" : "2",
						"showingTime" : "11:00"
					 },
					 {
						"movieID" : "3",
						"cinemaID" : "2",
						"showingTime" : "11:20"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "3",
						"showingTime" : "22:30"
					 },
					 {
						"movieID" : "0",
						"cinemaID" : "3",
						"showingTime" : "22:45"
					 },
					 {
						"movieID" : "1",
						"cinemaID" : "3",
						"showingTime" : "23:00"
					 },
					 {
						"movieID" : "2",
						"cinemaID" : "3",
						"showingTime" : "23:15"
					 },
					 {
						"movieID" : "3",
						"cinemaID" : "3",
						"showingTime" : "23:30"
					 }
					 ]

