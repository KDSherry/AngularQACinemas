import { Component, Input } from '@angular/core';
import { LocationMenu } from '../location/location-menu.component';

@Component({
	selector : 'nav-bar',
	templateUrl : 'nav-bar.component.html'

})

export class NavbarComponent{
	
	showMenu: boolean = false;
	
	toggleMenu(): void {
		console.log(this.showMenu);
		this.showMenu = !this.showMenu;
		console.log(this.showMenu);
	}
}