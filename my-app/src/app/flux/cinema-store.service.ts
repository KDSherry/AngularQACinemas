import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { CinemaActions } from "./cinema-actions.service";
import { IMovie } from './movie';
import { IShowing } from './showing';


@Injectable()
export class CinemaStore {

    //set URLs for getting data, currently set to json, change to API address for mongo
    private _moviesURL = './assets/moviedetails.json';
    private _showingsURL = './assets/showingtimes.json';

    errorMessage: string; 

    //define attributes to load data into, custom data types created via interfaces
    //as with previous store have two attributes for movies: fluxmovies for a full list of movies from json/db, filteredMovies for results of search functions
    fluxMovies: IMovie[] = [];
    filteredMovies: IMovie[] = [];
    fluxShowings: IShowing[] = [];

    
    /*create BehaviourSubjects, similar to a Observable. 
    This is what the angular components will watch to get updated data.
    This replaces the react implementation of emitting an event from the store, and having the components listen for events.
    Here we have the store set up BehaviourSubjects, and have the components observe the subjects

    When an observable is subscribed to, the subscriber will only receive data when the next data value is emitted.
    However, with a BehaviourSubject, upon being subscribed to, it will send the most recent data to the subscriber.
    This means it needs to be created with default data, so when it is subscribed to it has some data to emit.
    */
    searchSubject = new BehaviorSubject<IMovie[]>([{
        "id": 0,
        "name": "Awaiting Data",
        "image" : "Awaiting Data",
        "classification": "U",
        "director":"Awaiting Data",
        "genre" : [],
        "actors" : [],
        "trailer": "",
        "releaseDate" :"",
        "overlayText":"",
        "description" : ""	
        }]);

    movieSubject = new BehaviorSubject<IMovie[]>([{
            "id": 0,
            "name": "Awaiting Data",
            "image" : "Awaiting Data",
            "classification": "U",
            "director":"Awaiting Data",
            "genre" : [],
            "actors" : [],
            "trailer": "",
            "releaseDate" :"",
            "overlayText":"",
            "description" : ""	
            }]);

    showingSubject = new BehaviorSubject<IShowing[]>([{
        "id" : "0",
        "movieID" : "",
        "cinemaID" : "",
        "showingTime" : "",
        "showingDate" : "",
        "screenType" : "",
        "seatsRemaining" : 0
            }]);

    
    constructor(private _http: HttpClient){
       this.filteredMovies = [];

       //Subscribe to the observable returned from the load data functions (see below)
       //Subscribe function has three arguments, which you can define or use functions for.
       //First is what to do when a new value is recieved by the observable, second is what to do if there is an error, third is what to do if the Observable is completed.
       //Observable may not always complete as they can receive new data over time, however a HTTP request will only return a value once, so it will complete once the data has been received.

       this.loadMovies().subscribe(/*1st method, setting the store attribute to the results returned from the HTTP request*/
                                    moviesFromURL => {
                                                        this.fluxMovies = moviesFromURL;
                                                        console.log('moviejsonLoadCheck');
                                                        console.log(moviesFromURL);  
                                                    },
                                    /*2nd method, defining what to do with an error*/
                                    error=> this.errorMessage = <any>error, 
                                    /*3rd method, to run on completition. 
                                    calling the .next function on a behaviour subject will send the data passed through the (argument) to any observer subscribed to it
                                    This is how we send updated store information to components*/
                                    () =>{
                                            console.log('json loading 2a');
                                            this.searchSubject.next(this.fluxMovies);
                                            this.movieSubject.next(this.fluxMovies);
                                        }
                                );

        this.loadShowings().subscribe(showingsFromURL => {
                                                        this.fluxShowings = showingsFromURL;
                                                        console.log('showingjsonLoadCheck');
                                                        console.log(showingsFromURL);  
                                                        },
                                    error=> this.errorMessage = <any>error, 
                                    () => {console.log('json loading 2b'),this.showingSubject.next(this.fluxShowings)});

    }

    /*
    This is a service, not an angular component, so angular lifecycle functions do not work
    ngOnInit(){
        
        console.log('store init');
    }
    */



    //define methods that will request the data via HTTP from the defined URLs.
    //Returns an Observable, an alternative to using a "promise".
    loadMovies(): Observable<IMovie[]>{
        return this._http.get<IMovie[]>(this._moviesURL)
        .catch(this.handleError);
    }

