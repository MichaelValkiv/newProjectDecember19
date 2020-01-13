import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import {
  faExclamationTriangle,
  faQuestionCircle,
  faUser,
  faQuestion,
  faCheck,
  faTimes,
  faPencilAlt, faTrashAlt, faCommentDots
} from '@fortawesome/free-solid-svg-icons';
import { Questions } from '../../models/questions.model';
import { QuestionsService } from '../../services/questions.service';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  faTimes = faTimes;
  faCheck = faCheck;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  faExclamationTriangle = faExclamationTriangle;
  faQuestionCircle = faQuestionCircle;
  faUser = faUser;
  faQuestion = faQuestion;
  faCommentDots = faCommentDots;

  displayForm: boolean = false;
  displayDeleteDialog: boolean = false;

  allQuestions: Questions[];
  newOrEditedQuestion: Questions;
  isNewQuestion: boolean;
  isLoadingQuestions: boolean;

  userFirstName: string = '';
  userLastName: string = '';

  constructor( private pageTitle: PageTitleService,
               private questionsService: QuestionsService,
               private messageService: MessageService,
               public authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.pageTitle.setTitle('Комфорт-Дім - Запитання');
    this.questionsGet();
    this.newOrEditedQuestion = new Questions();
  }

  showForm() {
    this.displayForm = true;
  }

  showDeleteDialog() {
    this.displayDeleteDialog = true;
  }

  hideDeleteDialog() {
    this.displayDeleteDialog = false;
  }

  questionsGet() {
    this.questionsService.getQuestionInfo().subscribe(
      data => {
        this.allQuestions = data;
        this.isLoadingQuestions = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Успішно Завантажено Список Запитань Клієнтів.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
      }, () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Сталася Помилка. Сервер Не Відповідає.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
      });
  }

  addNewQuestion() {
    this.newOrEditedQuestion = new Questions();
    this.displayForm = true;
    this.isNewQuestion = true;
  }

  editQuestion(questionInfo: Questions) {
    this.isNewQuestion = false;
    this.newOrEditedQuestion = new Questions(
      questionInfo.id,
      questionInfo.question_author,
      questionInfo.question,
      questionInfo.question_date,
      questionInfo.answer,
      questionInfo.answer_date
    );
  }

  addOrModifyQuestion() {
    if (this.isNewQuestion) {
      this.newOrEditedQuestion.id = null;
      this.newOrEditedQuestion.question_author = this.userFirstName + ' ' + this.userLastName;
      this.newOrEditedQuestion.question_date = null;
      this.newOrEditedQuestion.answer = 'Поки що відповіді немає.';
      this.questionsService.postQuestionInfo(this.newOrEditedQuestion).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Зміни Успішно Збережено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.questionsGet();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Сталася Помилка. Зміни не внесено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.questionsGet();
        });
    } else {
      this.questionsService.putQuestionInfo(this.newOrEditedQuestion).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Зміни Успішно Збережено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.questionsGet();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Сталася Помилка. Зміни не внесено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.questionsGet();
        });
    }
  }

  deleteQuestion() {
    this.questionsService.deleteQuestionInfo(this.newOrEditedQuestion).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Успішно Видалено.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
        this.questionsGet();
      }, () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Сталася Помилка. Видалення Не Відбулося.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
        this.questionsGet();
      });
  }
}
