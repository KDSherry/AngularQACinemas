import { Component } from '@angular/core';

@Component({
    selector: 'location-menu',
    templateUrl: 'location-menu.component.html'
})

export class LocationMenu{
    showMenu: boolean = false;
	
	toggleMenu(): void {
		this.showMenu = !this.showMenu;
	}
}