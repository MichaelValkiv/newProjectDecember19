import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'accept, content-type'
    })
  };

  constructor( private http: HttpClient ) { }

  public getCompanyInfo(): Observable<Company[]> {
    return this.http.get<Company[]>('http://localhost/komfort_dim_backend/company_get.php', this.httpOptions);
  }
}
