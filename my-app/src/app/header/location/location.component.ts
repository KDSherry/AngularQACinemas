import { Component } from '@angular/core';

@Component({
    selector: 'location',
    template:  `<a class = 'mdl-layout__tab  mdl-js-button mdl-js-ripple-effect' (click) = 'toggleMenu()'>Location</a>
	            <location-menu *ngIf = 'showMenu'></location-menu>`
})

export class Location{
    
    showMenu: boolean = false;
	
	toggleMenu(): void  {
		console.log(this.showMenu);
		this.showMenu = !this.showMenu;
		console.log(this.showMenu);
	}
}