import { Component, Input } from '@angular/core';

@Component({

	selector : 'film-thumbnail',
	template : `
		<div  style ="box-shadow: 5px 5px 20px black;  margin: 20px; padding:20px; display: inline-block;">
			<span >
				<h2 class= 'filmtitle' style="text-align: right; color: #3a5555; font-style : italic; border-bottom : black solid 1px" [routerLink] = "['/films', film.id]" >{{film.name}}</h2>
			</span>
			<div class= 'film_info' style="display: inline-flex;">
				<span >
					<img [src] = "['assets/images/'+film.image]" [alt]="film.name" class = 'poster'>
				</span>
				<span class = 'filmthumb'>
					<div>Release: {{film.releaseDate}}</div>
					<div>{{film.classification}}</div>
					<showtimes [filmid]= 'film.id'></showtimes>
				</span>
			</div>
		</div>`,
	styles : [`
		.poster{height : 300px; width : 200px},
		.film_info{display: inline-flex;},
		.filmtitle{font-style : italic}
		.filmthumb{text-align: right;
    font-style: italic; margin:20px}`]

})

export class FilmThumbnailComponent{
	@Input() film: any;
}