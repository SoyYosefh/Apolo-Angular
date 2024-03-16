import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'Apolo',
        loadComponent: () => import('./Apolo/Apolo.component')

    },
    {
        path: 'login',
        loadComponent: () => import('./Apolo/pages/login/login.component'),
    },
    {
        path: 'register',
        loadComponent: () => import('./Apolo/pages/register/register.component'),
    },
    {
        path: 'chat',
        loadComponent: () => import('./Apolo/pages/chatbot/chatbot.component'),
    },
    {
        path: '',
        redirectTo: '/Apolo',
        pathMatch: 'full'
    }
];
