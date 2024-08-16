function openVideo() {
    document.getElementById('videoOverlay').style.display = 'flex';
    document.getElementById('youtubeVideo').src = 'https://www.youtube.com/embed/6NC_ODHu5jg?autoplay=1&controls=0'; // Replace with your YouTube video ID
}

function closeVideo() {
    document.getElementById('videoOverlay').style.display = 'none';
    document.getElementById('youtubeVideo').src = ''; // Stop the video
}
window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};






// Functionality for rotating team members
document.addEventListener('DOMContentLoaded', function () {
    const members = document.querySelectorAll('.team-member1');
    let currentIndex = 0;
    let interval;

    function activateMember(index) {
        members.forEach((member, i) => {
            if (i === index) {
                member.classList.add('active');
            } else {
                member.classList.remove('active');
            }
        });
    }

    function startAutoHover() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % members.length;
            activateMember(currentIndex);
        }, 2000);
    }

    members.forEach((member, index) => {
        member.addEventListener('mouseover', function () {
            clearInterval(interval);
            activateMember(index);
        });

        member.addEventListener('mouseleave', function () {
            currentIndex = index;
            startAutoHover();
        });
    });

    activateMember(currentIndex);
    startAutoHover();
});



document.addEventListener('DOMContentLoaded', function() {
    // Target the element to update
    const counterElement = document.getElementById('download-counter');
    
    // Target value to reach
    const targetValue = 1220579;
    
    // Interval duration in milliseconds
    const duration = 2000;
    
    // Calculate the interval time
    const intervalTime = 50;
    
    // Calculate the increment step
    const incrementStep = targetValue / (duration / intervalTime);
    
    // Initialize the counter
    let currentValue = 0;
    
    // Create the interval function
    const interval = setInterval(() => {
        currentValue += incrementStep;
        
        // If currentValue exceeds targetValue, set it to targetValue and clear interval
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
        }
        
        // Update the counter display
        counterElement.textContent = Math.floor(currentValue).toLocaleString();
    }, intervalTime);
});




//for navbar
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});








