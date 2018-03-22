import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { SearchpostComponent } from './searchpost/searchpost.component';

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'posts',component:PostsComponent},
  {path:'post',component:SearchpostComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    HomeComponent,
    SearchpostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
