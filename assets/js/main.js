function toggleChapter(chapterId) {
    const chapterList = document.getElementById(chapterId);
    const chapterTitle = chapterList.previousElementSibling;
    const chapter = chapterTitle.parentElement;
    
    if (chapterList.classList.contains('open')) {
        chapterList.classList.remove('open');
        chapter.classList.remove('open');
        chapterTitle.classList.remove('active');
    } else {
        document.querySelectorAll('.subchapter-list.open').forEach(list => {
            list.classList.remove('open');
            list.previousElementSibling.classList.remove('active');
            list.parentElement.classList.remove('open');
        });
        
        chapterList.classList.add('open');
        chapter.classList.add('open');
        chapterTitle.classList.add('active');
    }
}

// Show content section
function showContent(contentId) {
    document.querySelectorAll('.note-section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.querySelectorAll('.subchapter.active').forEach(sub => {
        sub.classList.remove('active');
    });
    
    const targetSection = document.getElementById(contentId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    event.target.classList.add('active');
}

function openModal(imageElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const img = imageElement.querySelector('img');
    
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

document.querySelector('.modal-content').addEventListener('click', function(event) {
    event.stopPropagation();
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website pembelajaran siap digunakan!');
});