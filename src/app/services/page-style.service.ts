import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageStyleService {

  public selectedLink: any = 'home';

  constructor() { }

  public set setSelectedLink(value: any) {
    this.selectedLink = value;
  }

  public get getSelectedLink() {
    return this.selectedLink;
  }
}
