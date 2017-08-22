import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { NgxSiemaModule } from 'ngx-siema';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './appcomponent/app.component';
import {HomepageComponent,
        FilmRowsComponent,
		AboutPageComponent,
		FilmsPageComponent,
		FilmThumbnailComponent,
		ClassificationsPageComponent,
		ClassificationThumbnailComponent,
		ShowtimesComponent,
		AmenityBoxComponent,
		FilmDetailsComponent,
		BookingPageComponent,
		BookSeatsComponent,
		RegisterComponent,
		LoginComponent,
		ProfileComponent,
		DashboardComponent } from './pages/pages.index';
import {HeaderComponent, 
		NavbarComponent, 
		LogoComponent} from './header/header.index';
import {QuickBookBarComponent} from './pages/homepage/quickbookbar/quick-book-bar.component'

	

//Services for login
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';


import {appRoutes} from './routes';


@NgModule({
  declarations: [
    AppComponent,
	HomepageComponent,
	AboutPageComponent,
	FilmsPageComponent,
	FilmThumbnailComponent,
	ShowtimesComponent,
	FilmDetailsComponent,
	ClassificationsPageComponent,
	ClassificationThumbnailComponent,
	HeaderComponent,
	NavbarComponent,
	LogoComponent,
	QuickBookBarComponent,
	AmenityBoxComponent,
	FilmRowsComponent,
	BookingPageComponent,
	BookSeatsComponent,
	RegisterComponent,
	LoginComponent,
	ProfileComponent,
	DashboardComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxSiemaModule.forRoot(),
    FormsModule,
    HttpModule,
	FlashMessagesModule,
	HttpClientModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
