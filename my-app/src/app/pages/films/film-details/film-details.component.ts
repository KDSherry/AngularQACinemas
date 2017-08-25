import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CinemaStore } from "../../../flux/cinema-store.service";
import { IMovie } from "../../../flux/movie";
import { CinemaActions } from "../../../flux/cinema-actions.service";
import { Observable } from 'rxjs/Observable';

@Component({
	template : `
	<div style = "width : 90%">
		<div style="text-align: right; font-style: italic">
			<h2>
				{{film.name}}
			</h2>
		</div>
		<hr/>
		<div style="display:inline-block; text-align: left">
			<div>
				<iframe style ="margin-right : 30px; float: left; width: 640px; height: 390px;" [src] = "trustedUrl">
				</iframe>
			</div>
			
			<div style="text-align : right; color: rgb(63,81,181); font-size : 20px; font-style: italic; margin-bottom: 10px">
				{{film.genre.join(', ')}}
			</div>
			<p style = "">
				{{film.description}}
			</p>
			<div>
				Director : {{film.director}}
			</div>
			<div>
				Starring : {{film.actors.join(', ')}}
			</div>
			<div>
				{{film.releaseDate}}
			</div>
			
			<div>
				{{film.classification}}
			</div>
			
		</div>
		<div style = "font-style: italic; margin : 20px">
			<showtimes [filmid]= 'film.id'></showtimes>
		</div>
		
	</div>`
})

export class FilmDetailsComponent{
	film : any;
	trustedUrl;
	constructor (private route: ActivatedRoute, private sanitizer: DomSanitizer, private cinemaStore : CinemaStore){
		
	}
	
	ngOnInit(){
		
		this.film = this.cinemaStore.getMovieById(this.route.snapshot.params['id']);
		this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.film.trailer);
		
	}
}
