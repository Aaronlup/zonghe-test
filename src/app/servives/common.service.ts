import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  from: string;
  private langObserver = new Subject();
  public biteLanguage = new Subject();

  constructor(
  ) { }


  langPublish(): void {
    this.langObserver.next();
  }


}
