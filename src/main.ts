import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { persistState } from '@datorama/akita';
import { akitaConfig } from "@datorama/akita";
import { throwError } from 'rxjs';



export const storage = persistState({
  include: ['auth'],
});

akitaConfig({
  resettable: true
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([{ provide: 'persistStorage', useValue: storage }]).bootstrapModule(AppModule)
  .catch(err => console.error(err));
