import { FormGroup, FormControl, FormArray, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  
  ngOnInit(): void {
  }
  form;
  
  //= new FormGroup({
    //name  : new FormControl(),
    //Contact: new FormGroup({
    //  email: new FormControl(),
   //   phone: new FormControl()
   // }),
   // topic: new FormArray([])
 // });

  constructor(fb:FormBuilder){
  this.form=  fb.group({
      name:['',Validators.required],
      contact: fb.group({
        email:[],
        phone:[]
      }),
      topics: fb.array([])

    })
  }

}
