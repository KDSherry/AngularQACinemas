
import { Injectable } from '@angular/core';
import { CinemaStore } from "./cinema-store.service";
import { IMovie } from "./movie";

@Injectable()
export class CinemaActions {

	constructor(private _cinemaStore: CinemaStore){
        console.log("Action Check");
    }


/*
actions copied over from the react flux setup, commented out as don't work directly, but can be used to guide creation of new actions


export function filterMoviesBySearch(searchParameters) {
    
   // dispatcher.dispatch({
    //    type: "FILTER_SEARCH",
    //    searchParameters,
    //});
}

export function filterMoviesByGenre(genreArray){
	//dispatcher.dispatch({
	//	type: "GENRE_SEARCH",
//		genreArray,
	//});
}

export function filterMoviesByClassification(classificationArray){
//	dispatcher.dispatch({
//		type: "CLASS_SEARCH",
//		classificationArray,
//	});
}

export function filterMovies(searchParameters, genreArray, classificationArray){
//	let parameterArray = [searchParameters, genreArray, classificationArray];
//		dispatcher.dispatch({
//			type: "MOVIE_SEARCH",
//			parameterArray,
		});
}
*/

	filterMoviesBySearch(searchTerm: string){
	var newAction: any;

	newAction = {
				actionType: "MOVIE_SEARCH",
				searchTerm,
				}
	this._cinemaStore.handleActions(newAction);

	}
}