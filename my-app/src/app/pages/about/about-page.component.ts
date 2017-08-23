import { Component , OnInit } from '@angular/core';

@Component({
	
	templateUrl: 'about-page.component.html'

})

export class AboutPageComponent implements OnInit{
	locations = [];
	location = [];
	amenities = [];
	
	/*pass the selected location in here*/
	constructor(){
        this.locations = cinemas;
       /* console.log(this.locations);*/
		this.location = this.locations[0];
		/*console.log(this.location);*/
		
    }
	ngOnInit(){
		this.amenities = this.locations[0].localBusiness;
    }
}

const cinemas=[
	{
		"location" : "London",
		"openingHours" : ["9:00 - 23:00","8:30 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 24:00","10:00 - 24:00","10:00 - 20:00"],
		"venueImage" : "londonlocation.jpg",
		"contactEmail":"qacLondon@qac.com",
		"contactNumber":"01234 456789",
		"address":"123 fake street, fakeston, London, LL00 0LL",
		"accessInformation":"Disabled parking available",
		"localBusiness":[
			{
				"busisnessName":"Frankie and Bennys",
				"busisnessDescription" : "New York Italian Restaurant and Bar",
				"businessLink" : "https://www.frankieandbennys.com/",
				"businessImg" : "f&b.jpg"
			},
			{
				"busisnessName":"Nandos",
				"busisnessDescription" : "Portugese/South African Peri Peri Chicken",
				"businessLink" : "https://www.nandos.co.uk/",
				"businessImg" : "nandos.jpg"
			}
		]
	},
	{
	"location" : "Manchester",
	"openingHours" : ["9:00 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 23:00"],
	"venueImage" : "manchesterlocation.jpg",
	"contactEmail":"qacManchester@qac.com",
	"contactNumber":"01234 456789",
	"address":"123 fake street, fakeston, Manchester, MM00 0MM"
		
	
	},
	{
	"location" : "York",
	"openingHours" : ["9:00 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 23:00"],
	"venueImage" : "yorklocation.jpg",
	"contactEmail":"qacYork@qac.com",
	"contactNumber":"01234 456789",
	"address":"123 fake street, fakeston, York, YY00 0YY"
	
	},
	{
	"location" : "Edinburgh",
	"openingHours" : ["9:00 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 23:00","9:00 - 23:00"],
	"venueImage" : "edinburghlocation.jpg",
	"contactEmail":"qacEdinburgh@qac.com",
	"contactNumber":"01234 456789",
	"address":"123 fake street, fakeston, Edinburgh, EE00 0EE"
	}
]