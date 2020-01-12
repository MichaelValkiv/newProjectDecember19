import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notifications } from '../models/notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor( private http: HttpClient ) { }

  public getNotificationInfo(): Observable<Notifications[]> {
    return this.http.get<Notifications[]>('/komfort_dim_backend/notification_get.php', this.httpOptions);
  }

  public postNotificationInfo(newInfo: Notifications): Observable<Notifications> {
    return this.http.post<Notifications>('/komfort_dim_backend/notification_post.php', newInfo, this.httpOptions);
  }

  public putNotificationInfo(editedInfo: Notifications): Observable<Notifications> {
    return this.http.put<Notifications>('/komfort_dim_backend/notification_put.php', editedInfo, this.httpOptions);
  }

  public deleteNotificationInfo(deletedInfo: Notifications): Observable<Notifications> {
    return this.http.get<Notifications>(`/komfort_dim_backend/notification_delete.php/?id=${deletedInfo.id}`, this.httpOptions);
  }

}
