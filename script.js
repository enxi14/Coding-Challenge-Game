const bugsContainer = document.getElementById('bugs');
const bugCount = 10; // Number of bugs

for (let i = 0; i < bugCount; i++) {
    const bug = document.createElement('div');
    bug.classList.add('bug');
    bugsContainer.appendChild(bug);

    bug.addEventListener('click', () => {
        bugsContainer.removeChild(bug);
        checkWinCondition();
    });
}

function checkWinCondition() {
    const remainingBugs = bugsContainer.getElementsByClassName('bug').length;
    if (remainingBugs === 0) {
        setTimeout(() => {
            alert('Congratulations! You debugged all the bugs!');
            location.reload(); // Reload the game
        }, 500);
    }
}
