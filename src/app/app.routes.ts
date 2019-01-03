import {RouterModule,Routes} from '@angular/router';


import { NopagesfundComponent } from './shared/nopagesfund/nopagesfund.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


const appRoutes:Routes = [


	{
		path:'login',
		component: LoginComponent
	},
	{
		path:'register',
		component: RegisterComponent
	},
	{
		path:'**',
		component: NopagesfundComponent
	}

];


export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});