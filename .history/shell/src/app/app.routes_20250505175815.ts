import { Route, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('dashboard/Component').then(m => m.AppComponent)
  },
  {
    path: 'application-analyzer',
    loadComponent: () => import('application-analyzer/Component').then(m => m.RemoteEntryModule)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];