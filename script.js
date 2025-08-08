// Simple interactive elements for Phase 1
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (for responsive design)
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '☰';
    
    const nav = document.querySelector('nav ul');
    const header = document.querySelector('header');
    
    // Only add mobile menu if screen is small
    if (window.innerWidth <= 768) {
        header.insertBefore(mobileMenuButton, nav.parentNode);
        nav.style.display = 'none';
        
        mobileMenuButton.addEventListener('click', function() {
            if (nav.style.display === 'none' || !nav.style.display) {
                nav.style.display = 'flex';
            } else {
                nav.style.display = 'none';
            }
        });
    }
    
    // Tournament card hover effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Window resize handler
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.style.display = '';
            if (document.querySelector('.mobile-menu-button')) {
                document.querySelector('.mobile-menu-button').remove();
            }
        } else if (!document.querySelector('.mobile-menu-button')) {
            header.insertBefore(mobileMenuButton, nav.parentNode);
            nav.style.display = 'none';
        }
    });
});