import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from '../models/questions.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor( private http: HttpClient ) { }

  public getQuestionInfo(): Observable<Questions[]> {
    return this.http.get<Questions[]>('/question_get.php');
  }

  public postQuestionInfo(newInfo: Questions): Observable<Questions> {
    return this.http.post<Questions>('/question_post.php', newInfo);
  }

  public putQuestionInfo(editedInfo: Questions): Observable<Questions> {
    return this.http.put<Questions>('/question_put.php', editedInfo);
  }

  public deleteQuestionInfo(deletedInfo: Questions): Observable<Questions> {
    return this.http.get<Questions>(`/question_delete.php/?id=${deletedInfo.id}`);
  }

}
