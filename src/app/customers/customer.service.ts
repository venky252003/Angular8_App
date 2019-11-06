import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { ICustomer } from "../shared/customer";

@Injectable()
export class CustomerService {
    
}