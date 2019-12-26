import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faInfoCircle, faFileSignature, faSignInAlt, faSignOutAlt, faCogs, faQuestionCircle, faBell, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  faInfoCircle = faInfoCircle;
  faFileSignature = faFileSignature;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faCogs = faCogs;
  faQuestionCircle = faQuestionCircle;
  faBell = faBell;
  faUsers = faUsers;

  @Output() public sideNavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSideNavClose = () => {
    this.sideNavClose.emit();
  }

}
