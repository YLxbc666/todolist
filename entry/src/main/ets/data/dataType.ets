export class CategoriesImage {
  public url: string;
  public color: string;

  constructor(color: string, url: string) {
    this.color = color
    this.url = url
  }
}

export class ColorList {
  public color: string;

  constructor(color: string) {
    this.color = color
  }
}

export class DateDict {
  public date: string;
  public week: string;

  constructor(date: string, week: string) {
    this.date = date
    this.week = week
  }
}