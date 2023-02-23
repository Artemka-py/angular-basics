import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();

  @ViewChild('titleInput') inputRef: ElementRef;

  title = '';
  text = '';

  addPost() {
    if (!this.title.trim() && !this.text.trim()) return;

    const post: IPost = {
      text: this.text,
      title: this.title,
    };
    this.onAdd.emit(post);

    this.title = this.text = '';
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }
}
