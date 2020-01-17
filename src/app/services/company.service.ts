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
    return this.http.get<Company[]>('/company_get.php');
  }

  public postCompanyInfo(newInfo: Company): Observable<Company> {
    return this.http.post<Company>('/company_post.php', newInfo);
  }

  public putCompanyInfo(editedInfo: Company): Observable<Company> {
    return this.http.put<Company>('/company_put.php', editedInfo);
  }

  public deleteCompanyInfo(deletedInfo: Company): Observable<Company> {
    return this.http.get<Company>(`/company_delete.php/?id=${deletedInfo.id}`);
  }
}
