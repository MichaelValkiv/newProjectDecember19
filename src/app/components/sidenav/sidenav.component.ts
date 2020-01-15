import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faInfoCircle, faFileSignature, faSignInAlt, faSignOutAlt, faCogs, faQuestionCircle, faBell, faUsers, faTools, faWrench, faCog } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../../services/authentication.service';

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
  faTools = faTools;
  faWrench = faWrench;
  faCog = faCog;

  @Output() public sideNavClose = new EventEmitter();

  constructor( public authenticationService: AuthenticationService ) { }

  ngOnInit() {
  }

  public onSideNavClose = () => {
    this.sideNavClose.emit();
  }

}
