import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { faExclamationTriangle, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  faExclamationTriangle = faExclamationTriangle;
  faQuestionCircle = faQuestionCircle;
  faUser = faUser;

  constructor( private pageTitle: PageTitleService ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Комфорт-Дім - Запитання');
  }

}
