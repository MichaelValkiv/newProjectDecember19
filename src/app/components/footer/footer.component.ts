import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faFileSignature, faMapMarkerAlt, faExternalLinkAlt, faQuestionCircle, faBell, faTools, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
  faExternalLinkAlt = faExternalLinkAlt;
  faQuestionCircle = faQuestionCircle;
  faBell = faBell;
  faTools = faTools;
  faEnvelopeSquare = faEnvelopeSquare;

  constructor() { }

  ngOnInit() {
  }

}
