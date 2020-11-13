// Import Library
import { Component } from '@angular/core';

// Config the Component
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

// Create and Export Class
export class PostCreateComponent {
    
    // Declare variables
    enteredValue = '';
    newPost = 'NO CONTENT';

    // Declare Methods
    onAddPost() {
        this.newPost = this.enteredValue;
    }
}