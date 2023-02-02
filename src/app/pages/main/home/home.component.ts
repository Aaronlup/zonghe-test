import {AfterViewInit, Component, ElementRef, Inject, OnChanges, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import { solution, contactUs, insight, aboutUs, team } from 'src/app/mock';
import {TranslateService} from '@ngstack/translate';
import {LocalStorageService} from '../../../servives/local-storage.service';
import {CommonService} from '../../../servives/common.service';
import { LANG } from '../../../servives/local-storage.namespace';
import {isPlatformBrowser} from '@angular/common';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  config: any;
  fullpageApi: any;
  navList = ['home', 'solution', 'insight', 'about-us', 'team', 'contact-us'];
  @ViewChild('homeView') homeView: ElementRef;
  @ViewChild('solutionView') solutionView: ElementRef;
  @ViewChild('insightView') insightView: ElementRef;
  @ViewChild('aboutUsView') aboutUsView: ElementRef;
  @ViewChild('teamView') teamView: ElementRef;
  @ViewChild('contactUsView') contactUsView: ElementRef;
  solutionInfo = solution;
  insightList = insight;
  aboutUsList = aboutUs;
  contactList = contactUs;
  teamList = team;
  teamListWidth: number;
  teamActiveIndex = 0;
  headerBackground: boolean;
  headerNav = 'home';
  solutionInfoSelect = 'tax';
  mobile: boolean;
  scrollHome: boolean;
  teamLeftTime: boolean;
  teamRightTime: boolean;
  drawerOpened: boolean;
  solutionItem = [];
  solutionWrapper = 0;
  solutionSliding = 0;
  solutionIndex = 0;
  constructor(
      public translate: TranslateService,
      private store: LocalStorageService,
      public common: CommonService,
      @Inject(PLATFORM_ID) private plateformId: object
  ) {
    if (isPlatformBrowser(this.plateformId)) {
      this.config = {
        // fullpage options
        licenseKey: 'YOUR LICENSE KEY HERE',
        anchors: this.navList,
        menu: '#menu',

        // fullpage callbacks
        afterResize: () => {
          console.log('After resize');
        },
        afterLoad: (origin, destination, direction) => {
          this.headerBackground = destination.index !== 0;
          this.headerNav = destination.anchor;
        }
      };
    }
  }

  get isBrowser(): boolean {
    return isPlatformBrowser(this.plateformId);
  }

  @ViewChild('ACTIVE_NAV') activeNavRef: ElementRef;
  @ViewChild('TEAM_LIST') teamListRef: ElementRef;
  @ViewChild('solutionIntroNav') set pane(elementView) {
    if (isPlatformBrowser(this.plateformId)) {
      this.solutionItem = [];
      for (const item of this.solutionInfo) {
        const width = elementView?.nativeElement.querySelector(`.${item.nav}`).offsetWidth;
        if (width) {
          this.solutionItem.push({
            ...item,
            width
          });
        }
      }
      if (elementView?.nativeElement.offsetWidth) {
        this.solutionWrapper = elementView.nativeElement.offsetWidth;
      }
    }
  }

  switchLang(): void {
    if (this.translate.activeLang === 'en') {
      this.translate.activeLang = 'zh';
    } else {
      this.translate.activeLang = 'en';
    }
    // this.currentLang = lang;
    this.store.set(LANG, this.translate.activeLang);
    this.common.biteLanguage.next();
    // window.location.reload();
    // this.ngOnInit();
    this.common.langPublish();
  }

  get activeNavLeft(): string {
    if (this.mobile) {
      return (this.teamActiveIndex * 98) + 'px';
    } else {
      return (this.teamActiveIndex * 9.38) + 'em';
    }
  }

  get teamListLeft(): string {
    if (isPlatformBrowser(this.plateformId)){
      if (this.mobile) {
        return - (Number(this.teamActiveIndex) * Number(document.body.offsetWidth)) + 'px';
      } else {
        return - (Number(this.teamActiveIndex || 0) * Number(this.teamListWidth || 0)) + 'px';
      }
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.plateformId)) {
          this.mobile = document.body.offsetWidth <= 768;
          window.onresize = () => {
              // 只要窗口高度发生变化，就会进入这里面，在这里就可以写，回到聊天最底部的逻辑
              this.ngAfterViewInit();
              this.mobile = document.body.offsetWidth <= 768;
          };
      }
  }

  ngAfterViewInit(): void {
    this.teamListWidth = this.teamListRef.nativeElement.offsetWidth / this.teamList.length;
  }

  getRef(fullPageRef): void {
    if (!this.mobile) {
      this.fullpageApi = fullPageRef;
    }
  }

  handleMoveTeam(index): void {
    this.teamActiveIndex = index;
  }

  onOpen(value): void {
    if (isPlatformBrowser(this.plateformId)) {
      window.open(value);
    }
  }

  // 根据页面滚动查看滚动的距离
  onScroll(value): void {
    if (isPlatformBrowser(this.plateformId)) {
      let num = 0;
      if (value.path && value.path.length > 0) {
        // 谷歌使用这个
        num = value.path[0].scrollTop;
      } else if (value.srcElement.scrollTop) {
        // safari 使用这个
        num = value.srcElement.scrollTop;
      }
      if (num >= this.contactUsView.nativeElement.offsetTop - 60) {
        this.headerNav = 'contact-us';
      } else if (num >= this.teamView.nativeElement.offsetTop - 60) {
        this.headerNav = 'team';
      } else if (num >= this.aboutUsView.nativeElement.offsetTop - 60) {
        this.headerNav = 'about-us';
      } else if (num >= this.insightView.nativeElement.offsetTop - 60) {
        this.headerNav = 'insight';
      } else if (num >= this.solutionView.nativeElement.offsetTop - 60) {
        this.headerNav = 'solution';
      } else if (num >= this.homeView.nativeElement.offsetTop - 60) {
        this.headerNav = 'home';
      }
      if (num >= document.body.offsetHeight - 69) {
        this.scrollHome = false;
        this.headerBackground = true;
      } else {
        this.headerBackground = false;
      }
      if (num >= (document.body.offsetHeight - 100) && num <= (document.body.offsetHeight * 2)) {
        if (value.path[0].scrollLeft > 0) {
          for (const i in this.solutionInfo) {
            if (this.solutionInfoSelect === this.solutionInfo[i].nav) {
              if (Number(i) === (this.solutionInfo.length - 1)) {
                this.solutionInfoSelect = this.solutionInfo[0].nav;
              } else {
                this.solutionInfoSelect = this.solutionInfo[Number(i) + 1].nav;
              }
            }
          }
        }
      }
    }
  }

  onSolutionInfoSelect(value): void {
    // 看看数据有多宽
    let num = 0;
    // 看看是往那边滑动
    let before = 0;
    let after = 0;
    let slidingWidth = 0;
    let widthRight = 0;
    let widthLeft = 0;
    this.solutionItem.map((item, index) => {
      num = num + item.width;
      if (value === item.nav) {
        after = index;
        widthRight = num - item.width;
        this.solutionIndex = index;
      }
      if (this.solutionInfoSelect === item.nav) {
        before = index;
        widthLeft = num;
      }
    });
    if (before > after) {
      slidingWidth = widthRight;
    } else {
      slidingWidth = widthLeft;
    }
    if (this.solutionWrapper < num) {
      if ((num - this.solutionWrapper) > slidingWidth) {
        this.solutionSliding = slidingWidth;
      } else {
        this.solutionSliding = num - this.solutionWrapper;
      }
    }
    this.solutionInfoSelect = value;
  }

  onSwipeLeft(value): void {
    let nav: string;
    let num = 0;
    let slidingWidth = 0;
    this.solutionItem.map((item, i) => {
      num = num + item.width;
      if (item.nav === this.solutionInfoSelect) {
        if ((i + 1) === this.solutionItem.length) {
          nav = this.solutionItem[0].nav;
          this.solutionIndex = 0;
          slidingWidth = 0;
        } else {
          nav = this.solutionItem[i + 1].nav;
          slidingWidth = num;
          this.solutionIndex = i + 1;
        }
      }
    });
    if (this.solutionWrapper < num) {
      if ((num - this.solutionWrapper) > slidingWidth) {
        this.solutionSliding = slidingWidth;
      } else {
        this.solutionSliding = num - this.solutionWrapper;
      }
    }
    this.solutionInfoSelect = nav;
  }
  onSwipeRight(value): void {
    let nav: string;
    let num = 0;
    let slidingWidth = 0;
    this.solutionItem.map((item, i) => {
      num = num + item.width;
      if (item.nav === this.solutionInfoSelect) {
        if (i === 0) {
          nav = this.solutionItem[this.solutionItem.length - 1].nav;
          this.solutionIndex = this.solutionItem.length - 1;
        } else {
          nav = this.solutionItem[i - 1].nav;
          this.solutionIndex = i - 1;
          slidingWidth = num - item.width - this.solutionItem[i - 1].width;
        }
      }
    });
    if (nav === this.solutionItem[this.solutionItem.length - 1].nav) {
      slidingWidth = num - this.solutionItem[this.solutionItem.length - 1].width;
    }
    if (this.solutionWrapper < num) {
      if ((num - this.solutionWrapper) > slidingWidth) {
        this.solutionSliding = slidingWidth;
      } else {
        this.solutionSliding = num - this.solutionWrapper;
      }
    }
    this.solutionInfoSelect = nav;
  }

  onTeamSwipeLeft(index): void {
    if (index === this.teamList.length - 1) {
      this.teamActiveIndex = 0;
    } else {
      this.teamActiveIndex = index + 1;
    }
  }

  onTeamSwipeRight(index): void{
    if (index === 0) {
      this.teamActiveIndex = this.teamList.length - 1;
    } else {
      this.teamActiveIndex = index - 1;
    }
    this.teamRightTime = true;
  }

  onscrollIntoView(label: string): void {
    setTimeout( () => {
      let value: string;
      if (label === 'home') {
        value = 'homeView';
      } else if (label === 'solution') {
        value = 'solutionView';
      } else if (label === 'about-us') {
        value = 'aboutUsView';
      } else if (label === 'team') {
        value = 'teamView';
      } else if (label === 'contact-us') {
        value = 'contactUsView';
      } else if (label === 'insight') {
        value = 'insightView';
      }
      this[value].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      this.drawerOpened = false;
    }, 500);
  }

  onNumberPadding(): string {
    return 'margin-left:' + this.solutionIndex * -100 + 'vw';
  }
}
