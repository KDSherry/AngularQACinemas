import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	selector : 'nav-bar',
	templateUrl : 'nav-bar.component.html'

})

export class NavbarComponent{

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