import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngstack/translate';

// needed to load translation before application starts
export function setupTranslateService(service: TranslateService): any {
  return () => service.load();
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    TranslateModule.forRoot({
      // options
      supportedLangs: ['zh']
    }),
  ],
  providers: [
    // needed to load translation before application starts
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateService,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
