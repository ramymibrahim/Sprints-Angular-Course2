import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}
  getErrorMessage(err: any) {
    console.log(err);
    if (typeof err == 'string') return err;
    if (typeof err == 'object') {
      if (err.message) {
        return err.message;
      }
    }
    return 'Error';
  }
}
