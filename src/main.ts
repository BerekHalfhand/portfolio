import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then(() => {
  const splashScreen = document.getElementById('my-splash-screen');
  splashScreen.setAttribute('class', 'loaded');
  setTimeout(() => splashScreen.remove(), 500); // change the timeout to be almost the same as the transition animation.
})
.catch(err => console.error(err));
