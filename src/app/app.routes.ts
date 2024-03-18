import { Routes } from '@angular/router';
import RegisterComponent from './Apolo/pages/register/register.component';
import LoginComponent from './Apolo/pages/login/login.component';
import ChatbotComponent from './Apolo/pages/chatbot/chatbot.component';
import ApoloComponent from './Apolo/Apolo.component';

export const routes: Routes = [
  {
    path: 'Apolo',
    loadComponent: () => import('./Apolo/Apolo.component'),
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
