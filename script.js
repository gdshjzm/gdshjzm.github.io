// Personal Blog JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the blog functionality
    initializeBlog();
    
    // Initialize form submissions
    initializeForms();
    
    // Initialize image upload functionality
    initializeImageUpload();
    
    // Load personal info if on about page
    if (document.querySelector('.about-section')) {
        loadPersonalInfo();
    }
    
    // Load resume if on resume page
    if (document.querySelector('.resume-section')) {
        loadResume();
    }
});

// Initialize blog functionality
function initializeBlog() {
    // Load blog posts from localStorage if available
    loadBlogPosts();
    
    // Set up event listeners for blog management
    const addPostBtn = document.getElementById('add-post-btn');
    if (addPostBtn) {
        addPostBtn.addEventListener('click', showAddPostForm);
    }
    
    // Set up event listeners for personal info management
    const editInfoBtn = document.getElementById('edit-info-btn');
    if (editInfoBtn) {
        editInfoBtn.addEventListener('click', toggleEditInfo);
    }
}

// Load blog posts from localStorage
function loadBlogPosts() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const postsContainer = document.getElementById('blog-posts-container');
    
    if (postsContainer && posts.length > 0) {
        postsContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = createPostElement(post, index);
            postsContainer.appendChild(postElement);
        });
    }
}

// Create a blog post element
function createPostElement(post, index) {
    const article = document.createElement('article');
    article.className = 'blog-post';
    
    // Render markdown content
    const marked = window.marked;
    const renderedContent = marked.parse ? marked.parse(post.content) : marked(post.content);
    
    article.innerHTML = `
        <h3>${post.title}</h3>
        <div class="post-meta">Published on ${post.date} by ${post.author}</div>
        <div class="post-content">${renderedContent}</div>
        <button class="edit-post-btn" data-index="${index}">Edit Post</button>
        <button class="delete-post-btn" data-index="${index}">Delete Post</button>
    `;
    
    // Add event listener to edit button
    const editBtn = article.querySelector('.edit-post-btn');
    editBtn.addEventListener('click', function() {
        // Show password authentication modal
        showAuthModal();
        
        // Override verifyPassword function to edit the post
        window.verifyPassword = function() {
            const passwordInput = document.getElementById('password-input');
            const password = passwordInput.value;
            
            // Check if password is correct (ZBS88888888)
            if (password === 'ZBS88888888') {
                // Close modal
                const modal = document.getElementById('auth-modal');
                if (modal) {
                    modal.style.display = 'none';
                }
                
                // Clear password input
                passwordInput.value = '';
                
                // Redirect to post page for editing
                window.location.href = `post.html?id=${index}`;
            } else {
                alert('Incorrect password. Please try again.');
            }
        };
    });
    
    // Apply syntax highlighting to code blocks
    article.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
    
    // Add event listener to delete button
    const deleteBtn = article.querySelector('.delete-post-btn');
    deleteBtn.addEventListener('click', function() {
        // Show password authentication modal
        showAuthModal();
        
        // Override verifyPassword function to delete the post
        window.verifyPassword = function() {
            const passwordInput = document.getElementById('password-input');
            const password = passwordInput.value;
            
            // Check if password is correct (ZBS88888888)
            if (password === 'ZBS88888888') {
                // Close modal
                const modal = document.getElementById('auth-modal');
                if (modal) {
                    modal.style.display = 'none';
                }
                
                // Clear password input
                passwordInput.value = '';
                
                // Delete the post
                deleteBlogPost(index);
            } else {
                alert('Incorrect password. Please try again.');
            }
        };
    });
    
    return article;
}

// Show the add post form
function showAddPostForm() {
    const formContainer = document.getElementById('add-post-form');
    if (formContainer) {
        formContainer.style.display = 'block';
    }
}

// Add a new blog post
function addBlogPost() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const imageInput = document.getElementById('post-image');
    
    if (title && content) {
        let postContent = content;
        
        // Handle image upload
        if (imageInput && imageInput.files.length > 0) {
            const file = imageInput.files[0];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Add image markdown to content
                    postContent = content + `\n\n![Image](${e.target.result})`;
                    finishAddingPost(title, postContent);
                };
                reader.readAsDataURL(file);
                return; // We'll continue in the FileReader callback
            }
        }
        
        // If no image or image processing failed, add post normally
        finishAddingPost(title, postContent);
    }
}

