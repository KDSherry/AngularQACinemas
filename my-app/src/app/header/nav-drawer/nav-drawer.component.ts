import { Component } from '@angular/core';
import { Location } from '../location/location.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	selector : 'nav-drawer',
	templateUrl : 'nav-drawer.component.html'

})

export class NavDrawerComponent{

    constructor(private authService: AuthService,
        private router: Router,
        private flashMessage: FlashMessagesService
    ) { }

    ngOnInit() {
    }

    onLogoutClick(){
        this.authService.logout();
        this.flashMessage.show('You are logged out', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
        return false;
    }
	
}