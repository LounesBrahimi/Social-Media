import { Component, OnInit } from '@angular/core';
import { PostingServiceService } from '../posting-service.service';

@Component({
  selector: 'app-getting',
  templateUrl: './getting.component.html',
  styleUrls: ['./getting.component.scss']
})
export class GettingComponent implements OnInit {
  
  posts : any;

  constructor(private service: PostingServiceService) { }

  ngOnInit(): void {
    let resp = this.service.doGet();
    resp.subscribe((data)=> this.posts = data)
  }


}
