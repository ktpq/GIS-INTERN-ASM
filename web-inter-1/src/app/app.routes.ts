import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'one',
        loadComponent: () => import('./one/one').then(m => m.Home)
    },
    {
        path: 'two',
        loadComponent: () => import('./two/two').then(m => m.Home)
    },
    {
        path: 'three',
        loadComponent: () => import('./three/three').then(m => m.Home)
    },
    {
        path: 'four',
        loadComponent: () => import('./four/four').then(m => m.Home)
    },
    {
        path: 'fivesix',
        loadComponent: () => import('./fivesix/fivesix').then(m => m.Home)
    }
];
