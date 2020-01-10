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
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor( private http: HttpClient ) { }

  public getCompanyInfo(): Observable<Company[]> {
    return this.http.get<Company[]>('/komfort_dim_backend/company_get.php', this.httpOptions);
  }

  public postCompanyInfo(newInfo: Company): Observable<Company> {
    return this.http.post<Company>('/komfort_dim_backend/company_post.php', newInfo, this.httpOptions);
  }

  public putCompanyInfo(editedInfo: Company): Observable<Company> {
    return this.http.put<Company>('/komfort_dim_backend/company_put.php', editedInfo, this.httpOptions);
  }

  public deleteCompanyInfo(deletedInfo: Company): Observable<Company> {
    return this.http.get<Company>(`/komfort_dim_backend/company_delete.php/?id=${deletedInfo.id}`, this.httpOptions);
  }
}
