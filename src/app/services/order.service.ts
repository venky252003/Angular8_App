import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import {IOrder} from '../shared';

@Injectable()
export class OrderService {
    orderUrl = environment.api + 'order'; // 'assets/customer.json';
    httpScoket: HttpClient;

    constructor(httpScoket:HttpClient){
        this.httpScoket = httpScoket;
    }

    get(id:number): Observable<IOrder[]>{
        let url = this.orderUrl + '?id=' + id;
        return this.httpScoket.get<IOrder[]>(url)
                    .pipe(catchError(this.handleError));
    }

    handleError(error: any){
        return Observable.throw(error || 'Error from API');
    }    
}