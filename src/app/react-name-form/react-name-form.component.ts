import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-react-name-form',
  templateUrl: './react-name-form.component.html',
  styleUrls: ['./react-name-form.component.css']
})
export class ReactNameFormComponent  {
 form= new FormGroup(
   {
     userName: new FormControl('',Validators.required,),
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
