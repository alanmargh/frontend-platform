import { Route, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/Module').then(m => m.RemoteEntryModule)
  },
  {
    path: 'application-analyzer',
    loadChildren: () => import('application-analyzer/Module').then(m => m.RemoteEntryModule)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];