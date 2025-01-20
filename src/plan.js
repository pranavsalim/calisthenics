// JavaScript to add interactivity and advanced features to the workout plan

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.complete-btn');
    const progressBar = document.createElement('div');
    const progressText = document.createElement('p');
    const resetButton = document.createElement('button');

    // Initialize Progress Bar
    progressBar.style.width = '0%';
    progressBar.style.height = '10px';
    progressBar.style.backgroundColor = '#7D5FFF';
    progressBar.style.transition = 'width 0.3s';

    progressText.textContent = 'Progress: 0%';
    progressText.style.color = '#fff';
    progressText.style.marginTop = '10px';

    resetButton.textContent = 'Reset Progress';
    resetButton.style.marginTop = '20px';
    resetButton.style.padding = '0.7rem 1.5rem';
    resetButton.style.backgroundColor = '#444';
    resetButton.style.color = '#fff';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '5px';
    resetButton.style.cursor = 'pointer';

    document.body.appendChild(progressBar);
    document.body.appendChild(progressText);
    document.body.appendChild(resetButton);

    // Load progress from localStorage
    let completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
    updateProgress();

    buttons.forEach((button, index) => {
        const day = button.closest('.day');

        // Check if this day was completed before
        if (completedDays.includes(index)) {
            markAsCompleted(day, button);
        }

        button.addEventListener('click', () => {
            if (!completedDays.includes(index)) {
                completedDays.push(index);
                localStorage.setItem('completedDays', JSON.stringify(completedDays));
                markAsCompleted(day, button);
                updateProgress();
            }
        });
    });

    resetButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset your progress?')) {
            completedDays = [];
            localStorage.setItem('completedDays', JSON.stringify(completedDays));
            buttons.forEach(button => {
                const day = button.closest('.day');
                day.style.backgroundColor = '#222';
                day.style.color = '#fff';
                button.textContent = 'Mark as Completed';
                button.disabled = false;
                button.style.backgroundColor = '#7D5FFF';
            });
            updateProgress();
        }
    });

    function markAsCompleted(day, button) {
        day.style.backgroundColor = '#7D5FFF';
        day.style.color = '#fff';
        button.textContent = 'Completed!';
        button.disabled = true;
        button.style.backgroundColor = '#444';
    }

    function updateProgress() {
        const percentage = Math.round((completedDays.length / buttons.length) * 100);
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `Progress: ${percentage}%`;
    }
});




  
  