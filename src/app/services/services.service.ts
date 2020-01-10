import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Services } from '../models/services.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor( private http: HttpClient ) { }

  public getServiceInfo(): Observable<Services[]> {
    return this.http.get<Services[]>('/komfort_dim_backend/service_get.php', this.httpOptions);
  }

  public postServiceInfo(newInfo: Services): Observable<Services> {
    return this.http.post<Services>('/komfort_dim_backend/service_post.php', newInfo, this.httpOptions);
  }

  public putServiceInfo(editedInfo: Services): Observable<Services> {
    return this.http.put<Services>('/komfort_dim_backend/service_put.php', editedInfo, this.httpOptions);
  }

  public deleteServiceInfo(deletedInfo: Services): Observable<Services> {
    return this.http.get<Services>(`/komfort_dim_backend/service_delete.php/?id=${deletedInfo.id}`, this.httpOptions);
  }
}
