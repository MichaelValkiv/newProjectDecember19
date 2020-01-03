import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { faBroom, faHouseDamage, faWind, faHammer, faLightbulb, faToolbox, faTools, faBath, faTemperatureHigh, faBolt, faWater, faTint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  faBroom = faBroom;
  faHouseDamage = faHouseDamage;
  faWind = faWind;
  faHammer = faHammer;
  faLightbulb = faLightbulb;
  faToolbox = faToolbox;
  faTools = faTools;
  faBath = faBath;
  faTemperatureHigh = faTemperatureHigh;
  faBolt = faBolt;
  faWater = faWater;
  faTint = faTint;

  constructor( private pageTitle: PageTitleService ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Комфорт-Дім - Наші Послуги');
  }

}
