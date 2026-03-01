$(document).ready(function() {

    // 1. LOADER
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

    // 3. HERO PARALLAX
    $(window).scroll(function() {
        let scrollPos = $(this).scrollTop();
        if (scrollPos < $(window).height()) {
            $('.hero-content').css({
                'transform': 'translateY(' + (scrollPos * 0.3) + 'px)',
                'opacity': 1 - (scrollPos / 700)
            });
        }
    });

    // 4. SMOOTH CARD ANIMATION LOGIC
    let ticking = false;

    $(window).on('scroll resize', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateCards();
                ticking = false;
            });
            ticking = true;
        }
    });

    function updateCards() {
        var $container = $('#hygiene-scroll-trigger');
        var $window = $(window);
        
        var containerTop = $container.offset().top;
        var containerHeight = $container.height();
        var windowHeight = $window.height();
        var scrollPos = $window.scrollTop();
        
        // Logic: Calculate progress through the section
        var startScroll = containerTop;
        var endScroll = containerTop + containerHeight - windowHeight;
        
        // Adding a small buffer to make transitions less jumpy at edges
        if (scrollPos >= startScroll && scrollPos <= endScroll) {
            var distanceScrolled = scrollPos - startScroll;
            var maxScrollable = endScroll - startScroll;
            var percentage = distanceScrolled / maxScrollable;
            
            var numberOfCards = 5;
            // Use math to snap to the specific card index
            var activeIndex = Math.floor(percentage * numberOfCards);
            
            // Ensure index stays within bounds
            activeIndex = Math.max(0, Math.min(activeIndex, numberOfCards - 1));
            
            // Only toggle classes if the index has changed (performance)
            $('.hygiene-card').each(function(index) {
                if (index === activeIndex) {
                    if (!$(this).hasClass('active')) $(this).addClass('active');
                } else {
                    if ($(this).hasClass('active')) $(this).removeClass('active');
                }
            });
            
        } else if (scrollPos < startScroll) {
            $('.hygiene-card').removeClass('active');
            $('#card-1').addClass('active');
        } else {
            $('.hygiene-card').removeClass('active');
            $('#card-5').addClass('active');
        }
    }

    // 5. SMOOTH ANCHOR SCROLLING
    $('a.nav-link[href^="#"], .btn-custom[href^="#"]').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 100, function(){ // Faster scroll for better feel
                window.location.hash = hash;
            });
        }
    });
});

// Auto update copyright year FOOTER
document.addEventListener('DOMContentLoaded', () => {
    const footerBottom = document.querySelector('.footer-bottom p');
    const currentYear = new Date().getFullYear();
    footerBottom.innerHTML = `&copy; ${currentYear} VERTEX SYSTEMS. All Rights Reserved.`;
});

function toggleFooterSection(id) {
    if (window.innerWidth <= 600) {
        const section = document.getElementById(id);
        section.classList.toggle('active');
    }
}
