import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { CompanyService } from '../../services/company.service';
import { ContactsService } from '../../services/contacts.service';
import { ServicesService } from '../../services/services.service';
import { Company } from '../../models/company.model';
import { SortOptions } from '../../models/sort_options.model';
import { faPencilAlt, faTrashAlt, faPlusSquare, faDatabase, faExclamationTriangle, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Contacts } from '../../models/contacts.model';
import { Services } from '../../models/services.model';

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

  databaseKey: string;

  constructor( private pageTitle: PageTitleService,
               private companyService: CompanyService,
               private contactsService: ContactsService,
               private servicesService: ServicesService ) { }

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
      }, () => {

      });
  }

  contactInfoGet() {
    this.contactsService.getContactInfo().subscribe(
      data => {
        this.contact = data;
      }, () => {

      });
  }

  serviceInfoGet() {
    this.servicesService.getServiceInfo().subscribe(
      data => {
        this._service = data;
      }, () => {

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
          console.log('YES');
          this.companyInfoGet();
        }, () => {
          console.log('NO');
          this.companyInfoGet();
        });
    } else {
      this.companyService.putCompanyInfo(this.newOrEditedCompanyInfo).subscribe(
        () => {
          console.log('YES');
          this.companyInfoGet();
        }, () => {
          console.log('NO');
          this.companyInfoGet();
        });
    }
  }

  addOrModifyContactInfo() {
    if (this.isNewContactInfo) {
      this.newOrEditedContactInfo.id = null;
      this.contactsService.postContactInfo(this.newOrEditedContactInfo).subscribe(
        () => {
          console.log('YES');
          this.contactInfoGet();
        }, () => {
          console.log('NO');
          this.contactInfoGet();
        });
    } else {
      this.contactsService.putContactInfo(this.newOrEditedContactInfo).subscribe(
        () => {
          console.log('YES');
          this.contactInfoGet();
        }, () => {
          console.log('NO');
          this.contactInfoGet();
        });
    }
  }

  addOrModifyServiceInfo() {
    if (this.isNewServiceInfo) {
      this.newOrEditedServiceInfo.id = null;
      this.servicesService.postServiceInfo(this.newOrEditedServiceInfo).subscribe(
        () => {
          console.log('YES');
          this.serviceInfoGet();
        }, () => {
          console.log('NO');
          this.serviceInfoGet();
        });
    } else {
      this.servicesService.putServiceInfo(this.newOrEditedServiceInfo).subscribe(
        () => {
          console.log('YES');
          this.serviceInfoGet();
        }, () => {
          console.log('NO');
          this.serviceInfoGet();
        });
    }
  }

  deleteCompanyInfo() {
    this.companyService.deleteCompanyInfo(this.newOrEditedCompanyInfo).subscribe(
      () => {
        this.companyInfoGet();
      }, () => {
        this.companyInfoGet();
      });
  }

  deleteContactInfo() {
    this.contactsService.deleteContactInfo(this.newOrEditedContactInfo).subscribe(
      () => {
        this.contactInfoGet();
      }, () => {
        this.contactInfoGet();
      });
  }

  deleteServiceInfo() {
    this.servicesService.deleteServiceInfo(this.newOrEditedServiceInfo).subscribe(
      () => {
        this.serviceInfoGet();
      }, () => {
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

}
