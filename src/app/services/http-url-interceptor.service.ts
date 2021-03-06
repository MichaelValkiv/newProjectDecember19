import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpUrlInterceptorService implements  HttpInterceptor {

  baseUrl = 'https://komfortdimphp.herokuapp.com';

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url !== 'https://komfortdim.herokuapp.com/authenticate') {
      const reqWithUrl = req.clone({
        url: this.baseUrl + req.url
      });
      return next.handle(reqWithUrl);
    } else {
      const reqWithUrl = req.clone({
        url: req.url
      });
      return next.handle(reqWithUrl);
    }
  }
}
