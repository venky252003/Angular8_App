import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { ICustomer } from "../shared";
import { environment } from 'src/environments/environment';


@Injectable()
export class CustomerService {
    customerUrl = environment.api + 'customer'; // 'assets/customer.json';
    httpScoket: HttpClient;
    
    constructor(httpScoket: HttpClient) {
        this.httpScoket = httpScoket;
    }

    getAllCustomer(): Observable<ICustomer[]>{
        return this.httpScoket.get<ICustomer[]>(this.customerUrl)
                    .pipe(catchError(this.handleError));
    }

    saveCustomer(customer:ICustomer):Observable<any>{
        return this.httpScoket.post(this.customerUrl, customer)
                            .pipe(catchError(this.handleError));
    }

    handleError(error: any){
        return Observable.throw(error || 'Error from API');
    }
}