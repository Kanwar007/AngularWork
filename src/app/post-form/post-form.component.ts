import { HttpClient, HttpResponse } from '@angular/common/http';

import { Component, OnInit, Input } from '@angular/core';
import{GithubUser} from './githubUser'
import { postUser } from './postUser';
import { PostService } from '../services/post.service';



@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent  {
  postUser1 : postUser[];
 user:GithubUser;
 
  constructor(private postService : PostService ) { 
    postService.getGithubUser().subscribe((data: GithubUser)=>
      {
      //  console.log(response);
      console.log('TJ user data', data);
        this.user = data
      }
      
      );
      postService.getPostUser().subscribe((data:postUser[])=>{
         console.log(data);
        
         this.postUser1 = data;
      }
      );
      postService.getStatusOfServices().subscribe((response: HttpResponse<GithubUser>) => {
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
   this.postService.creatPost(postuser)
    .subscribe((data :postUser)=> {
     // this.post.splice(0,0,post);
      console.log(data);
      
    postuser['userId'] = data.id;
     console.log(postuser)
     this.postUser1.push(postuser);
    });

  
    
    
    
   

  }

  updatePost(postuser2)
  {

  
    //this.http.patch(this.url1+'/'+postuser2.id,JSON.stringify({isRead :true}))
  //  .subscribe((data:Response)=>
  //  {
     //  console.log(data);
  //  }
  //  )
    this.postService.updatePost(postuser2).subscribe((data : postUser)=>
    {
      console.log(data)
    })
  }

  deletePost(postuser3){
    this.postService.deletePost(postuser3.id).subscribe(Response=> {

  
   
      let index = this.postUser1.indexOf(postuser3);
      console.log(index);
      console.log(this.postUser1.length)
      this.postUser1.slice(index,1);

      console.log(this.postUser1.length)
      
    });
  
    
  }

  

}
