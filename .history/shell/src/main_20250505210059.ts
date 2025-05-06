import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'dashboard': 'http://localhost:4100/remoteEntry.js'
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
