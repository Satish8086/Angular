import { Routes } from '@angular/router';
import { Login } from './app/pages/login/login';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Registration } from './app/pages/registration/registration';

export const routes: Routes = [
    {path:'',component:Login},
    {path:'signUp',component:Registration},
    {path:'dashboard',component:Dashboard}
];
