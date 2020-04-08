import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods=[
    {id:1,value:"Email"},
    {id:2,value:"Phone"},
    {id:3,value:"Mobile"} 
       ]

       schoolTeam=[{id:1,color:"red"},
       {id:1,color:"green"},
      {id:1,color:"blue"},
       {id:1,color:"yello"},
      ]

  constructor() { 


  }


  ngOnInit(): void {
  }
  log(x){
    console.log(x);
  }
  logPassword(y){
    console.log(y);
  }
  submit(f){
    console.log(f.value)
  }

}
