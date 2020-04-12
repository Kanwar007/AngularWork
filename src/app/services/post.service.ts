import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  url1='https://jsonplaceholder.typicode.com/posts'
  url="https://ABCapi.github.com/users"

  constructor(private http : HttpClient) { 

  }

  getGithubUser(){
    return this.http.get(this.url).pipe(

      retry(1),
  
      catchError(this.error)
  
    );
  }
  getPostUser():Observable<any>{
    return this.http.get(this.url1).pipe(

      retry(1),
  
      catchError(this.error)
  
    );
  }
  getStatusOfServices():Observable<any>{
   return this.http.get(this.url, { observe: 'response' }).pipe(

    retry(1),

    catchError(this.error)

  );
  }
  creatPost(postuser):Observable<any>{
    return this.http.post(this.url1,JSON.stringify(postuser)).pipe(

      retry(1),
  
      catchError(this.error)
  
    );
  }
  updatePost(postuser2):Observable<any>{
    return this.http.put(this.url1+'/'+postuser2.id,JSON.stringify(postuser2)).pipe(

      retry(1),
  
      catchError(this.error)
    );

  }
  deletePost(id):Observable<any>{
   return this.http.delete(this.url1+'/'+id).pipe(

    retry(1),

    catchError(this.error)

  );
  }

  error(error: HttpErrorResponse) {

 
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
 
  
}
