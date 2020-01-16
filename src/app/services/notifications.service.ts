import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notifications } from '../models/notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor( private http: HttpClient ) { }

  public getNotificationInfo(): Observable<Notifications[]> {
    return this.http.get<Notifications[]>('https://komfortdimphp.herokuapp.com/notification_get.php');
  }

  public postNotificationInfo(newInfo: Notifications): Observable<Notifications> {
    return this.http.post<Notifications>('https://komfortdimphp.herokuapp.com/notification_post.php', newInfo);
  }

  public putNotificationInfo(editedInfo: Notifications): Observable<Notifications> {
    return this.http.put<Notifications>('https://komfortdimphp.herokuapp.com/notification_put.php', editedInfo);
  }

  public deleteNotificationInfo(deletedInfo: Notifications): Observable<Notifications> {
    return this.http.get<Notifications>(`https://komfortdimphp.herokuapp.com/notification_delete.php/?id=${deletedInfo.id}`);
  }

}
