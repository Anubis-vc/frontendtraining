function createDots(totalDots) {
    const container = document.getElementById('dotContainer');
    const halfPoint = Math.ceil(totalDots / 2);
    
    container.innerHTML = '';
    
    // Create all dots
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i < halfPoint ? 'color1' : 'color2'}`;
        
        // Add tooltip showing dot number
        dot.title = `Dot ${i + 1}`;
        
        container.appendChild(dot);
    }
    
    // Adjust container size based on number of dots
    const approximateDotsPerRow = Math.ceil(Math.sqrt(totalDots));
    const minContainerWidth = (approximateDotsPerRow * 30) + 'px'; // 20px dot + 10px gap
    container.style.minWidth = minContainerWidth;
}

createDots(53);

window.addEventListener('resize', () => {
    // Recalculate layout if needed
    const currentDots = document.querySelectorAll('.dot').length;
    createDots(currentDots);
});