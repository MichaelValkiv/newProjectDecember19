import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faFileSignature, faMapMarkerAlt, faExternalLinkAlt, faCogs, faQuestionCircle, faBell, faWrench, faTools } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faInfoCircle = faInfoCircle;
  faFileSignature = faFileSignature;
  faMapMarkerAlt = faMapMarkerAlt;
  faGithub = faGithub;
  faGithubSquare = faGithubSquare;
  faExternalLinkAlt = faExternalLinkAlt;
  faCogs = faCogs;
  faQuestionCircle = faQuestionCircle;
  faBell = faBell;
  faWrench = faWrench;
  faTools = faTools;

  constructor() { }

  ngOnInit() {
  }

}