    loadShowings(): Observable<IShowing[]>{
        return this._http.get<IShowing[]>(this._showingsURL)
        .catch(this.handleError);
    }

    //function to handle errors within the subscriptions, should the http request fail
    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }

    //imported old function to search movies via text, adapted to work this store, works at present
    filterMoviesBySearch(searchParameters) {
        this.filteredMovies = [];

		this.fluxMovies.forEach((movie) => {
            if(movie.name.toUpperCase().indexOf(searchParameters.toUpperCase()) !== -1) {this.filteredMovies.push(movie);}});        
		this.searchSubject.next(this.filteredMovies);
	}
    
    //returns an observable for the store attribute.
    //This is the method to be used to retrieve the BehaviourSubject for an attribute
    //Run a subscription on these methods from angular components to watch for the data to update
    getMovies():Observable<IMovie[]>{
        return this.movieSubject;
    }

    getMovieSearch():Observable<IMovie[]>{
        return this.searchSubject;
    }

    getShowings():Observable<IShowing[]>{
        return this.showingSubject;
    }

    //temp hardcoded data for testing purposes
    populateMovies():IMovie[]{
        return [
            {
                "id": 0,
                "name": "High School Musical",
                "image" : "hsm.jpg",
                "classification": "U",
                "director":"Kenny Ortega",
                "genre" : ["Comedy", "Drama", "Family"],
                "actors" : ["Zac Efron", "Vanessa Hudgens", "Ashley Tisdale"],
                "trailer": "https://www.youtube.com/embed/ukDLkkvZYFk",
                "releaseDate" :"September 22, 2006",
                "overlayText":"",
                "description" : "On Easter Eve in 2006, high school juniors Troy Bolton (Zac Efron) and Gabriella Montez (Vanessa Hudgens) meet at a party while both teens are at a ski lodge during winter break. At the party, the two are called upon to sing karaoke together. They find that they have a connection and decide to exchange numbers before going their separate ways."	
                },
                
                {
                "id": 1,
                "name": "Battle Royale",
                "image" : "br.jpg",
                "classification": "18",
                "genre" : ["Adventure", "Drama", "Sci-Fi"],
                "actors" : [" Tatsuya Fujiwara", "Aki Maeda"],
                "director":" Kinji Fukasaku",
                "trailer": "https://www.youtube.com/embed/N0p1t-dC7Ko",
                "releaseDate" :"September 14, 2001",
                "overlayText":"x",
                "description" : "42 9th graders are sent to a deserted island. They are given a map, food, and various weapons. An explosive collar is fitted around their neck. If they break a rule, the collar explodes. Their mission: kill each other and be the last one standing. The last survivor is allowed to leave the island."	
                },
                
                {
                "id": 2,
                "name": "The Texas Chainsaw Massacre",
                "image" : "tcm.jpg",
                "classification": "18",
                "genre" : ["Horror"],
                "actors" : ["Marilyn Burns", "Allen Danziger"],
                "overlayText":"x",
                "director":"Tobe Hooper",
                "trailer": "https://www.youtube.com/embed/Vs3981DoINw",
                "releaseDate" :"October 4, 1974",
                "description" : "Two siblings visit their grandfather's grave in Texas along with three of their friends and are attacked by a family of cannibalistic psychopaths."	
                },
                
                {
                "id": 3,
                "name": "Sophie's Choice",
                "image" : "sc.jpg",
                "classification": "15",
                "genre" : ["Drama","Romance"],
                "actors" : ["Meryl Streep", "Kevin Kline"],
                "releaseDate" :"March 4, 1983",
                "director":" Alan J. Pakula",
                "trailer": "https://www.youtube.com/embed/STPJVf6wqCk",
                "overlayText":"x",
                "description" : "After spending time with his new neighbors, an aspiring writer realizes they are harboring deep secrets that will forever change him."	
                }

        ];
    }

    //handle actions function similar to how we used flux in react.
    //this should be called from the cinema-actions service, after it has an action sent to it.
    handleActions(action) {
		switch(action.actionType) {
            case "MOVIE_SEARCH":
                 console.log('Store Received Action:' + action.searchTerm);
                 this.filterMoviesBySearch(action.searchTerm);
            break;
			default:
			break;
		}
	}

}



//const cinemaStore = new CinemaStore();
//dispatcher.register(cinemaStore.handleActions.bind(cinemaStore));
//export default cinemaStore;