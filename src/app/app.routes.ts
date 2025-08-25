import { Routes } from '@angular/router';
import { Login } from './app/pages/login/login';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Registration } from './app/pages/registration/registration';
import { Users } from './app/pages/users/users';
import { Reports } from './app/pages/reports/reports';

export const routes: Routes = [
    {path:'',component:Login},
    {path:'signUp',component:Registration},
    {path:'dashboard',component:Dashboard},
    {path:'users',component:Users},
    {path:'reports',component:Reports}
];
