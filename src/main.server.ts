import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

import 'localstorage-polyfill';

const MockBrowser = require('mock-browser').mocks.MockBrowser;
const mock = new MockBrowser();

global['navigator'] = mock.getNavigator();
global['document'] = mock.getDocument();
global['window'] = mock.getWindow();
global['location'] = mock.getLocation();

// 解决 SSR 中的 localstorage 在服务端 node 环境中的运行问题
global['localStorage'] = localStorage;


export { AppServerModule } from './app/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
