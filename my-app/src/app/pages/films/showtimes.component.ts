import { Component, Input } from '@angular/core';
import { CinemaStore } from "../../flux/cinema-store.service";
import { IShowing } from "../../flux/showing";
import { CinemaActions } from "../../flux/cinema-actions.service";
import { Observable } from 'rxjs/Observable';

@Component({
	
	selector: 'showtimes',
	template : `<div *ngIf = filmtimes[0]>
					<div class = "">
						<h5>Showtimes</h5>
					</div>
					<hr/>
					<!--<ol class = 'mdl-list mdl-grid ' style ="display:inline-flex">
						<li class = 'mdl-list_item mdl-cell' *ngFor= "let filmtime of filmtimes">
							<button [routerLink] = "['/booking', filmtime.id]" class = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  mdl-button--colored">
								{{filmtime.showingTime}} 
								
							</button>
							{{filmtime.showingDate}}
							{{filmtime.screenType}}
						</li>
					</ol>-->
					<div>
						<button (click)= "selectDay('Monday')" class = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  mdl-button--colored"> Mon </button>
						<button (click)= "selectDay('Tuesday')" class = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  mdl-button--colored"> Tue </button>
						<button (click)= "selectDay('Wednesday')" class = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  mdl-button--colored"> Weds </button>
						<button (click)= "selectDay('Thursday')" class = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  mdl-button--colored"> Thurs </button>
						<button (click)= "selectDay('Friday')" class = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  mdl-button--colored"> Fri </button>
						<button (click)= "selectDay('Saturday')" class = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  mdl-button--colored"> Sat </button>
						<button (click)= "selectDay('Sunday')" class = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  mdl-button--colored"> Sun </button>
						<hr/>
						
						
						
						
						
						<table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp" *ngIf = "dayTimes.length!=0">
								
							<tbody>
								<tr *ngFor = "let dayTime of dayTimes" >
									
									<td >
										{{dayTime.showingDate}}
									</td>
									
									<td>
									<button  [routerLink] = "['/booking', dayTime.id]" class = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  mdl-button--colored">
										{{dayTime.showingTime}} 
								
									</button>
									</td>
									<td>
										{{dayTime.screenType}}
									
									</td>
								</tr>
							
							</tbody>
						</table>
						
					
					
					</div>
					

				</div>`,
	styles :[`
			ol {width : 30em},
			ol li {float: left; width: 10em},
			button :onclick {background-color: white; color :blue}	
				
				
				
				`]
})

export class ShowtimesComponent{
	@Input() filmid : string;
	filmtimes = [];
	dayTimes =[];
	allShowings = [];
	test;

	
	
	constructor (private _cinemaStore : CinemaStore){}
	
	
	ngOnInit(){

			
			
			this.filmtimes = this._cinemaStore.getShowingsByMovieId(this.filmid);
			this.filmtimes = this.orderTimes(this.filmtimes);
			
			/* console.log(this._cinemaStore.getShowingById('3')); */
			
			/* showingTimes.forEach(showtime => {
				if (showtime.movieID===this.filmid){
					this.filmtimes.push(showtime)
				}
				this.filmtimes = this.orderTimes(this.filmtimes)
			}); */
			 

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
	selectDay(day : string){
		this.dayTimes=[];
		this.filmtimes.forEach(time =>{
			var date = new Date(time.showingDate.split('/')[2]+'/'+time.showingDate.split('/')[1]+'/'+time.showingDate.split('/')[0]);
			
			if (day === "Monday"){
	
				if (date.getDay() === 1){
					this.dayTimes.push(time);
				}
			}
			if (day === "Tuesday"){
					
				if (date.getDay() === 2){
					this.dayTimes.push(time);
				}
			}
			if (day === "Wednesday"){
					
				if (date.getDay() === 3){
					this.dayTimes.push(time);
				}
			}
			if (day === "Thursday"){
					
				if (date.getDay() === 4){
					this.dayTimes.push(time);
				}
			}
			if (day === "Friday"){
					
				if (date.getDay() === 5){
					this.dayTimes.push(time);
				}
			}
			if (day === "Saturday"){
					
				if (date.getDay() === 6){
					this.dayTimes.push(time);
				}
			}
			if (day === "Sunday"){
					
				if (date.getDay() === 0){
					this.dayTimes.push(time);
				}
			}
			
		})
	}
	
	
}


