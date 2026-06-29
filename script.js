const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

const runCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; 

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target + (target === 150 ? '+' : '');
            }
        };

        // Simple Intersection Observer to trigger when scrolled into view
        let observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                updateCount();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}

// Initialize functions
navSlide();
runCounters();