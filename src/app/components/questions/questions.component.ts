import {Component, OnInit, OnDestroy} from '@angular/core';
import {PageTitleService} from '../../services/page-title.service';
import {Meta} from '@angular/platform-browser';
import {
  faExclamationTriangle,
  faQuestionCircle,
  faUser,
  faQuestion,
  faCheck,
  faTimes,
  faTrashAlt, faCommentDots
} from '@fortawesome/free-solid-svg-icons';
import {Questions} from '../../models/questions.model';
import {QuestionsService} from '../../services/questions.service';
import {MessageService} from 'primeng/api';
import {AuthenticationService} from '../../services/authentication.service';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {

  faTimes = faTimes;
  faCheck = faCheck;
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

  getQuestionSubscription: Subscription;
  postQuestionSubscription: Subscription;
  putQuestionSubscription: Subscription;
  deleteQuestionSubscription: Subscription;

  isDataLoading: boolean = true;

  constructor(private pageTitle: PageTitleService,
              private metaService: Meta,
              private questionsService: QuestionsService,
              private messageService: MessageService,
              public authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.pageTitle.setTitle('Комфорт-Дім - Запитання');
    this.metaService.addTags([
      {
        name: 'keywords',
        content: 'Комфорт-Дім, Запитання, Управляюча компанія, Калуш, Комфорт, Дім, Управляюча, Компанія, Комфорт-Дім Калуш, Комфорт-Дім Запитання, УК Комфорт-Дім, УК Калуш, Управляюча Компанія Калуш, УК'
      },
      {name: 'author', content: 'MVYV'},
      {name: 'description', content: 'Комфорт-Дім - Запитання'},
      {name: 'robots', content: 'index, follow'},
      {name: 'googlebot', content: 'index, follow'}
    ]);
    this.questionsGet();
    this.newOrEditedQuestion = new Questions();
  }

  ngOnDestroy() {
    if (this.getQuestionSubscription) {
      this.getQuestionSubscription.unsubscribe();
    }
    if (this.postQuestionSubscription) {
      this.postQuestionSubscription.unsubscribe();
    }
    if (this.putQuestionSubscription) {
      this.putQuestionSubscription.unsubscribe();
    }
    if (this.deleteQuestionSubscription) {
      this.deleteQuestionSubscription.unsubscribe();
    }
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
    this.getQuestionSubscription = this.questionsService.getQuestionInfo().subscribe(
      data => {
        this.allQuestions = data;
        this.isDataLoading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Успішно Завантажено Список Запитань Клієнтів.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 4000
        });
      }, () => {
        this.isDataLoading = true;
        this.messageService.add({
          severity: 'error',
          summary: 'Сталася Помилка. Сервер Не Відповідає.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 4000
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
      this.postQuestionSubscription = this.questionsService.postQuestionInfo(this.newOrEditedQuestion).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Зміни Успішно Збережено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 4000
          });
          this.questionsGet();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Сталася Помилка. Зміни не внесено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 4000
          });
          this.questionsGet();
        });
    } else {
      this.putQuestionSubscription = this.questionsService.putQuestionInfo(this.newOrEditedQuestion).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Зміни Успішно Збережено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 4000
          });
          this.questionsGet();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Сталася Помилка. Зміни не внесено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 4000
          });
          this.questionsGet();
        });
    }
  }

  deleteQuestion() {
    this.deleteQuestionSubscription = this.questionsService.deleteQuestionInfo(this.newOrEditedQuestion).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Успішно Видалено.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 4000
        });
        this.questionsGet();
      }, () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Сталася Помилка. Видалення Не Відбулося.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 4000
        });
        this.questionsGet();
      });
  }
}
