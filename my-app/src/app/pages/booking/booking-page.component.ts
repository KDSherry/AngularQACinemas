import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
	
	templateUrl : './booking-page.component.html'
	
})

export class BookingPageComponent{
	showtime : any;
	filminfo : any;
	adultTicket : number = 0;
	childTicket : number = 0;
	totalTicket : number = 0;
	
	constructor(private route : ActivatedRoute){
		
	}
	
	ngOnInit(){
		showingTimes.forEach(time => {
			if (time.id === this.route.snapshot.params['id']){
				this.showtime = time;
			}
		});
		
		movieDetails.forEach(film =>{
			if (film.id === this.showtime.movieID){
				this.filminfo = film;
			}
		})
		
		
	}
	removeAdult(){
		if (this.adultTicket>0){
			this.adultTicket= this.adultTicket-1;
			this.totalTicket= this.totalTicket -1;
			this.showtime.seatsRemaining+=1;
			console.log(this.adultTicket,this.childTicket, this.totalTicket, this.showtime.seatsRemaining);
			
		}
	}
	addAdult(){
		if (this.showtime.seatsRemaining!==0){
			this.adultTicket+=1;
			this.totalTicket+=1;
			this.showtime.seatsRemaining-=1;
						console.log(this.adultTicket,this.childTicket, this.totalTicket, this.showtime.seatsRemaining);
		}
		
	}
	removeChild(){
		if (this.childTicket>0){
			this.childTicket= this.childTicket-1;
			this.totalTicket= this.totalTicket -1;
			this.showtime.seatsRemaining+=1;
						console.log(this.adultTicket,this.childTicket, this.totalTicket, this.showtime.seatsRemaining);
		}
		
	}
	addChild(){
		if (this.showtime.seatsRemaining!==0){
			this.childTicket+=1;
			this.totalTicket+=1;
			this.showtime.seatsRemaining-=1;
						console.log(this.adultTicket,this.childTicket, this.totalTicket, this.showtime.seatsRemaining);
		}
		
	}
}
const movieDetails=[
					{
					"id":"0",
					"name": "High School Musical",
					"image" : "hsm.jpg",
					"classification": "U",
					"director":"Kenny Ortega",
					"genre" : ["Comedy", "Drama", "Family"],
					"actors" : ["Zac Efron", "Vanessa Hudgens", "Ashley Tisdale"],
                    "trailer": "https://www.youtube.com/embed/ukDLkkvZYFk",
					"releaseDate" : "September 22, 2006",
					"overlayText":"",
					"description" : "On Easter Eve in 2006, high school juniors Troy Bolton (Zac Efron) and Gabriella Montez (Vanessa Hudgens) meet at a party while both teens are at a ski lodge during winter break. At the party, the two are called upon to sing karaoke together. They find that they have a connection and decide to exchange numbers before going their separate ways."	
					},
					
					{
					"id":"1",
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
					"id":"2",
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
					"id":"3",
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
					},
					
					{
					"id":"4",
					"name": "Spider-Man: Homecoming",
					"image" : "smh.jpg",
					"carousel":"smh-c.jpg",
					"classification": "12A",
					"genre" : ["Action", "Adventure", "Sci-Fi"],
					"actors" : ["Tom Holland", "Michael Keaton", "Robert Downey Jr."],
					"director":"Jon Watts",
					"releaseDate" :"July 5, 2017",
                    "trailer": "https://www.youtube.com/embed/n9DwoQ7HWvI",
					"overlayText":"x",
					"description" : "Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in New York City while fighting crime as his superhero alter ego Spider-Man when a new threat emerges."	
					},
					
					{
					"id":"5",
					"name": "It Comes At Night",
					"image" : "ican.jpg",
					"classification": "15",
					"genre" : ["Horror","Mystery"],
					"actors" : ["Joel Edgerton", "Christopher Abbott", "Carmen Ejogo"],
					"director":"Trey Edward Shults",
					"releaseDate" :"July 7, 2017",
					"overlayText":"x",
                    "trailer": "https://www.youtube.com/embed/o-0hcF97wy0",
					"description" : "Secure within a desolate home as an unnatural threat terrorizes the world, a man has established a tenuous domestic order with his wife and son, but this will soon be put to test when a desperate young family arrives seeking refuge."	
					},
					
					{
					"id":"6",
					"name": "War For The Planet Of The Apes",
					"image" : "wftpota.jpg",
					"carousel":"wftpota-c.jpg",
					"classification": "12A",
					"genre" : ["Action", "Adventure", "Drama"],
					"actors" : ["Andy Serkis","Woody Harrelson", "Steve Zahn"],
					"director":"Matt Reeves",
					"releaseDate" :"July 11, 2017",
                    "trailer": "https://www.youtube.com/embed/Y23E0OgEHuY",
					"overlayText":"x",
					"description" : "After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind."	
					},
					
					{
					"id":"7",
					"name": "Baby Driver",
					"image" : "bd.jpg",
					"classification": "15",
					"genre" : ["Action", "Crime", "Music"],
					"actors" : ["Ansel Elgort", "Jon Bernthal", "Jon Hamm", "Eiza González"],
					"director":"Edgar Wright",
					"releaseDate" :"June 28, 2017",
                    "trailer": "https://www.youtube.com/embed/D9YZw_X5UzQ",
					"overlayText":"x",
					"description" : "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail."	
					},
					
					{
					"id":"8",
					"name": "Transformers: The Last Knight",
					"image" : "ttlk.jpg",
					"carousel":"ttlk-c.jpg",
					"classification": "12A",
					"genre" : ["Action", "Adventure", "Sci-Fi"],
					"actors" : ["Mark Wahlberg", "Anthony Hopkins", "Josh Duhamel"],
					"director":"Michael Bay",
					"releaseDate" :"June 22,2017",
                    "trailer": "https://www.youtube.com/embed/6Vtf0MszgP8",
					"overlayText":"x",
					"description" : "Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth."	
					},
					
					{
					"id":"9",
					"name": "Wonder Woman",
					"image" : "ww.jpg",
					"classification": "12A",
					"genre" : ["Action", "Adventure", "Fantasy"],
					"actors" : ["Gal Gadot", "Chris Pine", "Robin Wright"],
					"director":"Patty Jenkins",
					"releaseDate" :"June 1, 2017",
                    "trailer": "https://www.youtube.com/embed/VSB4wGIdDwo",
					"overlayText":"x",
					"description" : "Before she was Wonder Woman, she was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war, discovering her full powers and true destiny."
					},
					
					{
					"id":"10",
					"name": "Dunkirk",
					"image" : "dnk.jpg",
					"classification": "12A",
					"genre" : ["Action", "Drama", "History"],
					"actors" : ["Fionn Whitehead", "Kenneth Branagh", "Mark Rylance"],
					"director": "Christopher Nolan",
					"releaseDate" :"July 21, 2017",
                    "trailer": "https://www.youtube.com/embed/F-eMt3SrfFU",
					"overlayText":"x",
					"description" : "Evacuation of Allied soldiers from Belgium, the British Empire, Canada, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26- June 04, 1940, during Battle of France in World War II."	
					},
					{
					"id":"11",
					"name": "Cars 3",
					"image" : "c3.jpg",
					"classification": "U",
					"genre" : ["Animation", "Adventure", "Comedy" ],
					"actors" : ["Owen Wilson", "Cristela Alonzo", "Chris Cooper"],
					"director": "Brian Fee",
					"releaseDate" :"July 14, 2017",
                    "trailer": "https://www.youtube.com/embed/ZuaseSovWDY",
					"overlayText":"x",
					"description" : "Lightning McQueen sets out to prove to a new generation of racers that he's still the best race car in the world."
					}
       ]
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
						"showingDate" : "09/09/2017",
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
						"showingTime" : "09:20",
						"showingDate" : "08/09/2017",
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
					 }
					 ]