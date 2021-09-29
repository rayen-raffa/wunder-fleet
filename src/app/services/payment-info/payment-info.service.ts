import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NewCutomer, SavedCustomer } from 'src/app/models/registration-http.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {

  paymentEndpoint = 'https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data'

  savePaymentInfo(newCustomer: NewCutomer): Observable<any> {
    return this._http.post<SavedCustomer>(this.paymentEndpoint, newCustomer)
  }

  constructor(private _http: HttpClient) { }
}
