import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LanguageService } from './language.service';
import { LocalStorageService } from './local-storage.service';
// import {Local} from 'protractor/built/driverProviders';
import { LANG } from './local-storage.namespace';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {
  constructor(
    private language: LanguageService,
    private store: LocalStorageService,
    private http: HttpClient,
    private common: CommonService
  ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.language.initLang();
    const url: string = next.queryParams.l ? next.queryParams.l : '';
    // console.log('language guard: ', url, store);
    const store: string = this.store.get(LANG) ? this.store.get(LANG) : '';
    this.language.initLang(url, store);
    return true;
  }

}
