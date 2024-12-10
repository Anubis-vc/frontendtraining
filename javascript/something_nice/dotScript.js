const container = document.getElementById('dotContainer');
const tooltip = document.getElementById('tooltip');
const root = document.querySelector(':root');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');

const daysSpan = document.querySelector('h1 span');
const hrsSpan = document.querySelector('.time.hours span')
const minSpan = document.querySelector('.time.mins span');
const secSpan = document.querySelector('.time.seconds span');

const june1 = new Date('2024-06-01T00:00:00');
const jan1 = new Date('2024-01-01T00:00:00');
const april12 = new Date('2024-04-12T00:00:00');
const may26 = new Date('2024-05-26T00:00:00');
const xmas = new Date('2024-12-25T00:00:00');
const dec30 = new Date('2024-12-30T00:00:00');
const currentDate = new Date();

const ap12DotNum = Math.floor((april12 - jan1) / (1000 * 60 * 60 * 24));
const may26DotNum = Math.floor((may26 - jan1) / (1000 * 60 * 60 * 24));
const june1DotNum = Math.floor((june1 - jan1) / (1000 * 60 * 60 * 24));
const xmasDotNm = Math.floor((xmas - jan1) / (1000 * 60 * 60 * 24));
const dec30DotNum = Math.floor((dec30 - jan1) / (1000 * 60 * 60 * 24));
const currDotNum = Math.floor((currentDate - jan1) / (1000 * 60 * 60 * 24));

function updateProgress() {
	const now = new Date();
	const start = june1;
	const end = new Date('2024-12-30T09:15:00');
	const total = end - start;
	const current = now - start;
	const progress = Math.min(100, Math.max(0, (current / total) * 100));

	let startProgress = parseFloat(progressBar.style.width) || 0;
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress_fraction = Math.min(elapsed / duration, 1);
        
        // Calculate current progress using easeOutQuad easing
        const currentProgress = startProgress + (progress - startProgress) * (1 - Math.pow(1 - progress_fraction, 2));
        
        // Update both the bar and text
        progressBar.style.width = `${currentProgress}%`;
        progressText.textContent = `${Math.round(currentProgress)}%`;

        if (progress_fraction < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function updateTimes() {
	const now = new Date();
	const end = new Date('2024-12-30T09:15:00');
	const diffRemaining = end - now;
	const daysRemaining = Math.floor(diffRemaining / (1000 * 60 * 60 * 24));
	const hoursRemaining = Math.floor(diffRemaining / (1000 * 60 * 60));
	const minsRemaining = Math.floor(diffRemaining / (1000 * 60));
	const secondsRemaining = Math.floor(diffRemaining / (1000));

	daysSpan.innerHTML = daysRemaining;
	hrsSpan.innerHTML = hoursRemaining;
	minSpan.innerHTML = minsRemaining;
	secSpan.innerHTML = secondsRemaining;
}

function calculateDotSize() {
	const containerWidth = container.offsetWidth;
	if (containerWidth < 400) return 6;
	if (containerWidth < 768) return 8;
	if (containerWidth < 1024) return 10;
	return 12;
}

function calculateGapSize(dotSize) {
	return dotSize / 0.75;
}

function findDotColor(currDot) {
	if (currDot > may26DotNum && currDot <= may26DotNum + 4) {
		return "trip";
	}
	else if (currDot - 1 >= ap12DotNum && currDot - 1 <= june1DotNum) {
		return 'together';
	}
	else if (currDot === xmasDotNm) {
		return 'xmas';
	}
	else if (currDot >= dec30DotNum) {
		return 'back'
	}
	else if (currDot === currDotNum) {
		return 'curr';
	}
	else if (currDot > currDotNum) {
		return 'pending'
	}
	else {
		return 'complete';
	}
}

function formatDate(days) {
	const newDate = new Date(jan1);
	newDate.setDate(newDate.getDate() + days);
	const dateString = newDate.toDateString().split(' ');
	const shortDate = `${dateString[1]} ${dateString[2]}`;
	return shortDate;
}

function setupDotListeners(dot, index) {
	const handleMouseEnter = (e) => {
		const rect = e.target.getBoundingClientRect();
		const label = formatDate(index);
		
		tooltip.textContent = label;
		
		// Calculate positions
		const dotCenterX = rect.left + (rect.width / 2);
		const dotTopY = rect.top;
		
		tooltip.style.display = 'block';
		const tooltipRect = tooltip.getBoundingClientRect();
		
		let left = dotCenterX - (tooltipRect.width / 2);
		let top = dotTopY - tooltipRect.height - 8;
		
		// Adjust if tooltip would go off screen
		if (left < 0) left = 0;
		if (left + tooltipRect.width > window.innerWidth) {
			left = window.innerWidth - tooltipRect.width;
		}
		
		// If tooltip would go above viewport, show it below the dot instead
		if (top < 0) {
			top = rect.bottom + 8;
		}
		
		// Apply positions
		tooltip.style.left = `${left}px`;
		tooltip.style.top = `${top}px`;
		
		// Make visible with transition
		requestAnimationFrame(() => {
			tooltip.classList.add('visible');
		});
	};

	const handleMouseLeave = () => {
		tooltip.classList.remove('visible');
		setTimeout(() => {
			if (!tooltip.classList.contains('visible')) {
				tooltip.style.display = 'none';
			}
		}, 400); // Match transition duration
	};

	// Touch support
	const handleTouch = (e) => {
		e.preventDefault();
		const wasPreviouslyShown = tooltip.classList.contains('visible');
		
		// Hide any existing tooltip
		if (wasPreviouslyShown) {
			handleMouseLeave();
		} else {
			handleMouseEnter(e);
			// Auto-hide tooltip after 1.5 seconds on touch devices
			setTimeout(handleMouseLeave, 1500);
		}
	};

	// Add event listeners
	dot.addEventListener('mouseenter', handleMouseEnter);
	dot.addEventListener('mouseleave', handleMouseLeave);
	dot.addEventListener('touchstart', handleTouch);
}

function createDots(totalDots) {
    const dotSize = calculateDotSize();
	const gapSize = calculateGapSize(dotSize);
    
    container.innerHTML = '';

	root.style.setProperty('--dotSize', `${dotSize}px`);
	container.style.setProperty('--gapSize', `${gapSize}px`)

    // Create all dots
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('div');
		// const dotColor = existingDots[i] || findDotColor(i);
		const dotColor = findDotColor(i);
        dot.className = `dot ${dotColor}`;
		setupDotListeners(dot, i);
        
        container.appendChild(dot);
    }
}

function debounce (func, wait) {
	let timeout = null;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	}
}

function setupResizeObserver() {
	const resizeObserver = new ResizeObserver(entries => {
		for (let entry of entries) {
			if (entry.target === container) {
				// come back and fix this for different numbers of dots
				createDots(376);
			}
		}
	});
	
	resizeObserver.observe(container);
}

setupResizeObserver();
updateTimes();
updateProgress();
setInterval(() => {
	updateTimes();
	updateProgress();
}, 1000);

const endDate = new Date('2025-01-10T00:00:00');
totalDays = Math.floor((endDate - jan1) / (1000 * 60 * 60 * 24));
createDots(totalDays);