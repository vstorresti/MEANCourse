// Import Library
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../posts.service';

// Config the Component
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

// Create and Export Class
export class PostCreateComponent {

    constructor(public postsService: PostsService) { }

    // Declare Methods
    onAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.postsService.addPost(form.value.title, form.value.content);
    }
}