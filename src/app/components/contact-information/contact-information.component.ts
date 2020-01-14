import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { Meta } from '@angular/platform-browser';
import { faMapMarkerAlt, faCreditCard, faPhone, faMobileAlt, faEnvelope, faCalendarAlt, faMugHot, faWindowClose, faTint, faBolt, faIdCard, faAddressBook, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { ContactsService } from '../../services/contacts.service';
import { Contacts } from '../../models/contacts.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit, OnDestroy {

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
  faAddressBook = faAddressBook;
  faPhoneVolume = faPhoneVolume;

  allContacts: Contacts[];

  contactsGetSubscription: Subscription;

  constructor( private pageTitle: PageTitleService,
               private metaService: Meta,
               private contactsService: ContactsService ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Комфорт-Дім - Контактна Інформація');
    this.metaService.addTags([
      {
        name: 'keywords',
        content: 'Комфорт-Дім, Контактні Дані, Управляюча компанія, Калуш, Комфорт, Дім, Управляюча, Компанія, Комфорт-Дім Калуш, Комфорт-Дім Контактні Дані'
      },
      {name: 'author', content: 'MVYV'},
      {name: 'description', content: 'Комфорт-Дім - Запитання'}
    ]);
    this.getAllContacts();
  }

  ngOnDestroy() {
    if (this.contactsGetSubscription) { this.contactsGetSubscription.unsubscribe(); }
  }

  getAllContacts() {
    this.contactsGetSubscription = this.contactsService.getContactInfo().subscribe(
      data => {
        this.allContacts = data;
      }, () => {

      });
  }

}
