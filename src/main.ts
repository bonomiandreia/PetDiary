import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { persistState } from '@datorama/akita';
import { akitaConfig } from "@datorama/akita";
import { throwError } from 'rxjs';

persistState({
  include: ['auth'],
});

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => throwError(err));

akitaConfig({
  resettable: true
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
