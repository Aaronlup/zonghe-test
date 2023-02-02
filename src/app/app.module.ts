import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule} from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngstack/translate';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {HammerConfig} from './class/hammer.config';

// needed to load translation before application starts
export function setupTranslateService(service: TranslateService): any {
  return () => service.load();
}

const matProviders = [
  {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'outline',
      floatLabel: 'auto'
    }
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      // options
      disableCache: true,
    }),
    HammerModule
  ],
  providers: [
    // needed to load translation before application starts
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateService,
      deps: [TranslateService],
      multi: true
    },
    ...matProviders,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
