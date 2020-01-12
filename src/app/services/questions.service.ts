import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from '../models/questions.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor( private http: HttpClient ) { }

  public getQuestionInfo(): Observable<Questions[]> {
    return this.http.get<Questions[]>('/komfort_dim_backend/question_get.php', this.httpOptions);
  }

  public postQuestionInfo(newInfo: Questions): Observable<Questions> {
    return this.http.post<Questions>('/komfort_dim_backend/question_post.php', newInfo, this.httpOptions);
  }

  public putQuestionInfo(editedInfo: Questions): Observable<Questions> {
    return this.http.put<Questions>('/komfort_dim_backend/question_put.php', editedInfo, this.httpOptions);
  }

  public deleteQuestionInfo(deletedInfo: Questions): Observable<Questions> {
    return this.http.get<Questions>(`/komfort_dim_backend/question_delete.php/?id=${deletedInfo.id}`, this.httpOptions);
  }

}
