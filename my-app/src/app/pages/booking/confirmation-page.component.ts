import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaStore } from "../../flux/cinema-store.service";
import { IMovie } from "../../flux/movie";
import { CinemaActions } from "../../flux/cinema-actions.service";
import { Observable } from 'rxjs/Observable';


@Component({
	template : `
	<div>
		<h2>
			Your booking is completed! Enjoy : 
		</h2>
		<h4>
			{{filminfo.name}} at {{showtime.showingTime}} on {{showtime.showingDate}}
		</h4>
		<div>
			<img [src]="['assets/images/'+filminfo.image]" [alt]="filminfo.name" style="max-width: 200px">
		</div>
	</div>`,
	
})

export class ConfirmationPageComponent{
	
	filminfo : any;
	showtime : any;
	
	constructor(private route : ActivatedRoute, private cinemaStore : CinemaStore){
		
	}
	
	
	ngOnInit(){
		console.log(this.route.snapshot.params['id']);
		
		this.showtime = this.cinemaStore.getShowingById(this.route.snapshot.params['id']);
		this.filminfo = this.cinemaStore.getMovieById(this.showtime.movieID);
	}
}