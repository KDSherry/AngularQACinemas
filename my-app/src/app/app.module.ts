import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';


import { NgxSiemaModule } from 'ngx-siema';


import {AppComponent} from './appcomponent/app.component';
import {HomepageComponent,
		AboutPageComponent,
		FilmsPageComponent,
		FilmThumbnailComponent,
		ClassificationsPageComponent,
		ClassificationThumbnailComponent,
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
	ClassificationsPageComponent,
	ClassificationThumbnailComponent,
	HeaderComponent,
	NavbarComponent,
	LogoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
		NgxSiemaModule.forRoot(),
		HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
