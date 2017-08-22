import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { NgxSiemaModule } from 'ngx-siema';

import {AppComponent} from './appcomponent/app.component';
import {HomepageComponent,
		AboutPageComponent,
		FilmsPageComponent,
		FilmThumbnailComponent,
		ClassificationsPageComponent,
		ClassificationThumbnailComponent,
		ShowtimesComponent,
		AmenityBoxComponent,
		FilmDetailsComponent } from './pages/pages.index';
import {HeaderComponent, 
		NavbarComponent, 
		LogoComponent} from './header/header.index';
import {QuickBookBarComponent} from './pages/homepage/quickbookbar/quick-book-bar.component'

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
	AmenityBoxComponent
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
