import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        title: 'Angular Signals — Мини-курс',
        component: Home
    },
    {
        path: 'lesson-01',
        title: 'Урок 1 — Основы Signals',
        loadComponent: () => import('./lessons/lesson-01/lesson-01').then(m => m.Lesson01)
    },
    {
        path: 'lesson-02',
        loadComponent: () => import('./lessons/lesson-02/lesson-02').then(m => m.Lesson02)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
