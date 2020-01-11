import {Component, OnInit} from '@angular/core';
import {PageTitleService} from '../../services/page-title.service';
import {CompanyService} from '../../services/company.service';
import {ContactsService} from '../../services/contacts.service';
import {ServicesService} from '../../services/services.service';
import {Company} from '../../models/company.model';
import {SortOptions} from '../../models/sort_options.model';
import {
  faPencilAlt,
  faTrashAlt,
  faPlusSquare,
  faDatabase,
  faExclamationTriangle,
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import {Contacts} from '../../models/contacts.model';
import {Services} from '../../models/services.model';
import {MessageService} from 'primeng/api';

interface ContactTypes {
  name: string;
  value: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;
  faDatabase = faDatabase;
  faExclamationTriangle = faExclamationTriangle;
  faCheck = faCheck;
  faTimes = faTimes;

  company: Company[];
  contact: Contacts[];
  _service: Services[];

  companySortOptions: SortOptions[];
  contactSortOptions: SortOptions[];
  serviceSortOptions: SortOptions[];

  sortKey: string;
  sortField: string;
  sortOrder: number;

  displayCompanyForm: boolean = false;
  displayContactForm: boolean = false;
  displayServiceForm: boolean = false;
  displayDeleteDialog: boolean = false;

  newOrEditedCompanyInfo: Company;
  newOrEditedContactInfo: Contacts;
  newOrEditedServiceInfo: Services;

  isNewCompanyInfo: boolean;
  isNewContactInfo: boolean;
  isNewServiceInfo: boolean;

  isLoadingCompanyInfo: boolean;
  isLoadingContactInfo: boolean;
  isLoadingServiceInfo: boolean;

  databaseKey: string;
  contactTypes: ContactTypes[];
  selectedContact: any;

  constructor(private pageTitle: PageTitleService,
              private companyService: CompanyService,
              private contactsService: ContactsService,
              private servicesService: ServicesService,
              private messageService: MessageService) {
    this.contactTypes = [
      {name: 'Контактна Інформація Компанії', value: 'company_contact'},
      {name: 'Графік Роботи Компанії', value: 'company_schedule'},
      {name: 'Телефони Диспетчерських Служб', value: 'company_phones'}
    ];
  }

  ngOnInit() {
    this.pageTitle.setTitle('Комфорт-Дім - Адміністрування');
    this.companyInfoGet();
    this.contactInfoGet();
    this.serviceInfoGet();

    this.companySortOptions = [
      {label: 'Найбільше значення', value: '!characteristic_value'},
      {label: 'Найменше Значення', value: 'characteristic_value'},
      {label: 'Назва', value: 'characteristic'}
    ];

    this.contactSortOptions = [
      {label: 'Назва', value: 'contact'}
    ];

    this.serviceSortOptions = [
      {label: 'Назва', value: 'service_name'}
    ];

    this.newOrEditedCompanyInfo = new Company();
    this.newOrEditedContactInfo = new Contacts();
    this.newOrEditedServiceInfo = new Services();
  }

  showCompanyForm() {
    this.displayCompanyForm = true;
  }

  showContactForm() {
    this.displayContactForm = true;
  }

  showServiceForm() {
    this.displayServiceForm = true;
  }

  showDeleteDialog(db_key: string) {
    this.displayDeleteDialog = true;
    this.databaseKey = db_key;
  }

  hideDeleteDialog() {
    this.displayDeleteDialog = false;
  }

  companyInfoGet() {
    this.companyService.getCompanyInfo().subscribe(
      data => {
        this.company = data;
        this.isLoadingCompanyInfo = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Успішно Завантажено Характеристики Компанії.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
      }, () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Сталася Помилка. Сервер Не Відповідає.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
      });
  }

  contactInfoGet() {
    this.contactsService.getContactInfo().subscribe(
      data => {
        this.contact = data;
        this.isLoadingContactInfo = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Успішно Завантажено Контактні Дані Компанії.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
      }, () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Сталася Помилка. Сервер Не Відповідає.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
      });
  }

  serviceInfoGet() {
    this.servicesService.getServiceInfo().subscribe(
      data => {
        this._service = data;
        this.isNewServiceInfo = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Успішно Завантажено Послуги, Які Надає Компанія.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
      }, () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Сталася Помилка. Сервер Не Відповідає.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
      });
  }

  addNewCompanyInfo() {
    this.newOrEditedCompanyInfo = new Company();
    this.displayCompanyForm = true;
    this.isNewCompanyInfo = true;
  }

  addNewContactInfo() {
    this.newOrEditedContactInfo = new Contacts();
    this.displayContactForm = true;
    this.isNewContactInfo = true;
  }

  addNewServiceInfo() {
    this.newOrEditedServiceInfo = new Services();
    this.displayServiceForm = true;
    this.isNewServiceInfo = true;
  }

  editCompanyInfo(companyInfo: Company) {
    this.isNewCompanyInfo = false;
    this.newOrEditedCompanyInfo = new Company(
      companyInfo.id,
      companyInfo.characteristic,
      companyInfo.characteristic_value
    );
  }

  editContactInfo(contactInfo: Contacts) {
    this.isNewContactInfo = false;
    this.newOrEditedContactInfo = new Contacts(
      contactInfo.id,
      contactInfo.contact
    );
  }

  editServiceInfo(serviceInfo: Services) {
    this.isNewServiceInfo = false;
    this.newOrEditedServiceInfo = new Services(
      serviceInfo.id,
      serviceInfo.service_name
    );
  }

  addOrModifyCompanyInfo() {
    if (this.isNewCompanyInfo) {
      this.newOrEditedCompanyInfo.id = null;
      this.companyService.postCompanyInfo(this.newOrEditedCompanyInfo).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Зміни Успішно Збережено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.companyInfoGet();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Сталася Помилка. Зміни не внесено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.companyInfoGet();
        });
    } else {
      this.companyService.putCompanyInfo(this.newOrEditedCompanyInfo).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Зміни Успішно Збережено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.companyInfoGet();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Сталася Помилка. Зміни не внесено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.companyInfoGet();
        });
    }
  }

  addOrModifyContactInfo() {
    if (this.isNewContactInfo) {
      this.newOrEditedContactInfo.id = null;
      this.newOrEditedContactInfo.contact_type = this.selectedContact.name;
      this.contactsService.postContactInfo(this.newOrEditedContactInfo).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Зміни Успішно Збережено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.contactInfoGet();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Сталася Помилка. Зміни не внесено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.contactInfoGet();
        });
    } else {
      this.newOrEditedContactInfo.contact_type = this.selectedContact.name;
      this.contactsService.putContactInfo(this.newOrEditedContactInfo).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Зміни Успішно Збережено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.contactInfoGet();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Сталася Помилка. Зміни не внесено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.contactInfoGet();
        });
    }
  }

  addOrModifyServiceInfo() {
    if (this.isNewServiceInfo) {
      this.newOrEditedServiceInfo.id = null;
      this.servicesService.postServiceInfo(this.newOrEditedServiceInfo).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Зміни Успішно Збережено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.serviceInfoGet();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Сталася Помилка. Зміни не внесено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.serviceInfoGet();
        });
    } else {
      this.servicesService.putServiceInfo(this.newOrEditedServiceInfo).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Зміни Успішно Збережено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.serviceInfoGet();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Сталася Помилка. Зміни не внесено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.serviceInfoGet();
        });
    }
  }

  deleteCompanyInfo() {
    this.companyService.deleteCompanyInfo(this.newOrEditedCompanyInfo).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Успішно Видалено.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
        this.companyInfoGet();
      }, () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Сталася Помилка. Видалення Не Відбулося.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
        this.companyInfoGet();
      });
  }

  deleteContactInfo() {
    this.contactsService.deleteContactInfo(this.newOrEditedContactInfo).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Успішно Видалено.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
        this.contactInfoGet();
      }, () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Сталася Помилка. Видалення Не Відбулося.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
        this.contactInfoGet();
      });
  }

  deleteServiceInfo() {
    this.servicesService.deleteServiceInfo(this.newOrEditedServiceInfo).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Успішно Видалено.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
        this.serviceInfoGet();
      }, () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Сталася Помилка. Видалення Не Відбулося.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
        this.serviceInfoGet();
      });
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  clear() {
    this.messageService.clear();
  }

}
