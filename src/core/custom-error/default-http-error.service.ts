import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { HttpErrorResponse } from '@angular/common/http';
import { defaultHttpErrorFormatter } from './helpers/httpFormatError';

@Injectable({ providedIn: 'root' })
export class DefaultHttpErrorService {
  constructor(private errorService: ErrorService) {}

  handle(err: HttpErrorResponse) {
    this.errorService.add(defaultHttpErrorFormatter(err));
  }
}
