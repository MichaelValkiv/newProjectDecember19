import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  constructor( private pageTitleService: Title ) { }

  public setTitle( newTitle: string) {
    this.pageTitleService.setTitle( newTitle );
  }
}
