import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faInfoCircle, faFileSignature, faBars, faSignInAlt, faSignOutAlt, faCogs, faQuestionCircle, faBell, faUsers, faCog, faWrench, faTools } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../../services/authentication.service';

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
  faCog = faCog;
  faWrench = faWrench;
  faTools = faTools;

  @Output() public sideNavToggle = new EventEmitter();

  constructor( public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public onToggleSideNav = () => {
    this.sideNavToggle.emit();
  }

}
