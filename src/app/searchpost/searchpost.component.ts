import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
@Component({
  selector: 'app-searchpost',
  templateUrl: './searchpost.component.html',
  styleUrls: ['./searchpost.component.css'],
  providers: [PostsService]
})
export class SearchpostComponent implements OnInit {

  post:Post;

  constructor(private postService:PostsService) {

    this.post = new Post();
    this.post.body='';
    this.post.title='';
    this.post.id = 0;
  }

  ngOnInit() {
  }

  getPost(){
    this.postService.getPost(this.post.id).subscribe(post => {
      this.post = post;
      console.log("post from json WS=" + this.post.title);
    });      
  }
}

class Post{
  id:number;
  title:string;
  body:string;
}