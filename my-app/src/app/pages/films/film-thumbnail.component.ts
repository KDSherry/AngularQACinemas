import { Component, Input } from '@angular/core';

@Component({

	selector : 'film-thumbnail',
	template : `
		<div [routerLink] = "['/films', film.name]" >
			<h2>{{film.name}}</h2>
			<img [src] = "['assets/images/'+film.image]" [alt]="film.name" class = 'poster-size'>
			<div>Release: {{film.releaseDate}}</div>
			<div>{{film.classification}}</div>
			<showtimes [filmid]= 'film.id'></showtimes>
		</div>`,
	styles : [`
		.poster-size{height : 300px; width : 200px}`]

})

export class FilmThumbnailComponent{
	@Input() film: any;
}