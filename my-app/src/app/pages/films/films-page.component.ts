import { Component, OnInit } from '@angular/core';
import { CinemaStore } from "../../flux/cinema-store.service";
import { IMovie } from "../../flux/movie";
import { CinemaActions } from "../../flux/cinema-actions.service";
import { Observable } from 'rxjs/Observable';

@Component({
	
	template : `
	<div>
		<form id="searchForm" (ngSubmit)= "searchFilms(searchTerm)" class="navbar-form navbar-right"  >
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
			<label class="mdl-button mdl-js-button mdl-button--icon" for="sample6" modal-trigger="searchResults" >
				<i class="material-icons">search</i>
			</label>
			<div class="mdl-textfield__expandable-holder">
				<input [(ngModel)]="searchTerm" name= "searchTerm" type="text" class="mdl-textfield__input" type="text" id="sample6" placeholder="Search Films" >
				<label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
			</div>
			</div>
		</form>
		<span>
			<button class="mdl-button mdl-js-button" (click)="findGenre('Comedy')">
				Comedy
			</button>
			<button class="mdl-button mdl-js-button" (click)="findGenre('Horror')">
				Horror
			</button>
			<button class="mdl-button mdl-js-button" (click)="findGenre('Drama')">
				Drama
			</button>
			<button class="mdl-button mdl-js-button" (click)="findGenre('Adventure')">
				Adventure
			</button>
			<button class="mdl-button mdl-js-button" (click)="findGenre('Family')">
				Family
			</button>
			<button class="mdl-button mdl-js-button" (click)="findGenre('Sci-fi')">
				Sci-fi
			</button>
			<button class="mdl-button mdl-js-button" (click)="findGenre('Action')">
				Action
			</button>
			<button class="mdl-button mdl-js-button" (click)="findGenre('Mystery')">
				Mystery
			</button>
			<button class="mdl-button mdl-js-button" (click)="findGenre('Crime')">
				Crime
			</button>
			<button class="mdl-button mdl-js-button" (click)="findGenre('Thriller')">
				Thriller
			</button>
			<button class="mdl-button mdl-js-button" (click)="findGenre('Animation')">
				Animation
			</button>
		</span>
		<span>
			<button class="mdl-button mdl-js-button" (click)="findCert('18')">
				18
			</button>
			<button class="mdl-button mdl-js-button" (click)="findCert('15')">
				15
			</button>
			<button class="mdl-button mdl-js-button" (click)="findCert('12')">
				12
			</button>
			<button class="mdl-button mdl-js-button" (click)="findCert('12A')">
				12A
			</button>
			<button class="mdl-button mdl-js-button" (click)="findCert('PG')">
				PG
			</button>
			<button class="mdl-button mdl-js-button" (click)="findCert('U')">
				U
			</button>
		</span>
		
		<h2>Films</h2>
		<hr/>
		<div *ngFor= "let film of films" >
			<film-thumbnail [film] = "film"></film-thumbnail>
		</div>
	</div>`
	
})

export class FilmsPageComponent{
	
	films: Array<any> = [];
	allFilms: Array<any> = [];
	
	constructor( private _cinemaStore: CinemaStore, private _cinemaActions: CinemaActions){}
	
	ngOnInit(){
		
		this._cinemaStore.getMovies().subscribe(results => {this.allFilms = results; this.films = results;}, error => console.log(error));
		
	}
	
	searchFilms(searchTerm){
		searchTerm = searchTerm.toLowerCase();
		this.films=[];
		this.allFilms.forEach((movie) => {
			if(movie.name.toLowerCase().includes(searchTerm)){
				this.films.push(movie);
			}
			else if(movie.director.toLowerCase().includes(searchTerm)){
				this.films.push(movie);
			}
			else if(movie.actors.join(', ').toLowerCase().includes(searchTerm)){
				this.films.push(movie);
			}
		})
	}
	findGenre(genre){
		genre = genre.toLowerCase();
		this.films=[];
		this.allFilms.forEach((movie) => {
			movie.genre.forEach((g) => {
				if (g.toLowerCase().includes(genre)){
					this.films.push(movie);
				}
			})
		})
	}
	
	findCert(cert){
		this.films =[];
		this.allFilms.forEach((movie) => {
			if (movie.classification === cert){
				this.films.push(movie)
			}
		})
	}
	
}
