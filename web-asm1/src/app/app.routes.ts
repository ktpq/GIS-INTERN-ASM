import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'four-colors',
        loadComponent: () => import('./four-colors/four-colors').then(m => m.FourColors)
    },
    {
        path: 'dog-resume',
        loadComponent: () => import('./dog-resume/dog-resume').then(m => m.DogResume)
    },
    {
        path: 'my-forum',
        loadComponent: () => import('./my-forum/my-forum').then(m => m.MyForum)
    }
];
