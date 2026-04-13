import { Component } from '@angular/core';
import { Comment } from '../model/comment.type';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-forum',
  imports: [FormsModule],
  templateUrl: './my-forum.html',
  styleUrl: './my-forum.css',
})
export class MyForum {
  allComments = signal<Array<Comment>>([])
  inputName =  '';
  inputComment = '';
  isEdit = false;
  
  editingId = ''; 

  addComment(event: Event){
    event.preventDefault();

    if (this.isEdit) {

      this.allComments.update(comments => 
        comments.map(c => {
          if (c.dateString === this.editingId) {
            return { ...c, name: this.inputName, comment: this.inputComment }; 
          }
          return c;
        })
      );
      
      this.isEdit = false;
      this.editingId = '';

    } else {

      const newComment: Comment = {
        name: this.inputName,
        comment: this.inputComment,
        dateString: new Date().toLocaleString()
      };
      this.allComments.update(comments => [...comments, newComment]);
    }

    this.inputName = '';
    this.inputComment = '';
  }

  deleteComment(dateString: string){
    this.allComments.update(comments => comments.filter(comment => comment.dateString !== dateString));
  }

  editComment(comment: Comment){
    this.isEdit = true;
    this.editingId = comment.dateString;
    this.inputName = comment.name;
    this.inputComment = comment.comment;
  }
}