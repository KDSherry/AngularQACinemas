import {Routes} from '@angular/router';
import {HomepageComponent, AboutPageComponent,BookingPageComponent, FilmsPageComponent, FilmDetailsComponent, ClassificationsPageComponent } from './pages/pages.index';



export const appRoutes : Routes = [

	{path : 'home', component: HomepageComponent},
	{path : 'about', component : AboutPageComponent},
	{path : 'films', component : FilmsPageComponent},
	{path : 'classifications', component : ClassificationsPageComponent},
	{path : 'films/:id', component : FilmDetailsComponent},
	{path : 'booking/:id', component : BookingPageComponent},
	{path : '', redirectTo:'/home', pathMatch: 'full'}
	
	
] 