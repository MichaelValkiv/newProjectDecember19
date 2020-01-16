import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Services } from '../models/services.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http: HttpClient ) { }

  public getServiceInfo(): Observable<Services[]> {
    return this.http.get<Services[]>('https://komfortdimphp.herokuapp.com/service_get.php');
  }

  public postServiceInfo(newInfo: Services): Observable<Services> {
    return this.http.post<Services>('https://komfortdimphp.herokuapp.com/service_post.php', newInfo);
  }

  public putServiceInfo(editedInfo: Services): Observable<Services> {
    return this.http.put<Services>('https://komfortdimphp.herokuapp.com/service_put.php', editedInfo);
  }

  public deleteServiceInfo(deletedInfo: Services): Observable<Services> {
    return this.http.get<Services>(`https://komfortdimphp.herokuapp.com/service_delete.php/?id=${deletedInfo.id}`);
  }
}
