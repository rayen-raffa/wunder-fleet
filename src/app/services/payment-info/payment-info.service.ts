import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {
  INewCutomer,
  ISavedCustomer,
} from 'src/app/models/registration-http.interface';

@Injectable({
  providedIn: 'root',
})
export class PaymentInfoService {
  savePaymentInfo(newCustomer: INewCutomer): Observable<any> {
    let paymentEndpoint =
      '/default/wunderfleet-recruiting-backend-dev-save-payment-data';
    return this._http.post<ISavedCustomer>(paymentEndpoint, newCustomer);
  }

  constructor(private _http: HttpClient) {}
}
