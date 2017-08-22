import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'location-menu',
    templateUrl: 'location-menu.component.html'
})

export class LocationMenu{

    locations: any;

    ngOnInit(){
        this.locations = allLocations;
    }
}

const allLocations = [
    {
        "id" : "0",
        "location" : "London",
        "image" : "il_570xN.660904913_mjkr.png"
    },
    {
        "id" : "1",
        "location" : "Manchester",
        "image" : "manchester+bee+outline.png"
    },
    {
        "id" : "2",
        "location" : "Birmingham",
        "image" : "e90a8a252bf4ceaf033d4cdf2a5814e0--canal-boat-coloring-pages.png"
    },
    {
        "id" : "3",
        "location" : "Edinburgh",
        "image" : "edinburgh-castle-coloring-page.png"
    }
]