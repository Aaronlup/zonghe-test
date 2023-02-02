import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LanguageGuard} from './servives/language.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule), canActivate: [LanguageGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
