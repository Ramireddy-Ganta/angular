import {ProjectComponent} from './projects/projects.component';
import {AdminGuard} from './admin.guard';
import {AccountGuard} from '../account/account.guard';
export const projectRoutes=[
    {
        path:'',
        component:ProjectComponent,
        canActivate:[AccountGuard]
    }
]