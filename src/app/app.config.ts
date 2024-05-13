import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { provideAnimations } from '@angular/platform-browser/animations';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptorsFromDi()), provideAnimations(), provideAnimations()
    ,{provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ]
};
