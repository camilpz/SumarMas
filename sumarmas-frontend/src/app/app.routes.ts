import { Routes } from '@angular/router';
import { NotFound } from './pages/errors/not-found/not-found';
import { Home } from './pages/home/home';
import { Unauthorized } from './pages/errors/unauthorized/unauthorized';
import { Login } from './pages/login/login';

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
        path: 'login',
        component: Login
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
