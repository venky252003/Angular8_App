import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { ICustomer } from "../shared/customer";

@Injectable()
export class CustomerService {
    customerUrl = 'assets/customer.json';
    httpScoket: HttpClient;
    
    constructor(httpScoket: HttpClient) {
        this.httpScoket = httpScoket;
    }

    getAllCustomer(): Observable<ICustomer[]>{
        return this.httpScoket.get<ICustomer[]>(this.customerUrl)
                    .pipe(catchError(this.handleError));
    }

    handleError(error: any){
        return Observable.throw(error || 'Error from API');
    }
}