import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import {faBell, faTimes, faCheck, faExclamationTriangle, faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { Notifications } from '../../models/notifications.model';
import { NotificationsService } from '../../services/notifications.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  faBell = faBell;
  faTimes = faTimes;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  faCheck = faCheck;
  faExclamationTriangle = faExclamationTriangle;

  displayForm: boolean = false;
  displayDeleteDialog: boolean = false;

  allNotifications: Notifications[];
  newOrEditedNotification: Notifications;
  isNewNotification: boolean;
  isLoadingNotifications: boolean;

  constructor( private pageTitle: PageTitleService,
               private notificationsService: NotificationsService,
               private messageService: MessageService ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Комфорт-Дім - Оголошення');
    this.notificationsGet();
    this.newOrEditedNotification = new Notifications();
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

  notificationsGet() {
    this.notificationsService.getNotificationInfo().subscribe(
      data => {
        this.allNotifications = data;
        this.isLoadingNotifications = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Успішно Завантажено Список Оголошень.',
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

  addNewNotification() {
    this.newOrEditedNotification = new Notifications();
    this.displayForm = true;
    this.isNewNotification = true;
  }

  editNotification(notificationInfo: Notifications) {
    this.isNewNotification = false;
    this.newOrEditedNotification = new Notifications(
      notificationInfo.id,
      notificationInfo.notification,
      notificationInfo.notification_date
    );
  }

  addOrModifyNotification() {
    if (this.isNewNotification) {
      this.newOrEditedNotification.id = null;
      this.newOrEditedNotification.notification_date = null;
      this.notificationsService.postNotificationInfo(this.newOrEditedNotification).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Зміни Успішно Збережено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.notificationsGet();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Сталася Помилка. Зміни не внесено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.notificationsGet();
        });
    } else {
      this.notificationsService.putNotificationInfo(this.newOrEditedNotification).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Зміни Успішно Збережено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.notificationsGet();
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Сталася Помилка. Зміни не внесено.',
            detail: 'Повідомлення від сервера Комфорт-Дім',
            life: 7000
          });
          this.notificationsGet();
        });
    }
  }

  deleteNotification() {
    this.notificationsService.deleteNotificationInfo(this.newOrEditedNotification).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Успішно Видалено.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
        this.notificationsGet();
      }, () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Сталася Помилка. Видалення Не Відбулося.',
          detail: 'Повідомлення від сервера Комфорт-Дім',
          life: 7000
        });
        this.notificationsGet();
      });
  }

}
