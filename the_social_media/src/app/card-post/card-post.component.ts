import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {
  
  @Input() post!: Post;
  textButtun!: string;
  
  constructor() { }

  ngOnInit(): void {
    this.textButtun = 'WoW'
  }

  onWow() {
    if (this.textButtun == 'WoW') {
      this.textButtun = 'Loved';
      this.post.snaps++;
    } else {
      this.textButtun = 'WoW';
      this.post.snaps--;
    }
  }

}
