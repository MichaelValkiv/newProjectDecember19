import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacts } from '../models/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor( private http: HttpClient ) { }

  public getContactInfo(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>('/contact_get.php');
  }

  public postContactInfo(newInfo: Contacts): Observable<Contacts> {
    return this.http.post<Contacts>('/contact_post.php', newInfo);
  }

  public putContactInfo(editedInfo: Contacts): Observable<Contacts> {
    return this.http.put<Contacts>('/contact_put.php', editedInfo);
  }

  public deleteContactInfo(deletedInfo: Contacts): Observable<Contacts> {
    return this.http.get<Contacts>(`/contact_delete.php/?id=${deletedInfo.id}`);
  }
}
