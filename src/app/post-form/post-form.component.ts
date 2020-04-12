import { HttpClient } from '@angular/common/http';

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent  {
 post : any
// url='https://jsonplaceholder.typicode.com/posts'
 url="https://api.github.com/users"
  constructor(private http: HttpClient ) { 
    this.http.get(this.url,).subscribe((response: Response)=>
      {
      //  console.log(response);
      console.log(response)
        this.post = response
      }
      
      )
  }

  creatPost(input : HTMLInputElement){
   let post:any = {title : input.value};
   input.value='';
    this.http.post(this.url,JSON.stringify(post))
    .subscribe((data :Response)=> {
     // this.post.splice(0,0,post);
      console.log(data);
      
      
    });
    
    
    
   

  }

  

}
