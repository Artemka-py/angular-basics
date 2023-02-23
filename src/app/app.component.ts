import { Component, OnInit } from '@angular/core';
import { __assign } from 'tslib';

export interface IPost {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts: IPost[] = [
    { title: 'Angular components', text: 'I know you fucked up', id: 1 },
    { title: 'Next block', text: 'Pipes or directives', id: 2 },
  ];

  updatePosts(post: IPost) {
    this.posts.unshift(post);
  }

  removePost(deleteId: number) {
    console.log(deleteId);
    this.posts = this.posts.splice(deleteId, 1);
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.posts[0] = {
    //     title: 'Changed',
    //     text: 'test',
    //   };
    // }, 5000);
  }
}
