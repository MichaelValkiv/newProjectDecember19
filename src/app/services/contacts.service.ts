import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacts } from '../models/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor( private http: HttpClient ) { }

  public getContactInfo(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>('/komfort_dim_backend/contact_get.php', this.httpOptions);
  }

  public postContactInfo(newInfo: Contacts): Observable<Contacts> {
    return this.http.post<Contacts>('/komfort_dim_backend/contact_post.php', newInfo, this.httpOptions);
  }

  public putContactInfo(editedInfo: Contacts): Observable<Contacts> {
    return this.http.put<Contacts>('/komfort_dim_backend/contact_put.php', editedInfo, this.httpOptions);
  }

  public deleteContactInfo(deletedInfo: Contacts): Observable<Contacts> {
    return this.http.get<Contacts>(`/komfort_dim_backend/contact_delete.php/?id=${deletedInfo.id}`, this.httpOptions);
  }
}
