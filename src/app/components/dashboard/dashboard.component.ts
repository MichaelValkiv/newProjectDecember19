import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  company: Company[];

  constructor( private pageTitle: PageTitleService,
               private companyService: CompanyService ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Комфорт-Дім - Адміністрування');
    this.companyInfoGet();
  }

  companyInfoGet() {
    this.companyService.getCompanyInfo().subscribe(
      data => {
        this.company = data;
      }, () => {

      });
  }

}
