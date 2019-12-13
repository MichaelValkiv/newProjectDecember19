import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { faHome, faLongArrowAltUp, faLongArrowAltDown, faBuilding, faCity, faWarehouse, faCalculator } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  faHome = faHome;
  faLongArrowAltUp = faLongArrowAltUp;
  faLongArrowAltDown = faLongArrowAltDown;
  faBuilding = faBuilding;
  faCity = faCity;
  faWarehouse = faWarehouse;
  faCalculator = faCalculator;

  constructor( private pageTitle: PageTitleService ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Комфорт-Дім - Опис Компанії');
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
