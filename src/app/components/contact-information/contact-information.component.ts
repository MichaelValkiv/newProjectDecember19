import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { faMapMarkerAlt, faCreditCard, faPhone, faMobileAlt, faEnvelope, faCalendarAlt, faMugHot, faWindowClose, faTint, faBolt, faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faCreditCard = faCreditCard;
  faPhone = faPhone;
  faMobileAlt = faMobileAlt;
  faEnvelope = faEnvelope;
  faCalendarAlt = faCalendarAlt;
  faMugHot = faMugHot;
  faWindowClose = faWindowClose;
  faTint = faTint;
  faBolt = faBolt;
  faIdCard = faIdCard;

  constructor( private pageTitle: PageTitleService ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Комфорт-Дім - Контактна Інформація');
  }

}
