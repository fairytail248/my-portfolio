const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const introImage = document.querySelector('.intro__img');

// Navigation toggle functionality
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Skill buttons animation (random delays for organic movement)
document.querySelectorAll('.skill-btn').forEach((btn, index) => {
    btn.style.animationDelay = `${Math.random() * 2}s`;
});

// Redirect to LinkedIn URL when clicking the portfolio-02.png image
if (introImage && introImage.src.includes('portfolio-02.png')) {
    introImage.addEventListener('click', () => {
        window.location.href = 'https://www.linkedin.com/posts/venkat-narendra-reddy-646307249_activity-7231183611125719041-waRl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1yptYBpaW_vhxdmU4UuoAxwmnN95wrNqY';
    });
}


if (introImage && introImage.src.includes('portfolio-01.png')) {
    introImage.addEventListener('click', () => {
        window.location.href = 'https://www.linkedin.com/posts/venkat-narendra-reddy-646307249_activity-7231183611125719041-waRl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1yptYBpaW_vhxdmU4UuoAxwmnN95wrNqY';
    });
}

if (introImage && introImage.src.includes('portfolio-03.png')) {
    introImage.addEventListener('click', () => {
        window.location.href = 'https://www.linkedin.com/posts/venkat-narendra-reddy-646307249_activity-7231183611125719041-waRl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1yptYBpaW_vhxdmU4UuoAxwmnN95wrNqY';
    });
}

if (introImage && introImage.src.includes('portfolio-04.png')) {
    introImage.addEventListener('click', () => {
        window.location.href = 'https://www.linkedin.com/posts/venkat-narendra-reddy-646307249_activity-7231183611125719041-waRl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1yptYBpaW_vhxdmU4UuoAxwmnN95wrNqY';
    });
}