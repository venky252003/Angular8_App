import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { IUser } from '../shared';

@Injectable()
export class UserService {
    userUrl = environment.api + 'user';

    constructor(private http: HttpClient){

    }

    getUser():Observable<IUser[]>{
        return this.http.get<IUser[]>(this.userUrl)
                    .pipe(catchError(this.handleError));
    }

    handleError(error: any){
        return Observable.throw(error || 'Error from API');
    }
}