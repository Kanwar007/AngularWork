import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UserNameValidators } from './userName.validators';



@Component({
  selector: 'app-react-name-form',
  templateUrl: './react-name-form.component.html',
  styleUrls: ['./react-name-form.component.css']
})
export class ReactNameFormComponent  {
 form= new FormGroup(
   {
   //  userName: new FormControl('',[
     //  Validators.required,
   //    Validators.minLength(4),
    //  UserNameValidators.cannotContainSpace,
      //UserNameValidators.shouldBeUniqure
     //]),
     userName: new FormControl('',Validators.required,UserNameValidators.shouldBeUniqure),
     password: new FormControl('',Validators.required)
   }

 );

 get userName(){
   return this.form.get('userName')
 }
 get password(){
   return this.form.get('password')
 }

}
