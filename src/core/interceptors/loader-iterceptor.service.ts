import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize, tap } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Injectable()
export class LoaderIterceptor implements HttpInterceptor {
  constructor(private loader: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.show();
    const started = Date.now();
    let ok: string;

    console.log('requeste', req);
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer JWT01010101',
      },
    });
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) =>
          (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        (error: HttpErrorResponse) => (ok = 'failed')
        // if(event instanceof HttpResponse) {
        //   console.log('status', event.status)
        //   if(event.status === 404) {
        //     console.log('Url not found')
        //   }
        //   if(event.status === 200) {
        //     console.log(`${req.url} carregado com sucesso`)
        //   }
        // }
      ),
      finalize(() => {
        this.loader.hide();
        const elapsed = Date.now() - started;
        const msg = `${req.method} ${req.urlWithParams} ${ok} in ${elapsed} ms`;
        console.log(msg);
      })
    );
  }
}
