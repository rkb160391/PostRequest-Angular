import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})

export class PostsComponent implements OnInit {

  posts:Post[];
  newPost:Post;
  returnedPost:Post;
  status:Status;
  editStatus:Status;

    constructor(private postService:PostsService) { 

      this.newPost = new Post();
      this.returnedPost = new Post();
      this.status = new Status();
      this.editStatus = new Status();
      this.posts = [];
    }  

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
   
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost(){

    this.postService.addPost(this.newPost).subscribe(post => {
      this.returnedPost = post;
      this.newPost = new Post();

      if(this.returnedPost.id !=0)
        this.posts.push(this.returnedPost);
    });

    //window.location.reload();
  }



  deletePost(id,postIndex){
   
    this.postService.deletePost(id).subscribe(status => {
        this.status = status ;
       
        if(this.status.queryStatus){
            this.posts.splice(postIndex,1);
        }
    });
  }

  editPost(id,i){
    this.postService.editPost(id,this.newPost).subscribe(status =>{
      this.editStatus = status;
      if(this.editStatus.queryStatus){
        this.posts[i].title = this.newPost.title;
        this.posts[i].body = this.newPost.body;
        this.newPost = new Post();
      }
    })
  }
}

class Post{
  id:number;
  title:string;
  body:string;
}

class Status{
  queryStatus:boolean;
}