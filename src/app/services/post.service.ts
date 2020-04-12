import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url1='https://jsonplaceholder.typicode.com/posts'
  url="https://api.github.com/users"

  constructor(private http : HttpClient) { 

  }

  getGithubUser(){
    return this.http.get(this.url);
  }
  getPostUser(){
    return this.http.get(this.url1);
  }
  getStatusOfServices(){
   return this.http.get(this.url, { observe: 'response' });
  }
  creatPost(postuser){
    return this.http.post(this.url1,JSON.stringify(postuser));
  }
  updatePost(postuser2){
    return this.http.put(this.url1+'/'+postuser2.id,JSON.stringify(postuser2));
  }
  deletePost(id){
   return this.http.delete(this.url1+'/'+id);
  }
}
