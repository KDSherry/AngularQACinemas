import {Routes} from '@angular/router';
import {HomepageComponent, AboutPageComponent, FilmsPageComponent, FilmDetailsComponent } from './pages/pages.index';



export const appRoutes : Routes = [

	{path : 'home', component: HomepageComponent},
	{path : 'about', component : AboutPageComponent},
	{path : 'films', component : FilmsPageComponent},
	{path : 'films/:id', component : FilmDetailsComponent},
	{path : '', redirectTo:'/home', pathMatch: 'full'}
	
	
]