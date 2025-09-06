import { Routes } from '@angular/router';
import { Login  } from './login/login';
import { Mainpage } from './mainpage/mainpage';
import { Studentinfo } from './studentinfo/studentinfo';
import { Details2 } from './mainpage/details2/details2';


export const routes: Routes = [
    {path:"",redirectTo:'login', pathMatch:'full'},
    {path: 'login', component : Login },
    {path: 'mainpage', component : Mainpage },
    {path: 'student/:sno', component : Studentinfo },
    {path:'details2', component:Details2}
];
