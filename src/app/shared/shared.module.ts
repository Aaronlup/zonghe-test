import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngstack/translate';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

const ORIGINAL_CP = [
  CommonModule,
];

const OUTTER_CP = [
  TranslateModule,
  AngularFullpageModule
];

const CPS = [

];

@NgModule({
  declarations: [
    ...CPS,
  ],
  imports: [
    ...ORIGINAL_CP,
    ...OUTTER_CP,
    MatSidenavModule,
    MatTooltipModule,
    TranslateModule.forChild()
  ],
  exports: [
    ...ORIGINAL_CP,
    ...OUTTER_CP,
    ...CPS,
    MatSidenavModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
