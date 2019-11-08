import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { UserService } from './services';
import { IUser } from './shared';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-header',
    templateUrl: './app.header.component.html',
    animations: []
})
export class HeaderComponent implements OnInit {
    model:IUser = {password: '', userId: '', role: ''};      
    isAuth:boolean = false;
    Heading:string;

    constructor(private service: UserService) {
        this.Heading = "Angular 8 Training";
     }

    ngOnInit(): void { 
        this.checkStorage();
    }

    checkStorage(){
        if(localStorage.getItem(environment.userInfo)){
            this.isAuth = true;
        }
        else
        {
            this.isAuth = false;
        }
    }

    logout(){
        localStorage.removeItem(environment.userInfo);
        this.model = {password: '', userId: '', role: ''};
        this.isAuth = false;   
    }

    login(){        
        if(this.model.userId != "" && this.model.password != ""){
            this.service.getUser().subscribe((data: IUser[]) => {
                data.forEach((val, index) => {
                    if(this.model.userId == val.userId && this.model.password == val.password){
                        this.model.role = val.role;
                        let _user = JSON.stringify(this.model);
                        localStorage.setItem(environment.userInfo, _user);
                        this.isAuth = true;
                        console.log('User Autheticated');
                    }
                });

                if(this.isAuth == false){
                    alert('Invalid Login');
                }
            });
        }
        else{
            alert('Enter Login Details');
        }        
    }
}
