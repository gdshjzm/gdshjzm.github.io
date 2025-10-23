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
    // Load blog posts from posts.json if we are on a page that needs them
    if (document.getElementById('blog-posts-container')) {
        loadBlogPosts();
    }
    if (document.querySelector('.post-grid')) {
        loadLatestPosts();
    }

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

// Load blog posts from posts.json
async function loadBlogPosts() {
    try {
        const response = await fetch('posts.json');
        if (!response.ok) throw new Error('Failed to load posts.json');
        const posts = await response.json();
        const postsContainer = document.getElementById('blog-posts-container');

        if (postsContainer) {
            if (posts && posts.length > 0) {
                postsContainer.innerHTML = '';
                posts.forEach((post) => {
                    const postElement = createPostElement(post);
                    postsContainer.appendChild(postElement);
                });
            } else {
                postsContainer.innerHTML = '<p class="no-posts">No blog posts yet. Create your first post!</p>';
            }
        }
    } catch (error) {
        console.error('Error loading blog posts:', error);
        const postsContainer = document.getElementById('blog-posts-container');
        if (postsContainer) {
            postsContainer.innerHTML = '<p class="no-posts">Error loading blog posts. Please check the console for details.</p>';
        }
    }
}

// Create a blog post element
function createPostElement(post) {
    const article = document.createElement('article');
    article.className = 'post-preview'; // Using post-preview for consistency with blog.html

    article.innerHTML = `
        <h3>${post.title}</h3>
        <p class="post-meta">${new Date(post.date).toLocaleDateString()}</p>
        <div class="post-actions">
            <a href="post.html?id=${post.id}" class="read-more">Read More</a>
            <button class="delete-post-btn submit-btn" data-id="${post.id}">Delete</button>
        </div>
    `;

    article.querySelector('.delete-post-btn').addEventListener('click', function () {
        showAuthModal();
        window.verifyPassword = function() {
             const passwordInput = document.getElementById('password-input');
            if (passwordInput.value === 'ZBS88888888') {
                cancelEditMode();
                deleteBlogPost(post.id);
            } else {
                alert('Incorrect password.');
            }
        }
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

    if (title && content) {
        const newPost = {
            id: Date.now(),
            title: title,
            date: new Date().toISOString(),
            author: "Busheng Zhang",
            content: content
        };

        const instruction = `To add this new post, please add the following object to the beginning of your posts.json array:\n\n${JSON.stringify(newPost, null, 2)}`;
        showInstructions('Add New Post', instruction);
    }
}

// Delete a blog post
async function deleteBlogPost(id) {
    if (confirm('Are you sure you want to delete this post?')) {
        try {
            const response = await fetch('posts.json');
            const posts = await response.json();
            const updatedPosts = posts.filter(post => post.id !== id);

            const instruction = `To delete the post, replace the entire content of your posts.json file with the following:\n\n${JSON.stringify(updatedPosts, null, 2)}`;
            showInstructions('Delete Post', instruction);

        } catch (error) {
            console.error('Failed to process post deletion:', error);
            alert('Could not load posts.json to perform deletion.');
        }
    }
}

// Load latest posts on homepage
async function loadLatestPosts() {
    try {
        const response = await fetch('posts.json');
        if (!response.ok) throw new Error('Failed to load posts.json');
        const posts = await response.json();
        // 按日期排序（最新的在前），然后取前3篇
    const latestPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
        const latestPostsContainer = document.querySelector('.post-grid');

        if (latestPostsContainer) {
            if (latestPosts.length > 0) {
                latestPostsContainer.innerHTML = '';
                latestPosts.forEach(post => {
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
                latestPostsContainer.innerHTML = '<p class="no-posts">No posts to show here yet.</p>';
            }
        }
    } catch (error) {
        console.error('Error loading latest posts:', error);
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

function showInstructions(title, instruction) {
    const modal = document.createElement('div');
    modal.className = 'auth-modal';
    modal.style.display = 'block';

    const modalContent = document.createElement('div');
    modalContent.className = 'auth-modal-content';
    modalContent.style.textAlign = 'left';
    modalContent.style.width = '600px';

    modalContent.innerHTML = `
        <h3>${title}</h3>
        <p>Copy the content below and follow the instructions to update your blog.</p>
        <textarea style="width: 100%; height: 300px; font-family: monospace;" readonly>${instruction}</textarea>
        <div class="modal-actions">
            <button class="cancel">Close</button>
        </div>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.querySelector('.cancel').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
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