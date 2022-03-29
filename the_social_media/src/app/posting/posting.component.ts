import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostingServiceService } from '../posting-service.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss']
})
export class PostingComponent implements OnInit {

  post : Post = new Post("", "", "", 0, 0);
  message:any;
  
  constructor(private service: PostingServiceService) { }

  ngOnInit(): void {
  }

  public postNow(){
    let resp = this.service.doPosting(this.post);
    resp.subscribe((data: any)=>this.message=data);
      }

}
