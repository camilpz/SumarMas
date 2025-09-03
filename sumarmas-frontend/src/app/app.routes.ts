import { Routes } from '@angular/router';
import { NotFound } from './pages/errors/not-found/not-found';
import { Home } from './pages/home/home';
import { Unauthorized } from './pages/errors/unauthorized/unauthorized';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: '404',
        component: NotFound
    },
    {
        path: '401',
        component: Unauthorized
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
