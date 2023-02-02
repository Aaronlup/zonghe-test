/** 多语言枚举 */
export enum Locale {
  EN = 'en',
  ZH = 'zh',
}

/** 语言对象类型 */
export class Lang {
  name: string;
  locale: Locale;
  constructor(name: string, locale: Locale) {
    this.name = name;
    this.locale = locale;
  }
}
