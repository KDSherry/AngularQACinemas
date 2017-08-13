import { Component, Input } from '@angular/core';

@Component({

	selector : 'film-thumbnail',
	template : `
		<div [routerLink] = "['/films', film.name]" class= 'filmthumb'>
			<span class='film_title'>
				<h2 >{{film.name}}</h2>
			</span>
			<span >
				<img [src] = "['assets/images/'+film.image]" [alt]="film.name" class = 'poster'>
			</span>
			<span class = 'filmthumb'>
				<div>Release: {{film.releaseDate}}</div>
				<div>{{film.classification}}</div>
				<showtimes [filmid]= 'film.id'></showtimes>
			</span>
		</div>`,
	styles : [`
		.poster{height : 300px; width : 200px},
		.filmthumb{display : inline-block; border-style: solid black},
		.film_title{float: right; textAlign: right}`]

})

export class FilmThumbnailComponent{
	@Input() film: any;
}