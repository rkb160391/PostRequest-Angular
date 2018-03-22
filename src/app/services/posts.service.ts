import {Injectable} from '@angular/core';
import {Http,RequestOptions,Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
    //  private postsUrl = 'http://localhost:8080/posts/webapi/myresource';
    private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    
    constructor(private http:Http){

    }

    getPosts(){

        return this.http.get(this.postsUrl)
        .map(res => res.json()); 
    }

    getPost(i){
               
        return this.http.get(this.postsUrl + '/' + i )
        .map(res => res.json());
    }

    deletePost(i){
      
        return this.http.delete(this.postsUrl + '/' + i )
        .map(res => res.json());
    }

    addPost(newPost: Object){

        let bodyString = JSON.stringify(newPost); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.postsUrl, bodyString, options) // ...using post request
                         .map((res:Response) => res.json());

        
    }

    editPost(id,newPost: Object){
        
                let bodyString = JSON.stringify(newPost); // Stringify payload
                let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
                let options       = new RequestOptions({ headers: headers }); // Create a request option
        
                return this.http.put(this.postsUrl + '/' + id , bodyString, options) // ...using put request
                                 .map((res:Response) => res.json());                
            }
}