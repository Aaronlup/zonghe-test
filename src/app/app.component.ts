import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngstack/translate';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit{
  title = 'zonghe-web';

  constructor(
      private translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.translate.activeLang = 'zh';
  }
}
