// CTF Platform Application Logic

// State management
let solvedChallenges = JSON.parse(localStorage.getItem('solvedChallenges')) || [];
let totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;
let currentChallenge = null;

// DOM Elements
const challengesGrid = document.getElementById('challenges-grid');
const modal = document.getElementById('challenge-modal');
const closeBtn = document.querySelector('.close-btn');
const flagForm = document.getElementById('flag-form');
const flagInput = document.getElementById('flag-input');
const flagResult = document.getElementById('flag-result');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize the application
function init() {
    renderChallenges('all');
    updateStats();
    setupEventListeners();
    setupEasterEggs();
    
    // Store a flag in local storage for the Local Storage challenge
    if (!localStorage.getItem('secret_flag')) {
        localStorage.setItem('secret_flag', 'FLAG{local_storage_treasure}');
    }
    
    // Log a flag for the Console Logger challenge
    console.log('%c🚩 Secret Flag Found! ', 'background: #00ff41; color: #000; font-size: 20px; padding: 10px;');
    console.log('%cFLAG{console_log_secrets}', 'color: #00ff41; font-size: 16px;');
}

// Render challenges to the grid
function renderChallenges(category) {
    challengesGrid.innerHTML = '';
    
    const filteredChallenges = category === 'all' 
        ? challenges 
        : challenges.filter(c => c.category === category);
    
    filteredChallenges.forEach(challenge => {
        const card = createChallengeCard(challenge);
        challengesGrid.appendChild(card);
    });
}

// Create a challenge card element
function createChallengeCard(challenge) {
    const card = document.createElement('div');
    card.className = 'challenge-card';
    if (solvedChallenges.includes(challenge.id)) {
        card.classList.add('solved');
    }
    
    card.innerHTML = `
        <h3>${escapeHtml(challenge.title)}</h3>
        <div class="challenge-meta">
            <span class="challenge-category">${escapeHtml(challenge.category)}</span>
            <span class="challenge-points">${challenge.points} pts</span>
        </div>
        <p>${escapeHtml(challenge.description.substring(0, 100))}...</p>
    `;
    
    card.addEventListener('click', () => openChallenge(challenge));
    return card;
}

// Open challenge modal
function openChallenge(challenge) {
    currentChallenge = challenge;
    
    document.getElementById('modal-title').textContent = challenge.title;
    document.getElementById('modal-category').textContent = challenge.category;
    document.getElementById('modal-points').textContent = `${challenge.points} pts`;
    document.getElementById('modal-description').textContent = challenge.description;
    
    const hintSection = document.getElementById('modal-hint');
    if (challenge.hint) {
        hintSection.innerHTML = `<h4>💡 Hint</h4><p>${escapeHtml(challenge.hint)}</p>`;
        hintSection.style.display = 'block';
    } else {
        hintSection.style.display = 'none';
    }
    
    // Reset form
    flagInput.value = '';
    flagResult.textContent = '';
    flagResult.className = '';
    
    // Show solved status
    if (solvedChallenges.includes(challenge.id)) {
        flagResult.textContent = '✓ Already solved!';
        flagResult.className = 'success';
    }
    
    modal.classList.add('active');
    flagInput.focus();
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    currentChallenge = null;
}

// Handle flag submission
function submitFlag(e) {
    e.preventDefault();
    
    if (!currentChallenge) return;
    
    const submittedFlag = flagInput.value.trim();
    
    if (submittedFlag === currentChallenge.flag) {
        // Correct flag
        if (!solvedChallenges.includes(currentChallenge.id)) {
            solvedChallenges.push(currentChallenge.id);
            totalPoints += currentChallenge.points;
            
            // Save to localStorage
            localStorage.setItem('solvedChallenges', JSON.stringify(solvedChallenges));
            localStorage.setItem('totalPoints', totalPoints.toString());
            
            updateStats();
            renderChallenges(getCurrentFilter());
        }
        
        flagResult.textContent = '🎉 Correct! Flag captured!';
        flagResult.className = 'success';
        
        // Celebration effect
        createConfetti();
    } else {
        // Wrong flag
        flagResult.textContent = '❌ Incorrect flag. Try again!';
        flagResult.className = 'error';
        
        // Shake animation
        flagInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            flagInput.style.animation = '';
        }, 500);
    }
}

// Update statistics display
function updateStats() {
    document.getElementById('solved-count').textContent = solvedChallenges.length;
    document.getElementById('total-points').textContent = totalPoints;
    document.getElementById('scoreboard-points').textContent = totalPoints;
    document.getElementById('scoreboard-challenges').textContent = solvedChallenges.length;
}

// Get current active filter
function getCurrentFilter() {
    const activeBtn = document.querySelector('.filter-btn.active');
    return activeBtn ? activeBtn.dataset.category : 'all';
}

// Setup event listeners
function setupEventListeners() {
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    // Flag submission
    flagForm.addEventListener('submit', submitFlag);
    
    // Category filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderChallenges(btn.dataset.category);
        });
    });
}

// Setup Easter eggs for additional challenges
function setupEasterEggs() {
    // Add HTML comment with flag for "Inspect Element" challenge
    const comment = document.createComment(' 🚩 FLAG{inspect_element_master} - You found the hidden flag! ');
    document.body.insertBefore(comment, document.body.firstChild);
}

// Confetti celebration effect
function createConfetti() {
    const colors = ['#00ff41', '#ff0040', '#ffaa00', '#00ffff'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -10px;
            opacity: ${Math.random()};
            transform: rotate(${Math.random() * 360}deg);
            animation: fall ${2 + Math.random() * 3}s linear forwards;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
    
    // Add fall animation if not exists
    if (!document.getElementById('confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                }
            }
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Utility function to escape HTML and prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