// Finish adding blog post (separated to handle async image processing)
function finishAddingPost(title, content) {
    const newPost = {
        title: title,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        author: 'John Doe',
        content: content
    };
    
    // Save to localStorage
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.unshift(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    
    // Add to DOM
    const postsContainer = document.getElementById('blog-posts-container');
    if (postsContainer) {
        const postElement = createPostElement(newPost, 0);
        postsContainer.insertBefore(postElement, postsContainer.firstChild);
    }
    
    // Reset form and hide
    document.getElementById('add-post-form').style.display = 'none';
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-image').value = '';
    document.getElementById('image-preview').style.display = 'none';
    
    // Update latest posts on homepage if it exists
    updateLatestPosts(newPost);
}

// Delete a blog post
function deleteBlogPost(id) {
    if (confirm('Are you sure you want to delete this post?')) {
        const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        const updatedPosts = posts.filter(post => post.id !== id);
        
        // Re-index the posts
        const reindexedPosts = updatedPosts.map((post, index) => {
            return {...post, id: index};
        });
        
        localStorage.setItem('blogPosts', JSON.stringify(reindexedPosts));
        
        // Reload posts if on blog page
        if (document.getElementById('blog-posts-container')) {
            loadBlogPosts();
        }
        
        // Update latest posts on homepage if on homepage
        if (document.querySelector('.latest-posts')) {
            loadLatestPosts();
        }
    }
}

// Update latest posts on homepage
function updateLatestPosts(newPost) {
    // Load latest posts on homepage
    loadLatestPosts();
}

// Load latest posts on homepage
function loadLatestPosts() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    // Get only the 3 most recent posts
    const latestPosts = posts.slice(-3).reverse();
    const latestPostsContainer = document.querySelector('.post-grid');
    
    if (latestPostsContainer) {
        if (latestPosts.length > 0) {
            latestPostsContainer.innerHTML = '';
            
            latestPosts.forEach((post, index) => {
                const postElement = document.createElement('article');
                postElement.className = 'post-card';
                postElement.innerHTML = `
                    <div class="post-image"></div>
                    <div class="post-content">
                        <h3>${post.title}</h3>
                        <a href="post.html?id=${post.id}" class="read-more">Read More</a>
                    </div>
                `;
                latestPostsContainer.appendChild(postElement);
            });
        } else {
            // Show default posts if no posts exist
            latestPostsContainer.innerHTML = `
                <article class="post-card">
                    <div class="post-image"></div>
                    <div class="post-content">
                        <h3>Post Title 1</h3>
                        <a href="post.html?id=0" class="read-more">Read More</a>
                    </div>
                </article>
                <article class="post-card">
                    <div class="post-image"></div>
                    <div class="post-content">
                        <h3>Post Title 2</h3>
                        <a href="post.html?id=1" class="read-more">Read More</a>
                    </div>
                </article>
                <article class="post-card">
                    <div class="post-image"></div>
                    <div class="post-content">
                        <h3>Post Title 3</h3>
                        <a href="post.html?id=2" class="read-more">Read More</a>
                    </div>
                </article>
            `;
        }
    }
}

// Toggle edit mode for personal information
function toggleEditInfo() {
    // Check if we're already editing, if so, save and exit edit mode
    const infoElements = document.querySelectorAll('.editable');
    const isEditing = infoElements[0].contentEditable === 'true';
    
    if (isEditing) {
        // Save to localStorage
        savePersonalInfo();
        
        // Exit edit mode
        infoElements.forEach(element => {
            element.contentEditable = 'false';
            element.classList.remove('editing');
        });
        
        // Update button text
        const editBtn = document.getElementById('edit-info-btn');
        if (editBtn) {
            editBtn.textContent = 'Edit Info';
        }
        return;
    }
    
    // If not editing, show password authentication modal
    showAuthModal();
}

// Save personal information to localStorage
function savePersonalInfo() {
    const name = document.querySelector('.profile-info h3').textContent;
    const title = document.querySelector('.title').textContent;
    const bioElements = document.querySelectorAll('.bio');
    
    const personalInfo = {
        name: name,
        title: title,
        bio: Array.from(bioElements).map(el => el.textContent)
    };
    
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
}

