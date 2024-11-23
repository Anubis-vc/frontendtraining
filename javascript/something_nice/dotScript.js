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
updateTimes();
setInterval(updateTimes, 1000);
// function getDotSize(totalDots) {
// 	if (totalDots <= 100) {
// 		return 14;
// 	}
// 	else if (totalDots <= 500) {
// 		return 12;
// 	}
// 	else if (totalDots <= 1000) {
// 		return 8;
// 	}
// 	else {
// 		return 4;
// 	}
// }

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

function addDays(date, days) {
	const newDate = new Date(date);
	newDate.setDate(newDate.getDate() + days);
	const dateString = newDate.toDateString().split(' ');
	const shortDate = `${dateString[1]} ${dateString[2]}`;
	return shortDate;
}

function createDots(totalDots) {
    const container = document.getElementById('dotContainer');
    const halfPoint = Math.ceil(totalDots / 2);
    
	// const dotSize = getDotSize(totalDots);
	// container.style.setProperty('--dotSize', `${dotSize}px`)
    container.innerHTML = '';
    
	const tooltip = document.getElementById("tooltip");

    // Create all dots
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('div');
		const dotColor = findDotColor(i);
        dot.className = `dot ${dotColor}`;
        
        // Add tooltip showing dot date. Was not working using default methods.
		// If you want something done right. Do it yourself smh. 
		dot.addEventListener('mouseover', (e) => {
			const rect = e.target.getBoundingClientRect();
			const label = addDays(jan1, i);
			tooltip.textContent = label;
			tooltip.style.display = 'block';

			tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
			tooltip.style.top = `${rect.top - tooltip.offsetHeight - 5}px`;
        });
        dot.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
        
        container.appendChild(dot);
    }
    
    // Adjust container size based on number of dots, THIS IS WHAT'S DESTROYING YOUR MINSIZE
    // const dotsPerRow = Math.ceil(Math.sqrt(totalDots));
    // container.style.minWidth = (dotsPerRow * 30) + 'px';
}

createDots(366);

window.addEventListener('resize', () => {
    const currentDots = document.querySelectorAll('.dot').length;
    createDots(currentDots);
});