import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { NgxSiemaModule } from 'ngx-siema';

import {AppComponent} from './appcomponent/app.component';
import {HomepageComponent,
		AboutPageComponent,
		FilmsPageComponent,
		FilmThumbnailComponent,
		ShowtimesComponent,
		FilmDetailsComponent } from './pages/pages.index';
import {HeaderComponent, 
		NavbarComponent, 
		LogoComponent} from './header/header.index';


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
	HeaderComponent,
	NavbarComponent,
	LogoComponent
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
