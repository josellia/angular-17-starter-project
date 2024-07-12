import { HttpErrorResponse } from '@angular/common/http';

export function defaultHttpErrorFormatter(err: HttpErrorResponse): string {
  let errorMessage = '';

  if (err.error instanceof ErrorEvent) {
    errorMessage = `O seguinte erro ocorreu ${err.error.message}`;
  } else {
    errorMessage = `O servidor retornou o code: ${err.status}, com a mensagem de erro: ${err.message}`;
  }

  return errorMessage;
}
