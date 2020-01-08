import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor( private http: HttpClient ) { }

  public getCompanyInfo(): Observable<Company[]> {
    return this.http.get<Company[]>('http://localhost/komfort_dim_backend/company_get.php');
  }
}
