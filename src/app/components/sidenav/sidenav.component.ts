import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faInfoCircle, faFileSignature } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  faInfoCircle = faInfoCircle;
  faFileSignature = faFileSignature;

  @Output() public sideNavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSideNavClose = () => {
    this.sideNavClose.emit();
  }

}
