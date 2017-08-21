import {Routes} from '@angular/router';
import {HomepageComponent, AboutPageComponent, FilmsPageComponent, FilmDetailsComponent, ClassificationsPageComponent,
RegisterComponent, LoginComponent, DashboardComponent, ProfileComponent } from './pages/pages.index';
import { AuthGuard } from './guards/auth.guard';


export const appRoutes : Routes = [

	{path : 'home', component: HomepageComponent},
	{path : 'about', component : AboutPageComponent},
	{path : 'films', component : FilmsPageComponent},
	{path : 'classifications', component : ClassificationsPageComponent},
	{path : 'films/:id', component : FilmDetailsComponent},
	{ path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
	{path : '', redirectTo:'/home', pathMatch: 'full'}
	
	
]