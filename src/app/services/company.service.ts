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
    return this.http.get<Company[]>('https://komfortdimphp.herokuapp.com/company_get.php');
  }

  public postCompanyInfo(newInfo: Company): Observable<Company> {
    return this.http.post<Company>('https://komfortdimphp.herokuapp.com/company_post.php', newInfo);
  }

  public putCompanyInfo(editedInfo: Company): Observable<Company> {
    return this.http.put<Company>('https://komfortdimphp.herokuapp.com/company_put.php', editedInfo);
  }

  public deleteCompanyInfo(deletedInfo: Company): Observable<Company> {
    return this.http.get<Company>(`https://komfortdimphp.herokuapp.com/company_delete.php/?id=${deletedInfo.id}`);
  }
}