// Load personal information from localStorage
function loadPersonalInfo() {
    const personalInfo = JSON.parse(localStorage.getItem('personalInfo'));
    
    if (personalInfo) {
        document.querySelector('.profile-info h3').textContent = personalInfo.name;
        document.querySelector('.title').textContent = personalInfo.title;
        
        const bioElements = document.querySelectorAll('.bio');
        bioElements.forEach((el, index) => {
            if (personalInfo.bio[index]) {
                el.textContent = personalInfo.bio[index];
            }
        });
    }
}

// Edit a blog post
function editBlogPost(index) {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    if (index >= 0 && index < posts.length) {
        const post = posts[index];
        
        // Redirect to the post page for editing
        window.location.href = `post.html?id=${index}`;
    }
}

// Initialize form submissions
function initializeForms() {
    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitContactForm();
        });
    }
    
    // Add post form submission
    const addPostForm = document.getElementById('add-post-form');
    if (addPostForm) {
        addPostForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addBlogPost();
        });
    }
}

// Initialize image upload functionality
function initializeImageUpload() {
    const imageUploadArea = document.getElementById('image-upload-area');
    const imageInput = document.getElementById('post-image');
    const imagePreview = document.getElementById('image-preview');
    
    if (imageUploadArea && imageInput) {
        // Click to upload
        imageUploadArea.addEventListener('click', () => {
            imageInput.click();
        });
        
        // Drag and drop functionality
        imageUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            imageUploadArea.style.borderColor = 'var(--primary-color)';
        });
        
        imageUploadArea.addEventListener('dragleave', () => {
            imageUploadArea.style.borderColor = '#ddd';
        });
        
        imageUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            imageUploadArea.style.borderColor = '#ddd';
            
            if (e.dataTransfer.files.length) {
                imageInput.files = e.dataTransfer.files;
                handleImagePreview(e.dataTransfer.files[0]);
            }
        });
        
        // File selection
        imageInput.addEventListener('change', () => {
            if (imageInput.files.length) {
                handleImagePreview(imageInput.files[0]);
            }
        });
    }
}

// Handle image preview
function handleImagePreview(file) {
    if (!file || !file.type.startsWith('image/')) return;
    
    const imagePreview = document.getElementById('image-preview');
    if (!imagePreview) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Image preview">`;
        imagePreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

// Submit contact form
function submitContactForm() {
    // In a real application, this would send the data to a server
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    document.querySelector('.contact-form form').reset();
}

// Show password authentication modal
function showAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Verify password
function verifyPassword() {
    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;
    
    // Check if password is correct (ZBS88888888)
    if (password === 'ZBS88888888') {
        // Close modal
        const modal = document.getElementById('auth-modal');
        if (modal) {
            modal.style.display = 'none';
        }
        
        // Clear password input
        passwordInput.value = '';
        
        // Enter edit mode
        enterEditMode();
    } else {
        alert('Incorrect password. Please try again.');
    }
}

// Enter edit mode for personal information
function enterEditMode() {
    const infoElements = document.querySelectorAll('.editable');
    
    infoElements.forEach(element => {
        element.contentEditable = 'true';
        element.classList.add('editing');
        element.focus();
    });
    
    // Update button text
    const editBtn = document.getElementById('edit-info-btn');
    if (editBtn) {
        editBtn.textContent = 'Save Info';
    }
}

// Cancel edit mode
function cancelEditMode() {
    // Close modal
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Clear password input
    const passwordInput = document.getElementById('password-input');
    if (passwordInput) {
        passwordInput.value = '';
    }
}

// Handle resume upload
function handleResumeUpload() {
    const fileInput = document.getElementById('resume-upload');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // In a real application, this would upload the file to a server
            // For now, we'll just store it in localStorage as a data URL
            localStorage.setItem('resume', e.target.result);
            alert('Resume uploaded successfully!');
        };
        reader.readAsDataURL(file);
    }
}

// Load resume if available
function loadResume() {
    const resumeData = localStorage.getItem('resume');
    if (resumeData) {
        const resumeLink = document.getElementById('resume-link');
        if (resumeLink) {
            resumeLink.href = resumeData;
            resumeLink.style.display = 'inline-block';
        }
    }
}