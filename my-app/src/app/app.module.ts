import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { NgxSiemaModule } from 'ngx-siema';

import {AppComponent} from './appcomponent/app.component';
import {HomepageComponent,
        FilmRowsComponent,
		AboutPageComponent,
		FilmsPageComponent,
		FilmThumbnailComponent,
		ClassificationsPageComponent,
		ClassificationThumbnailComponent,
		ShowtimesComponent,
		FilmDetailsComponent,
		BookingPageComponent,
		BookSeatsComponent} from './pages/pages.index';
import {HeaderComponent, 
		NavbarComponent, 
		LogoComponent,
		Location,
		LocationMenu,
		LocationThumbnailComponent} from './header/header.index';


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
	Location,
	LocationMenu,
	LocationThumbnailComponent,
	FilmRowsComponent,
	BookingPageComponent,
	BookSeatsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxSiemaModule.forRoot()
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
