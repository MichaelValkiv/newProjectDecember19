import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faInfoCircle, faFileSignature, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faInfoCircle = faInfoCircle;
  faFileSignature = faFileSignature;
  faBars = faBars;

  @Output() public sideNavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onToggleSideNav = () => {
    this.sideNavToggle.emit();
  }

}
