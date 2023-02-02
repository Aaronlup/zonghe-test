import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

/** 类 */
import { LANG } from './local-storage.namespace';
import { Locale } from '../class/language';

/** 服务 */
import { TranslateService } from '@ngstack/translate';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private route: ActivatedRoute,
    private store: LocalStorageService,
    private translate: TranslateService
  ) { }

  getLang(urlLang: string, storeLang: string): Observable<Locale> {

    const store = Locale[storeLang.toUpperCase()];
    switch (urlLang) {
      case Locale.ZH:
      case Locale.EN:
        const url = Locale[urlLang.toUpperCase()];
        return of(url);
      default:
        switch (store) {
          case Locale.ZH:
          case Locale.EN:
            return of(store);
          default:
            return of(Locale.ZH);
        }
    }
  }

  /** 初始化语言 */
  initLang(urlLang: string, storeLang: string): void {
    this.getLang(urlLang, storeLang)
      .subscribe(locale => {
        if (locale) {
          this.translate.activeLang = locale;
          this.store.set(LANG, locale);
        } else {
          console.error('what have you done?!');
        }
      });
  }

  /**
   * 切换当前语言
   * @param locale 语言：包含 ZH，EN，其他值均返回'this language is not allowed'
   */
  switchLang(locale: Locale): void {
    switch (locale) {
      case Locale.ZH:
      case Locale.EN:
        this.translate.activeLang = locale;
        this.store.set(LANG, locale);
        break;
      default:
        console.error('this language is not allowed');
    }
  }

  /** Log a CourseService message with the MessageService */

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
}
