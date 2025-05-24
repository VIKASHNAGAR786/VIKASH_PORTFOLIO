// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
};
