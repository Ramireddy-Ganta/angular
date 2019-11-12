import {LoginComponent} from './login/login.component';
import {AccountGuard} from './account.guard';
import{ ProjectComponent}  from '../admin/projects/projects.component';

export const accountRoutes=[
    {
        path:'',
        redirectTo :'account-login',
        pathmatch:'full'
    }, 
    {
        path:'/projects',
        component:ProjectComponent,
        canActivate:[AccountGuard]        
    },
]