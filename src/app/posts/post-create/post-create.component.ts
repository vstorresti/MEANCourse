// Import Library
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';

import { PostsService } from '../posts.service';

// Config the Component
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

// Create and Export Class
export class PostCreateComponent implements OnInit {

    private mode = 'create';
    private postId: string;
    private post: Post;

    constructor(public postsService: PostsService, public route: ActivatedRoute) { }

    // Declare Methods
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            if (paramMap.has('postId')) {
                this.mode = 'edit';
                this.postId = paramMap.get('postId');
                this.post = this.postsService.getPost(this.postId);
            } else {
                this.mode = 'create';
                this.postId = null;
            }
        });

    }

    onAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.postsService.addPost(form.value.title, form.value.content);
        form.resetForm();
    }
}