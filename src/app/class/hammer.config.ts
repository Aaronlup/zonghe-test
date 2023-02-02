import { Injectable } from '@angular/core';
import * as hammer from '@squadette/hammerjs';

import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable({ providedIn: 'root'})
export class HammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: hammer.DIRECTION_ALL },
    pinch: { enable: false },
    rotate: { enable: false }
  } as any;
}
