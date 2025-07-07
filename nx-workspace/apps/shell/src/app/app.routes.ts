import { Route } from '@angular/router';
import { Apidatacomponent } from './apidatacomponent';

export const appRoutes: Route[] = [
  {
    path: 'remote1',
    loadChildren: () => import('remote1/Routes').then(m => m.remoteRoutes)
  },
  {
    path: 'remote2',
    loadChildren: () => import('remote2/Routes').then(m => m.remoteRoutes)
  },
  {
    path: 'shell-api',
    component: Apidatacomponent
  },
  { path: '', redirectTo: 'shell-api', pathMatch: 'full' }
];
