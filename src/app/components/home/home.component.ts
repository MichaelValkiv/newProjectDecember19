import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { Meta } from '@angular/platform-browser';
import { faHome, faLongArrowAltUp, faLongArrowAltDown, faBuilding, faCity, faWarehouse, faCalculator, faMarker } from '@fortawesome/free-solid-svg-icons';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  faHome = faHome;
  faLongArrowAltUp = faLongArrowAltUp;
  faLongArrowAltDown = faLongArrowAltDown;
  faBuilding = faBuilding;
  faCity = faCity;
  faWarehouse = faWarehouse;
  faCalculator = faCalculator;
  faMarker = faMarker;

  companyCharacteristics: Company[];

  companyGetSubscription: Subscription;

  constructor( private pageTitle: PageTitleService,
               private metaService: Meta,
               private companyService: CompanyService ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Комфорт-Дім - Опис Компанії');
    this.metaService.addTags([
      {
        name: 'keywords',
        content: 'Комфорт-Дім, Характеристика, Управляюча компанія, Калуш, Комфорт, Дім, Управляюча, Компанія, Комфорт-Дім Калуш, Комфорт-Дім Характеристика'
      },
      {name: 'author', content: 'MVYV'},
      {name: 'description', content: 'Комфорт-Дім - Запитання'}
    ]);
    this.getCompanyCharacteristics();
  }

  ngOnDestroy() {
    if (this.companyGetSubscription) { this.companyGetSubscription.unsubscribe(); }
  }

  getCompanyCharacteristics() {
    this.companyGetSubscription = this.companyService.getCompanyInfo().subscribe(
      data => {
        this.companyCharacteristics = data;
      }, () => {

      });
  }
}
