import { HttpClient } from '@angular/common/http';

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent  {
 post : any
 url='https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient ) { 
    this.http.get(this.url).subscribe(response=>
      {
      //  console.log(response);
        this.post = response
      }
      
      )
  }

  creatpost(input : HTMLInputElement){
   let post = {title : input.value};
   input.value='';
    this.http.post(this.url,JSON.stringify(post)).subscribe(response=>{
       
      console.log(response)

    });

  }

  

}
