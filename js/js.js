//  LOADER
    setTimeout(function() {
        $('#loader').fadeOut('slow', function() {
            $('body').css('overflow', 'auto');
        });
    }, 2000);

    // 2. NAVBAR SCROLL
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
        nav.style.padding = '12px 0';
    } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)';
        nav.style.padding = '20px 0';
    }
});

// Initialize Scan Button Animation
function initializeScan() {
    const btn = document.querySelector('.btn-scan');
    btn.innerHTML = "SCANNING...";
    btn.style.borderColor = "#ff0040";
    btn.style.color = "#ff0040";
    
    // Smooth scroll to next section after fake delay
    setTimeout(() => {
        document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
        // Reset button text after scroll
        setTimeout(() => { btn.innerHTML = "INITIALIZE SCAN"; btn.style.color = ""; btn.style.borderColor = ""; }, 1000);
    }, 1500);
}

// Function to handle scroll animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.intro-text-box, .intro-image-box');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Kab dikhna shuru ho
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('reveal');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initial check in case user starts in middle of page
revealOnScroll();

function revealSymptoms() {
    const cards = document.querySelectorAll('.symptom-card-wrapper');
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom) {
            // Har card ko thora delay dena (Stagger effect)
            setTimeout(() => {
                card.classList.add('reveal-up');
            }, index * 150); 
        }
    });
}

window.addEventListener('scroll', revealSymptoms);
// Initial check
revealSymptoms();

function revealPrevention() {
    const revealsLeft = document.querySelectorAll('.reveal-left');
    const revealsRight = document.querySelectorAll('.reveal-right');
    const windowHeight = window.innerHeight;

    revealsLeft.forEach(el => {
        if (el.getBoundingClientRect().top < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
            el.style.transition = "1s ease-out";
        }
    });

    revealsRight.forEach(el => {
        if (el.getBoundingClientRect().top < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "scale(1)";
            el.style.transition = "1s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        }
    });
}

// Set initial styles for animation
document.querySelectorAll('.reveal-left').forEach(el => { el.style.opacity = "0"; el.style.transform = "translateX(-50px)"; });
document.querySelectorAll('.reveal-right').forEach(el => { el.style.opacity = "0"; el.style.transform = "scale(0.8)"; });

window.addEventListener('scroll', revealPrevention);

// Form Submission Effect
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-cyber');
    const originalText = btn.innerText;
    
    btn.innerText = "TRANSMITTING...";
    btn.style.borderColor = "var(--accent-red)";
    
    setTimeout(() => {
        alert("Transmission Received. Secure channel established.");
        btn.innerText = originalText;
        this.reset();
    }, 2000);
});

// Smooth Scroll for Footer Links
document.querySelectorAll('.footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function initializeScan() {
    const btn = document.querySelector('.btn-scan');
    btn.innerHTML = "SCANNING ARCHIVE...";
    btn.style.borderColor = "#ff0040";
    
    setTimeout(() => {
        document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => { btn.innerHTML = "INITIALIZE SCAN"; }, 1000);
    }, 1500);
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.protocol-card');
    
    window.addEventListener('scroll', () => {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if(cardTop < window.innerHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    });
});