import {Routes} from '@angular/router';
import {HomepageComponent, AboutPageComponent, FilmsPageComponent, FilmDetailsComponent, ClassificationsPageComponent } from './pages/pages.index';



export const appRoutes : Routes = [

	{path : 'home', component: HomepageComponent},
	{path : 'about', component : AboutPageComponent},
	{path : 'films', component : FilmsPageComponent},
	{path : 'classifications', component : ClassificationsPageComponent},
	{path : 'films/:title', component : FilmDetailsComponent},
	{path : 'films/:name', component : FilmDetailsComponent},
	{path : '', redirectTo:'/home', pathMatch: 'full'}
	
	
]