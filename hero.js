document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    
    function adjustBackground() {
        // Get the viewport height and width
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        
        // Calculate the initial center position
        const initialPositionY = vh * 0.5; // Start at vertical center
        const initialPositionX = vw * 0.5; // Start at horizontal center
        
        // Calculate the adjustment based on scroll position
        const scrollAdjustment = window.scrollY * 0.3; // Adjust this value to control how quickly it moves
        
        // Set the background position
        hero.style.backgroundPosition = `${initialPositionX}px ${initialPositionY + scrollAdjustment}px`;
    }
    
    // Initial adjustment
    adjustBackground();
    
    // Adjust on window resize and scroll
    window.addEventListener('resize', adjustBackground);
    window.addEventListener('scroll', adjustBackground);
});
