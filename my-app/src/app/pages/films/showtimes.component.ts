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

			
			
			//this._cinemaStore.getShowingById(this.filmid).subscribe(results => {this.test = results;}, error => console.log(error));
			/* console.log(this._cinemaStore.getShowingById('3')); */
			
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

const showingTimes = [
					 {
						"id" : "0",
						"movieID" : "0",
						"cinemaID" : "0",
						"showingTime" : "13:00",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						 "id" : "1",
						"movieID" : "1",
						"cinemaID" : "0",
						"showingTime" : "15:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						"id" : "2",
						"movieID" : "2",
						"cinemaID" : "0",
						"showingTime" : "17:00",
						"showingDate" : "07/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						"id" : "3",
						"movieID" : "3",
						"cinemaID" : "0",
						"showingTime" : "19:00",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
						
					 },
					 {
						 "id" : "4",
						"movieID" : "4",
						"cinemaID" : "0",
						"showingTime" : "13:30",
						"showingDate" : "08/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						 "id" : "5",
						"movieID" : "5",
						"cinemaID" : "0",
						"showingTime" : "17:30",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						 "id" : "6",
						"movieID" : "6",
						"cinemaID" : "0",
						"showingTime" : "21:30",
						"showingDate" : "10/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					{
						"id" : "7",
						"movieID" : "7",
						"cinemaID" : "0",
						"showingTime" : "14:00",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						 "id" : "8",
						"movieID" : "8",
						"cinemaID" : "0",
						"showingTime" : "16:00",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "9",
						"movieID" : "9",
						"cinemaID" : "0",
						"showingTime" : "18:00",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "10",
						"movieID" : "10",
						"cinemaID" : "0",
						"showingTime" : "20:00",
						"showingDate" : "08/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						"id" : "11",
					 	"movieID" : "11",
						"cinemaID" : "0",
						"showingTime" : "16:15",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "12",
					 	"movieID" : "0",
						"cinemaID" : "0",
						"showingTime" : "16:45",
						"showingDate" : "10/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "13",
					 	"movieID" : "1",
						"cinemaID" : "0",
						"showingTime" : "17:15",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },					 
					 {
						 "id" : "14",
						"movieID" : "2",
						"cinemaID" : "1",
						"showingTime" : "13:00",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "15",
						"movieID" : "3",
						"cinemaID" : "1",
						"showingTime" : "15:00",
						"showingDate" : "07/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "16",
						"movieID" : "4",
						"cinemaID" : "1",
						"showingTime" : "17:00",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					  {
						  "id" : "17",
						"movieID" : "5",
						"cinemaID" : "1",
						"showingTime" : "19:00",
						"showingDate" : "07/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "18",
						"movieID" : "6",
						"cinemaID" : "1",
						"showingTime" : "13:30",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "19",
						"movieID" : "7",
						"cinemaID" : "1",
						"showingTime" : "17:30",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "20",
						"movieID" : "8",
						"cinemaID" : "1",
						"showingTime" : "21:30",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "21",
						"movieID" : "9",
						"cinemaID" : "1",
						"showingTime" : "14:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "22",
						"movieID" : "10",
						"cinemaID" : "1",
						"showingTime" : "16:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "23",
						"movieID" : "11",
						"cinemaID" : "1",
						"showingTime" : "18:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "24",
						"movieID" : "0",
						"cinemaID" : "1",
						"showingTime" : "20:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "25",
					 	"movieID" : "1",
						"cinemaID" : "1",
						"showingTime" : "16:15",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "26",
					 	"movieID" : "2",
						"cinemaID" : "1",
						"showingTime" : "16:45",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "27",
					 	"movieID" : "3",
						"cinemaID" : "1",
						"showingTime" : "17:15",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "28",
						"movieID" : "4",
						"cinemaID" : "2",
						"showingTime" : "09:00",
						"showingDate" : "10/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "29",
						"movieID" : "5",
						"cinemaID" : "2",
						"showingTime" : "22:20",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "30",
						"movieID" : "6",
						"cinemaID" : "2",
						"showingTime" : "09:40",
						"showingDate" : "07/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "31",
						"movieID" : "7",
						"cinemaID" : "2",
						"showingTime" : "10:00",
						"showingDate" : "08/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "32",
						"movieID" : "8",
						"cinemaID" : "2",
						"showingTime" : "10:20",
						"showingDate" : "10/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "33",
						"movieID" : "9",
						"cinemaID" : "2",
						"showingTime" : "10:40",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "34",
						"movieID" : "10",
						"cinemaID" : "2",
						"showingTime" : "11:00",
						"showingDate" : "07/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "35",
						"movieID" : "11",
						"cinemaID" : "2",
						"showingTime" : "11:20",
						"showingDate" : "04/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "36",
						"movieID" : "0",
						"cinemaID" : "3",
						"showingTime" : "22:30",
						"showingDate" : "08/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "37",
						"movieID" : "1",
						"cinemaID" : "3",
						"showingTime" : "22:45",
						"showingDate" : "09/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "38",
						"movieID" : "2",
						"cinemaID" : "3",
						"showingTime" : "23:00",
						"showingDate" : "06/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "39",
						"movieID" : "3",
						"cinemaID" : "3",
						"showingTime" : "23:15",
						"showingDate" : "04/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "40",
						"movieID" : "4",
						"cinemaID" : "3",
						"showingTime" : "23:30",
						"showingDate" : "07/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						"id" : "41",
						"movieID" : "5",
						"cinemaID" : "0",
						"showingTime" : "13:00",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						 "id" : "42",
						"movieID" : "6",
						"cinemaID" : "0",
						"showingTime" : "15:00",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						"id" : "43",
						"movieID" : "7",
						"cinemaID" : "0",
						"showingTime" : "17:00",
						"showingDate" : "07/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						"id" : "44",
						"movieID" : "8",
						"cinemaID" : "0",
						"showingTime" : "19:00",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
						
					 },
					 {
						 "id" : "45",
						"movieID" : "9",
						"cinemaID" : "0",
						"showingTime" : "13:30",
						"showingDate" : "08/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						 "id" : "46",
						"movieID" : "10",
						"cinemaID" : "0",
						"showingTime" : "17:30",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						 "id" : "47",
						"movieID" : "11",
						"cinemaID" : "0",
						"showingTime" : "21:30",
						"showingDate" : "10/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					{
						"id" : "48",
						"movieID" : "0",
						"cinemaID" : "0",
						"showingTime" : "14:00",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						 "id" : "49",
						"movieID" : "1",
						"cinemaID" : "0",
						"showingTime" : "16:00",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "50",
						"movieID" : "2",
						"cinemaID" : "0",
						"showingTime" : "18:00",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "52",
						"movieID" : "3",
						"cinemaID" : "0",
						"showingTime" : "20:00",
						"showingDate" : "08/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						"id" : "53",
					 	"movieID" : "4",
						"cinemaID" : "0",
						"showingTime" : "16:15",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "54",
					 	"movieID" : "5",
						"cinemaID" : "0",
						"showingTime" : "16:45",
						"showingDate" : "10/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "55",
					 	"movieID" : "6",
						"cinemaID" : "0",
						"showingTime" : "17:15",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },					 
					 {
						 "id" : "56",
						"movieID" : "7",
						"cinemaID" : "1",
						"showingTime" : "13:00",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "57",
						"movieID" : "8",
						"cinemaID" : "1",
						"showingTime" : "15:00",
						"showingDate" : "07/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "58",
						"movieID" : "9",
						"cinemaID" : "1",
						"showingTime" : "17:00",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					  {
						  "id" : "59",
						"movieID" : "10",
						"cinemaID" : "1",
						"showingTime" : "19:00",
						"showingDate" : "07/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "60",
						"movieID" : "11",
						"cinemaID" : "1",
						"showingTime" : "13:30",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "61",
						"movieID" : "0",
						"cinemaID" : "1",
						"showingTime" : "17:30",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "62",
						"movieID" : "1",
						"cinemaID" : "1",
						"showingTime" : "21:30",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "63",
						"movieID" : "2",
						"cinemaID" : "1",
						"showingTime" : "14:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "64",
						"movieID" : "3",
						"cinemaID" : "1",
						"showingTime" : "16:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "65",
						"movieID" : "4",
						"cinemaID" : "1",
						"showingTime" : "18:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "66",
						"movieID" : "5",
						"cinemaID" : "1",
						"showingTime" : "20:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "67",
					 	"movieID" : "6",
						"cinemaID" : "1",
						"showingTime" : "16:15",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "68",
					 	"movieID" : "7",
						"cinemaID" : "1",
						"showingTime" : "16:45",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "69",
					 	"movieID" : "8",
						"cinemaID" : "1",
						"showingTime" : "17:15",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "70",
						"movieID" : "9",
						"cinemaID" : "2",
						"showingTime" : "09:00",
						"showingDate" : "10/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "71",
						"movieID" : "10",
						"cinemaID" : "2",
						"showingTime" : "09:20",
						"showingDate" : "08/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "72",
						"movieID" : "11",
						"cinemaID" : "2",
						"showingTime" : "09:40",
						"showingDate" : "07/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "73",
						"movieID" : "0",
						"cinemaID" : "2",
						"showingTime" : "10:00",
						"showingDate" : "08/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "74",
						"movieID" : "1",
						"cinemaID" : "2",
						"showingTime" : "10:20",
						"showingDate" : "10/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "75",
						"movieID" : "2",
						"cinemaID" : "2",
						"showingTime" : "10:40",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "76",
						"movieID" : "3",
						"cinemaID" : "2",
						"showingTime" : "11:00",
						"showingDate" : "07/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "77",
						"movieID" : "4",
						"cinemaID" : "2",
						"showingTime" : "11:20",
						"showingDate" : "04/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "78",
						"movieID" : "5",
						"cinemaID" : "3",
						"showingTime" : "22:30",
						"showingDate" : "08/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "79",
						"movieID" : "6",
						"cinemaID" : "3",
						"showingTime" : "22:45",
						"showingDate" : "08/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "80",
						"movieID" : "7",
						"cinemaID" : "3",
						"showingTime" : "23:00",
						"showingDate" : "06/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "81",
						"movieID" : "8",
						"cinemaID" : "3",
						"showingTime" : "23:15",
						"showingDate" : "04/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "82",
						"movieID" : "9",
						"cinemaID" : "3",
						"showingTime" : "23:30",
						"showingDate" : "07/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						"id" : "83",
						"movieID" : "10",
						"cinemaID" : "0",
						"showingTime" : "13:00",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						 "id" : "84",
						"movieID" : "11",
						"cinemaID" : "0",
						"showingTime" : "15:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						"id" : "85",
						"movieID" : "0",
						"cinemaID" : "0",
						"showingTime" : "17:00",
						"showingDate" : "07/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						"id" : "86",
						"movieID" : "1",
						"cinemaID" : "0",
						"showingTime" : "19:00",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
						
					 },
					 {
						 "id" : "87",
						"movieID" : "2",
						"cinemaID" : "0",
						"showingTime" : "13:30",
						"showingDate" : "08/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						 "id" : "88",
						"movieID" : "3",
						"cinemaID" : "0",
						"showingTime" : "17:30",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						 "id" : "89",
						"movieID" : "4",
						"cinemaID" : "0",
						"showingTime" : "21:30",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					{
						"id" : "90",
						"movieID" : "5",
						"cinemaID" : "0",
						"showingTime" : "14:00",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120
					 },
					 {
						 "id" : "91",
						"movieID" : "6",
						"cinemaID" : "0",
						"showingTime" : "16:00",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "92",
						"movieID" : "7",
						"cinemaID" : "0",
						"showingTime" : "18:00",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "93",
						"movieID" : "8",
						"cinemaID" : "0",
						"showingTime" : "20:00",
						"showingDate" : "08/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						"id" : "94",
					 	"movieID" : "9",
						"cinemaID" : "0",
						"showingTime" : "16:15",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "95",
					 	"movieID" : "10",
						"cinemaID" : "0",
						"showingTime" : "16:45",
						"showingDate" : "10/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "96",
					 	"movieID" : "11",
						"cinemaID" : "0",
						"showingTime" : "17:15",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },					 
					 {
						 "id" : "97",
						"movieID" : "0",
						"cinemaID" : "1",
						"showingTime" : "13:00",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "98",
						"movieID" : "1",
						"cinemaID" : "1",
						"showingTime" : "15:00",
						"showingDate" : "07/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "99",
						"movieID" : "2",
						"cinemaID" : "1",
						"showingTime" : "17:00",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					  {
						  "id" : "100",
						"movieID" : "3",
						"cinemaID" : "1",
						"showingTime" : "19:00",
						"showingDate" : "10/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "101",
						"movieID" : "4",
						"cinemaID" : "1",
						"showingTime" : "13:30",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "102",
						"movieID" : "5",
						"cinemaID" : "1",
						"showingTime" : "17:30",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "103",
						"movieID" : "6",
						"cinemaID" : "1",
						"showingTime" : "21:30",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "104",
						"movieID" : "7",
						"cinemaID" : "1",
						"showingTime" : "14:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "105",
						"movieID" : "8",
						"cinemaID" : "1",
						"showingTime" : "16:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "106",
						"movieID" : "9",
						"cinemaID" : "1",
						"showingTime" : "18:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "107",
						"movieID" : "10",
						"cinemaID" : "1",
						"showingTime" : "20:00",
						"showingDate" : "09/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "108",
					 	"movieID" : "11",
						"cinemaID" : "1",
						"showingTime" : "16:15",
						"showingDate" : "06/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "109",
					 	"movieID" : "0",
						"cinemaID" : "1",
						"showingTime" : "16:45",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "110",
					 	"movieID" : "1",
						"cinemaID" : "1",
						"showingTime" : "17:15",
						"showingDate" : "04/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "111",
						"movieID" : "2",
						"cinemaID" : "2",
						"showingTime" : "09:00",
						"showingDate" : "10/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "112",
						"movieID" : "3",
						"cinemaID" : "2",
						"showingTime" : "09:20",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "113",
						"movieID" : "4",
						"cinemaID" : "2",
						"showingTime" : "09:40",
						"showingDate" : "07/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "114",
						"movieID" : "5",
						"cinemaID" : "2",
						"showingTime" : "10:00",
						"showingDate" : "08/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "115",
						"movieID" : "6",
						"cinemaID" : "2",
						"showingTime" : "10:20",
						"showingDate" : "10/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "116",
						"movieID" : "7",
						"cinemaID" : "2",
						"showingTime" : "10:40",
						"showingDate" : "05/09/2017",
						"screenType" : "2D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "117",
						"movieID" : "8",
						"cinemaID" : "2",
						"showingTime" : "11:00",
						"showingDate" : "07/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "118",
						"movieID" : "9",
						"cinemaID" : "2",
						"showingTime" : "11:20",
						"showingDate" : "04/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "119",
						"movieID" : "10",
						"cinemaID" : "3",
						"showingTime" : "22:30",
						"showingDate" : "08/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "120",
						"movieID" : "11",
						"cinemaID" : "3",
						"showingTime" : "22:45",
						"showingDate" : "09/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "121",
						"movieID" : "0",
						"cinemaID" : "3",
						"showingTime" : "23:00",
						"showingDate" : "06/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "122",
						"movieID" : "1",
						"cinemaID" : "3",
						"showingTime" : "23:15",
						"showingDate" : "04/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 },
					 {
						 "id" : "123",
						"movieID" : "2",
						"cinemaID" : "3",
						"showingTime" : "23:30",
						"showingDate" : "07/09/2017",
						"screenType" : "3D",
						"seatsRemaining" :120,
					 }
					 ]

