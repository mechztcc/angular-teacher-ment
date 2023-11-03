import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class HttpHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!/^(http|https):/i.test(request.url)) {
      request = request.clone({ url: 'http://localhost:3000' + request.url });
    }
    request = this.setToken(request);
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((response: HttpErrorResponse) => {
        scrollTo(0, 0);

        return throwError(() => new Error());
      })
    );
  }

  setToken(request: HttpRequest<any>) {
    let token = localStorage.getItem('token');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${token}`,
          ['Content-Type']: 'text/plain',
        },
      });
    }
    return request;
  }
}
