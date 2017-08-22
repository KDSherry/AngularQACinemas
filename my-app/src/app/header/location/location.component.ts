import { Component } from '@angular/core';

@Component({
    selector: 'location',
    template:  `<a class = 'mdl-layout__tab mdl-js-button mdl-js-ripple-effect' (click) = 'toggleMenu()'>Location</a>
	            <location-menu *ngIf = 'showMenu' (exitClicked)='onExitClicked($event)'></location-menu>`
})

export class Location{

    showMenu: boolean = false;
	
	toggleMenu(): void  {
		this.showMenu = !this.showMenu;
    }
    
    onExitClicked(message: string): void {
        this.showMenu = !this.showMenu;
    }
}