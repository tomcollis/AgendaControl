// Create Timer
function createTimerElement(item, time) {
    const timerElement = document.createElement('div');
    timerElement.className = 'timer-item';
    timerElement.innerHTML = `
        <h2>${item}</h2>
        <div class="time-display">
            <span class="minutes">00</span>:<span class="seconds">00</span>
        </div>
    `;
    return timerElement;
}

// Update Timer
function updateTimer(minutes, seconds, timerElement, totalDuration) {
    const minutesDisplay = timerElement.querySelector('.minutes');
    const secondsDisplay = timerElement.querySelector('.seconds');
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    const remainingTime = minutes * 60 + seconds;
    const remainingPercentage = (remainingTime / totalDuration) * 100;
    if (remainingPercentage <= 20) {
        timerElement.classList.add('warning');
    } else {
        timerElement.classList.remove('warning');
    }
}

// Start Timer
function startTimer(duration, timerElement) {
    let timer = duration;
    const totalDuration = duration;
    if (currentInterval) {
        clearInterval(currentInterval);
    }
    currentInterval = setInterval(() => {
        const minutes = parseInt(timer / 60, 10);
        const seconds = parseInt(timer % 60, 10);
        updateTimer(minutes, seconds, timerElement, totalDuration);
        if (--timer < 0) {
            clearInterval(currentInterval);
            if (currentItemIndex < agendaItems.length - 1) {
                currentItemIndex++;
                showNextItem();
            } else {
                document.getElementById('next-item').disabled = true;
            }
        }
    }, 1000);
}

// Next Agenda Item Button
document.getElementById('next-item').addEventListener('click', () => {
    if (currentItemIndex < agendaItems.length - 1) {
        currentItemIndex++;
        showNextItem();
    }
});

// Show Next Item
function showNextItem() {
    const container = document.getElementById('timer-container');
    container.innerHTML = '';
    const timerElement = createTimerElement(agendaItems[currentItemIndex], timeItems[currentItemIndex]);
    container.appendChild(timerElement);
    startTimer(timeItems[currentItemIndex] * 60, timerElement);

    // Disable Button for Last Item
    document.getElementById('next-item').disabled = (currentItemIndex === agendaItems.length - 1);
}
