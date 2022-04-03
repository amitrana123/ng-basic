import { Component } from '@angular/core';

import { FavoriteChangedEvevtArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  //template: `
    //<input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
   // {{email}}
   // <br/><br/>
   // {{ text | summary:25}}
   // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [1];

  coursess: any;

  onAdd() {
    this.coursess.push({ id: 4, name: 'course4' });
  }

  loadCourses() {
    this.coursess = [
      { id: 1, name: 'course1 ' },
      { id: 2, name: 'course2 ' },
      { id: 3, name: 'course3 ' },
    ];
  }

  onRemove(course: any) {
    let index = this.coursess.indexOf(course);
    this.coursess.splice(index, 1);
  }

  trackCourse(index: any, course: any) {
    return course ? course.id : undefined;
  }
  viewMode = 'list';


  title?: string;
  email = 'me@example.com';
  onKeyUp() {
    console.log(this.email);
  }

  post = {
    title: "Title",
    isFavorite: true
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEvevtArgs) {
    console.log('fav changed', eventArgs);
  }

  task = {
    title: 'Review applications',
    assignee: 'asd'
  }

  

  text ="The suspense over the visit persisted till the last minute and there was no official confirmation of the visit even when the Chinese minister landed in Delhi. The landing could be confirmed only through tracking the flight path of his plane, which took off from Afghanistan.";
}
