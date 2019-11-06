import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'NameFormatter'})
export class NameFormatterPipe implements PipeTransform {
    transform(value: any): any {
        let fullName: string;
        if(value){
            let nameSplit : string = value.toString().split(' ');
            let firstName : string;
            let lastName: string;

            if(nameSplit.length > 0 && nameSplit[0] != null){
                firstName = nameSplit[0];            
                firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
            }
            else{
                firstName = "";
            }
            
            if(nameSplit.length > 1 && nameSplit[1] != null){
                lastName = value.toString().split(' ')[1];            
                lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
            }
            else{
                lastName = "";
            }

            fullName = lastName + ',' + firstName; 

        }
         return fullName;
    }
}