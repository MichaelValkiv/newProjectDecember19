import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faInfoCircle, faFileSignature, faBars, faSignInAlt, faSignOutAlt, faCogs, faQuestionCircle, faBell, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faInfoCircle = faInfoCircle;
  faFileSignature = faFileSignature;
  faBars = faBars;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faCogs = faCogs;
  faQuestionCircle = faQuestionCircle;
  faBell = faBell;
  faUsers = faUsers;

  @Output() public sideNavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onToggleSideNav = () => {
    this.sideNavToggle.emit();
  }

}
