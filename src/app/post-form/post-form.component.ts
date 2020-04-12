import { HttpClient, HttpResponse } from '@angular/common/http';

import { Component, OnInit, Input } from '@angular/core';
import{GithubUser} from './githubUser'
import {postUser} from './postUser'


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent  {
  postUser1 : postUser
 user:GithubUser
 url1='https://jsonplaceholder.typicode.com/posts'
 url="https://api.github.com/users"
  constructor(private http: HttpClient ) { 
    this.http.get(this.url,).subscribe((data: GithubUser)=>
      {
      //  console.log(response);
      console.log('TJ user data', data);
        this.user = data
      }
      
      );
      this.http.get(this.url1).subscribe((data:postUser)=>{
         console.log(data);
         this.postUser1=data
      }
      )
  }
  ngOnInit(): void {
   // const url = 'https://api.github.com/users/tj';
    // Make the GET HTTP request with responseType option
   // this.http.get(url, {responseType: 'blob'})
   //   .subscribe((data) => {
        // Data extraction from the HTTP response is already done
        // Display the result
   //     console.log('TJ user data', data);
  //    });
  const url = 'https://api.github.com/users/tj';
  // Make the GET HTTP request with options {observe: 'response'}
  // The 'observe' option tell HttpClient which data it has to return.
  this.http.get(url, { observe: 'response' })
  // Reading the HTTP response
  // Note the generic
    .subscribe((response: HttpResponse<GithubUser>) => {
      console.log('HTTP response', response);
      console.log('HTTP response : Headers', response.headers);
      console.log('HTTP response : status', response.status);
      console.log('HTTP response : url', response.url);
      // Note that we don't need parse the response, we can access
      // it directly through 'body' property
      console.log('HTTP response : body', response.body);
    });
    }

  creatPost(input : HTMLInputElement){
   let postuser:any = {title : input.value};
   input.value='';
    this.http.post(this.url1,JSON.stringify(postuser))
    .subscribe((data :postUser)=> {
     // this.post.splice(0,0,post);
      console.log(data);
      
    postuser['id'] = data.id;
     console.log(postuser)
      
      
    });
    
    
    
   

  }

  

}