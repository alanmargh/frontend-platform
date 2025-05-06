import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  // {
  //   path: 'dashboard',
  //   loadComponent: () => import('dashboard/Component').then(m => m.AppComponent)
  // },
  {
    path: 'application-analyzer',
    loadComponent: () => loadRemoteModule({
      remoteName: 'application-analyzer/Component',
      exposedModule: './Component',
    }).then((esm) => esm.AppComponent),
    // import('application-analyzer/Component').then(m => m.AppComponent)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];