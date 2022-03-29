import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostingServiceService {

  constructor(private http:HttpClient) { }

  public doPosting(post: Post){
    return this.http.post<Post>("http://localhost:9010/post",post,{responseType:'text' as 'json'});
  }
}
