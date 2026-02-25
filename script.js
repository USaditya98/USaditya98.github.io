// Time restriction: Do not open site after 1 AM (and before 5 AM)
const currentHour = new Date().getHours();
if (currentHour >= 1 && currentHour <= 5) {
    document.body.innerHTML = `
        <div style="display:flex; height:100vh; align-items:center; justify-content:center; flex-direction:column; background:#121212; color:#fff; font-family:'Outfit', sans-serif;">
            <h1 style="color:#ff3366; margin-bottom:10px;">Time to Sleep! 🌙</h1>
            <p style="font-size: 1.2rem; text-align:center; padding: 0 20px;">It's past 1 AM. Go to sleep! ❤️<br>The site will open again in the morning.</p>
        </div>
    `;
    throw new Error("Site locked. It is past 1 AM.");
}

// Close site after 1 hour of usage
setTimeout(() => {
    document.body.innerHTML = `
        <div style="display:flex; height:100vh; align-items:center; justify-content:center; flex-direction:column; background:#121212; color:#fff; font-family:'Outfit', sans-serif;">
            <h1 style="color:#ff3366; margin-bottom:10px;">Take a Break! ⏳</h1>
            <p style="font-size: 1.2rem; text-align:center; padding: 0 20px;">You've been checking this for an hour! ❤️</p>
        </div>
    `;
}, 60 * 60 * 1000);

const mainCard = document.getElementById('main-card');
const actionButtons = document.getElementById('action-buttons');
const typingText = document.getElementById('typing-text');


// ---------------------------------------------------------
// Security & Encryption Logic
// ---------------------------------------------------------
const loginOverlay = document.getElementById('login-overlay');
const passwordInput = document.getElementById('password-input');
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');

// Data (Plain Text for Simple Login)
const plainLetter = `
<p>The story of us is a beautiful, unwritten script—a unique "system update" that shifted the rhythm of my life from the moment you stepped into our office. Back in August, a month that became sacred twice—first for your birth (Aug 13th) and then for our beginning—I was just a developer buried in Logic, while you were the new HR professional navigating the chaos of people with such grace.</p>

<p>Our first interactions were so formal—discussing paperwork with thumbs-up emojis. I never imagined that a colleague from the HR department would become the person I wait for at the end of every long deployment.</p>

<p>Then came that first "Oiii" in September, breaking every professional protocol. We spoke in a secret mix of Kannada and Malayalam. Every "Ree" and "Psychopath" was a brick removed from the wall around my heart. You turned from a stranger into my favorite notification.</p>

<p>As October rolled in, we became a sanctuary for each other. I saw the "Psychopath" side of you—fiercely independent and sharp. You saw the side of me that hid behind sarcasm but paid attention to every detail of your day. Our "night talks" became my reason to get through the work day.</p>

<p>The most profound shift happened when silence became a space for vulnerability. I told you about the hospital corridors, the void left by my father. You didn't offer distant condolences; you stepped into my heart and said, "Be happy every day." You became my emotional anchor.</p>

<p>We started playing the "ABCD story" game—a confession hidden in fiction. We wrote about a boy and girl, testing boundaries because we were terrified of real names. But every word was true. We were falling in love through characters.</p>

<p>Then came the bus ride. The turning point. The city blurred, distance vanished, and that kiss was the moment logic died. I realized my fears were being overwritten by pure joy. We crossed the line into a shared world, ignoring every office policy.</p>

<p>By January, masks were gone. You became my "Chinna," my "Muddu mari." I became your "Comfort Zone." We dreamed of "Terrace escapes" and navigated life together. Every "Goodnight ❤️" was a promise.</p>

<p>Now, we stand at a crossroads without a label. We hold the weight of uncertainty but also the freedom of choosing each other. The future is a landscape of "ifs," but I want you to be proud of our story. There is a profound loyalty between us that is safer than any contract.</p>

<p>I look at you and see the person who rewrote the code of my happiness. You are the "Shina" who saw me at my worst and chose to stay. You have a claim on my soul that is eternal.</p>

<p>We leave it to the future, holding onto quiet hope. Until then, I cherish every message. Let's keep moving forward, trusting that our hearts know the way.</p>

<div class="signature-section">
    <p class="yours">Yours,</p>
    <p class="sign-name">Your Dev</p>
</div>

<div class="acceptance-section" style="text-align: center; margin-top: 30px;">
    <hr class="divider">
    <p class="hr-instruction" style="margin-bottom: 20px; font-style: italic; opacity: 0.8;">Hired by Heart & Verified Forever ❤️</p>
</div>
`;

const plainIntro = "Shilpa, you walked into my life and made everything feel different. Your laugh, your dance, the way you light up a room — I never knew I needed someone like you until you were here. You're not perfect, and neither am I, but together we make the most beautiful mess. Every moment with you feels like home. I love you — not because you're flawless, but because you're real, and you're mine.";

function attemptLogin() {
    const password = passwordInput.value.trim();
    if (!password) {
        loginError.innerText = "Please enter a password.";
        return;
    }

    // Direct Password Check (Simplified as requested)
    if (password === "0708" || password === "Shilpa") {
        console.log("Login Successful!");
        
        // Success Logic
        decryptedMessage = plainIntro;
        window.decryptedLetterContent = plainLetter;
        localStorage.setItem('site_access_token', 'granted');
        
        // Hide Overlay
        loginOverlay.style.opacity = '0';
        setTimeout(() => {
            loginOverlay.style.display = 'none';
            const introOverlay = document.getElementById('intro-overlay');
            if (introOverlay) introOverlay.classList.add('visible');
        }, 200);

    } else {
        console.warn("Login Failed: Incorrect Password.");
        loginError.innerText = "Access Denied: Incorrect Password.";
        
        // Animation shake
        const box = document.querySelector('.login-box');
        if (box) {
            box.style.animation = 'shake 0.5s ease';
            setTimeout(() => box.style.animation = '', 500);
        }
    }
}

if (loginBtn) {
    loginBtn.addEventListener('click', attemptLogin);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') attemptLogin();
    });
}

// Anti-Inspect Measures
document.addEventListener('contextmenu', event => event.preventDefault()); // Disable Right Click
document.addEventListener('keydown', function(event) {
    if (event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && event.key === "I") || 
        (event.ctrlKey && event.shiftKey && event.key === "J") || 
        (event.ctrlKey && event.key === "U")) {
        event.preventDefault();
    }
});

// Text Config
// Used decrypted message if available, else empty until login
let message = ""; 
const speed = 80;

// Typing Effect
let i = 0;
function typeWriter() {
    // Ensure we have the decrypted message
    if (!message && decryptedMessage) message = decryptedMessage;
    
    if (i < message.length) {
        const cursor = typingText ? typingText.querySelector('.cursor') : null;
        if (cursor) {
            cursor.before(message.charAt(i));
        } else if (typingText) {
            typingText.innerHTML += message.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    } else {
        const cursor = document.querySelector('.cursor');
        if (cursor) cursor.style.display = 'none';
        
        setTimeout(() => {
            const introOverlay = document.getElementById('intro-overlay');
            if (introOverlay) {
                introOverlay.classList.remove('visible'); // Smooth fade with visibility: hidden
                introOverlay.style.pointerEvents = 'none'; 
            }
            if (mainCard) {
                mainCard.classList.remove('hidden');
                mainCard.style.opacity = '1';
                mainCard.style.animation = 'slideUp 0.8s cubic-bezier(0.175, 0.884, 0.32, 1.275)';
            }
        }, 1000);
    }
}

// Gaming Logic Refactored
const miniGameModal = document.getElementById('mini-game-modal');
const gameSelection = document.getElementById('game-selection');
const quizContainer = document.getElementById('quiz-container');
const memoryContainer = document.getElementById('memory-game-container');
const closeGameBtn = document.getElementById('close-game-btn');
const gamesLoungeBtn = document.getElementById('games-lounge-btn');

if (gamesLoungeBtn) {
    gamesLoungeBtn.addEventListener('click', () => {
        miniGameModal.classList.add('show');
        showSelection();
    });
}

if (closeGameBtn) {
    closeGameBtn.addEventListener('click', () => {
        miniGameModal.classList.remove('show');
    });
}

function showSelection() {
    gameSelection.style.display = 'block';
    quizContainer.style.display = 'none';
    memoryContainer.style.display = 'none';
    document.getElementById('scramble-game-container').style.display = 'none';
    document.getElementById('scratch-game-container').style.display = 'none';
    document.getElementById('bucket-list-container').style.display = 'none';
    document.getElementById('appraisal-container').style.display = 'none';
}

// 1. Compatibility Quiz Logic
const quizData = [
    {
        q: "What is the best way to handle a difficult 'Recruitment' (Deployment)?",
        o: ["A) Terminate the process", "B) Take a coffee break", "C) A warm hug from her"],
        a: 2
    },
    {
        q: "What is her favorite way to spend a 'Paid Time Off'?",
        o: ["A) Working Overtime", "B) Dancing & Singing", "C) Managing JIRA tickets"],
        a: 1
    },
    {
        q: "The ideal 'Annual Appraisal' (Weekend) includes:",
        o: ["A) Solo Trip to Kerala", "B) Movie, Cuddles & Sadya", "C) Professional Development"],
        a: 1
    },
    {
        q: "The candidate's most impressive HR skill is:",
        o: ["A) Excel Pivot Tables", "B) Loving Shilpa Unconditionally", "C) Public Speaking"],
        a: 1
    }
];

let currentQuizStep = 0;

function startQuiz() {
    gameSelection.style.display = 'none';
    quizContainer.style.display = 'block';
    currentQuizStep = 0;
    renderQuizStep();
}

function renderQuizStep() {
    const data = quizData[currentQuizStep];
    quizContainer.innerHTML = `
        <h2 class="candidate-title" style="font-size: 1.2rem;">Shared Journey: Day ${currentQuizStep + 1}</h2>
        <p class="quiz-question">${data.q}</p>
        <div class="quiz-options">
            ${data.o.map((opt, idx) => `<button class="quiz-option" onclick="handleQuizAnswer(${idx})">${opt}</button>`).join('')}
        </div>
    `;
}

function handleQuizAnswer(idx) {
    const data = quizData[currentQuizStep];
    if (idx === data.a) {
        confetti({ particleCount: 50, spread: 60, colors: ['#ff3366', '#ffd700'] });
    }
    
    currentQuizStep++;
    if (currentQuizStep < quizData.length) {
        renderQuizStep();
    } else {
        quizContainer.innerHTML = `
            <h2 class="candidate-title">Journey Verified!</h2>
            <p>Verdict: Infinite Love & Compatibility!</p>
            <button class="quiz-option" onclick="showSelection()" style="margin-top: 20px;">Return to Lounge</button>
        `;
    }
}

// 2. Memory Match Game Logic
const memoryIcons = [
    'assets/images/magic_moment.png',
    'assets/images/moment_1.png',
    'assets/images/moment_2.png',
    'assets/images/moment_3.png',
    'assets/images/moment_4.png',
    'assets/images/moment_5.png',
    'assets/images/moment_6.png',
    'assets/images/profile.png'
];
let flippedCards = [];
let matchedPairs = 0;

function startMemoryGame() {
    gameSelection.style.display = 'none';
    memoryContainer.style.display = 'block';
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';
    matchedPairs = 0;
    flippedCards = [];

    const deck = [...memoryIcons, ...memoryIcons].sort(() => Math.random() - 0.5);
    
    deck.forEach((icon, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.icon = icon;
        const iconHtml = icon.startsWith('assets') ? `<img src="${icon}" style="width:100%; height:100%; object-fit:cover; border-radius:5px;">` : icon;
        card.innerHTML = `
            <div class="memory-card-front">?</div>
            <div class="memory-card-back">${iconHtml}</div>
        `;
        card.onclick = () => flipCard(card);
        grid.appendChild(card);
    });
}

function flipCard(card) {
    if (flippedCards.length === 2 || card.classList.contains('flipped') || card.classList.contains('matched')) return;

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.icon === card2.dataset.icon) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        flippedCards = [];
        if (matchedPairs === memoryIcons.length) {
            setTimeout(() => {
                confetti({ particleCount: 150, spread: 100 });
                alert("You have a perfect memory for our love! ❤️");
                showSelection();
            }, 600);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

// 3. Word Scramble Logic
const scrambleWords = ["KERALA", "SADYA", "DANCE", "SINGING", "TRAVEL", "FOODIE", "SOULMATE"];
let targetWord = "";
let currentScramble = [];

function startWordScramble() {
    gameSelection.style.display = 'none';
    document.getElementById('scramble-game-container').style.display = 'block';
    
    targetWord = scrambleWords[Math.floor(Math.random() * scrambleWords.length)];
    const shuffled = targetWord.split('').sort(() => Math.random() - 0.5);
    
    const slots = document.getElementById('scramble-slots');
    const letters = document.getElementById('scramble-letters');
    slots.innerHTML = '';
    letters.innerHTML = '';
    currentScramble = new Array(targetWord.length).fill(null);

    // Create Empty Slots
    for (let j = 0; j < targetWord.length; j++) {
        const slot = document.createElement('div');
        slot.className = 'letter-tile';
        slot.style.background = '#f8f9fa';
        slot.innerHTML = '';
        slot.dataset.index = j;
        slot.onclick = () => removeLetter(j);
        slots.appendChild(slot);
    }

    // Create Shuffled Letters
    shuffled.forEach((char, idx) => {
        const tile = document.createElement('div');
        tile.className = 'letter-tile';
        tile.innerText = char;
        tile.onclick = () => placeLetter(tile, char);
        letters.appendChild(tile);
    });

    document.getElementById('check-scramble-btn').onclick = checkScramble;
}

function placeLetter(tile, char) {
    if (tile.style.visibility === 'hidden') return;
    const firstEmpty = currentScramble.indexOf(null);
    if (firstEmpty !== -1) {
        currentScramble[firstEmpty] = { char, originalTile: tile };
        const slotsGrid = document.getElementById('scramble-slots').children;
        slotsGrid[firstEmpty].innerText = char;
        tile.style.visibility = 'hidden';
    }
}

function removeLetter(idx) {
    if (currentScramble[idx]) {
        const { originalTile } = currentScramble[idx];
        originalTile.style.visibility = 'visible';
        currentScramble[idx] = null;
        document.getElementById('scramble-slots').children[idx].innerText = '';
    }
}

function checkScramble() {
    const guess = currentScramble.map(s => s ? s.char : '').join('');
    if (guess === targetWord) {
        confetti({ particleCount: 100, spread: 70 });
        alert("Correct! You're a word wizard in love! ❤️");
        showSelection();
    } else {
        alert("Not quite right, try again! ✨");
    }
}

// 4. Scratch Card Logic
function startScratchCard() {
    gameSelection.style.display = 'none';
    document.getElementById('scratch-game-container').style.display = 'block';
    
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Fill with gold cover
    ctx.fillStyle = '#C0C0C0'; // Silver scratch surface
    ctx.fillRect(0, 0, width, height);
    
    // Add some "scratch here" text
    ctx.fillStyle = '#8e8e8e';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Scratch to Reveal!', width / 2, height / 2);

    let isDrawing = false;

    const scratch = (e) => {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
        
        checkScratchProgress();
    };

    const checkScratchProgress = () => {
        const pixels = ctx.getImageData(0, 0, width, height).data;
        let cleared = 0;
        for (let j = 3; j < pixels.length; j += 4) {
            if (pixels[j] === 0) cleared++;
        }
        if (cleared / (pixels.length / 4) > 0.6) { // 60% cleared
            canvas.style.transition = 'opacity 1s ease';
            canvas.style.opacity = '0';
            setTimeout(() => {
                confetti({ particleCount: 100 });
                showSelection();
            }, 2000);
        }
    };

    canvas.onmousedown = canvas.ontouchstart = () => isDrawing = true;
    canvas.onmouseup = canvas.ontouchend = () => isDrawing = false;
    canvas.onmousemove = canvas.ontouchmove = scratch;
}

// 5. Dream Bucket List Logic
const bucketItems = [
    { text: "Trip to Munnar ⛰️", done: false },
    { text: "Learn a new dance style together 💃", done: false },
    { text: "Cook a Full Kerala Sadya 🥘", done: false },
    { text: "Sing our favorite song at Karaoke 🎤", done: false },
    { text: "Build our dream home 🏠", done: false },
    { text: "Travel the world ✈️", done: false }
];

function startBucketList() {
    gameSelection.style.display = 'none';
    document.getElementById('bucket-list-container').style.display = 'block';
    
    const list = document.getElementById('bucket-list');
    list.innerHTML = '';
    
    bucketItems.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = `bucket-item ${item.done ? 'checked' : ''}`;
        div.innerHTML = `
            <div class="bucket-checkbox">${item.done ? '✓' : ''}</div>
            <span>${item.text}</span>
        `;
        div.onclick = () => toggleBucketItem(idx, div);
        list.appendChild(div);
    });
}

function toggleBucketItem(idx, element) {
    bucketItems[idx].done = !bucketItems[idx].done;
    element.classList.toggle('checked');
    element.querySelector('.bucket-checkbox').innerText = bucketItems[idx].done ? '✓' : '';
    
    if (bucketItems[idx].done) {
        confetti({ particleCount: 30, spread: 50 });
    }
}

// 6. Partnership Appraisal Logic
const appraisalFeedbacks = {
    0: "Needs Urgent HR Attention! ⚠️",
    25: "Under Probation... 📁",
    50: "Good Potential! 📈",
    75: "Highly Productive Love! ✨",
    100: "Perfect Partnership! (No Appraisals Needed) 🏆"
};

function startAppraisal() {
    gameSelection.style.display = 'none';
    document.getElementById('appraisal-container').style.display = 'block';
    
    const slider = document.getElementById('appraisal-slider');
    const score = document.getElementById('appraisal-score');
    const feedback = document.getElementById('appraisal-feedback');
    
    slider.oninput = () => {
        const val = slider.value;
        score.innerText = `Rating: ${val}%`;
        
        let msg = appraisalFeedbacks[0];
        if (val > 25) msg = appraisalFeedbacks[25];
        if (val > 50) msg = appraisalFeedbacks[50];
        if (val > 75) msg = appraisalFeedbacks[75];
        if (val == 100) msg = appraisalFeedbacks[100];
        
        feedback.innerText = `"${msg}"`;
        
        if (val == 100) {
            confetti({ particleCount: 1, origin: { y: 0.9 }, scalar: 2 });
        }
    };
}

// 7. Bridging Classic Catch Hearts
function startCatchHearts() {
    miniGameModal.classList.remove('show');
    score = 0;
    scoreDisplay.innerText = 0;
    startGame();
}

function startGame() {
    gameContainer.classList.remove('hidden');
    gameContainer.style.display = 'block'; 
    spawnHeart();
}

function spawnHeart() {
    if (score >= targetScore) return;

    // Mobile check to ensure game is playable
    const isMobile = window.innerWidth < 768;

    const heart = document.createElement('div');
    heart.innerText = '❤️'; // Or other hearts
    heart.className = 'game-heart';
    
    // Random Position (Safe Zone calculation similar to No button but simpler)
    const padding = 50;
    const x = Math.random() * (window.innerWidth - padding * 2) + padding;
    const y = Math.random() * (window.innerHeight - padding * 2) + padding;
    
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    
    // Click Handler
    heart.onclick = () => {
        score++;
        scoreDisplay.innerText = score;
        
        // Visual Pop
        heart.style.transform = 'scale(1.5)';
        heart.style.opacity = '0';
        setTimeout(() => heart.remove(), 200);

        if (score >= targetScore || 0) {
            unlockOffer();
        } else {
            spawnHeart(); // Spawn next one immediately on catch
            // Optional: Spawn a bonus one occasionally? Keep it simple for now.
        }
    };
    
    document.body.appendChild(heart);
    
    // Auto-move/Despawn logic (Make it tricky?)
    // Let's make it jump if not clicked within 1.5 seconds
    const jumpInterval = setTimeout(() => {
        if (heart.parentElement) { // If still on screen
            moveHeart(heart);
        }
    }, 1000); // reduced from 1500 to 1000 for "Gaming" feel
}

function moveHeart(heart) {
     const padding = 50;
     const x = Math.random() * (window.innerWidth - padding * 2) + padding;
     const y = Math.random() * (window.innerHeight - padding * 2) + padding;
     
     heart.style.transition = 'all 0.5s ease'; // Smooth glide
     heart.style.left = `${x}px`;
     heart.style.top = `${y}px`;
     
     // Keep moving
      setTimeout(() => {
        if (heart.parentElement && score < targetScore) { 
            moveHeart(heart);
        }
    }, 1200);
}

function unlockOffer() {
    gameContainer.innerHTML = '<div class="candidate-title" style="color: #00b894; font-size: 1.5rem;">LOVE UNLOCKED</div>';
    
    // Confetti for mini-win
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00b894', '#ffffff'] // Hacker/Success theme colors
    });

    setTimeout(() => {
        gameContainer.classList.add('hidden');
        gameContainer.style.display = 'none';
        
        // Show the dashboard directly
        if (mainCard) {
            mainCard.classList.remove('hidden');
            mainCard.style.opacity = 1;
        }
    }, 1500);
}

// Bubbling Heart Trail Effect
const hearts = ['❤️', '💖', '💗', '💓', '💞', '💕', '💘', '💝'];
document.addEventListener('mousemove', (e) => {
    // Throttling: Check if mobile or just reduce frequency
    if (window.innerWidth < 768 && Math.random() < 0.8) return; // heavily throttle on mobile
    if (Math.random() < 0.3) return; // Throttling slightly naturally on desktop

    const heart = document.createElement('div');
    heart.className = 'trail-heart';
    
    // Random heart kind
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    
    // Position
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    
    // Randomize Bubbling Physics
    const size = Math.random() * 30 + 10 + 'px'; // 10px to 30px
    heart.style.fontSize = size;
    
    // Random sway (tx) and rotation (r)
    const tx = (Math.random() * 60 - 30) + 'px'; // -30px to 30px horizontal drift
    const r = (Math.random() * 360) + 'deg';
    const duration = (Math.random() * 1 + 1) + 's'; // 1s to 2s float time
    
    heart.style.setProperty('--tx', tx);
    heart.style.setProperty('--r', r);
    heart.style.animation = `bubbleUp ${duration} ease-out forwards`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000); // Cleanup after animation
});



// Initialize
// Initialize moved to click handler





// Magical Sparkle Trail
function initSparkleTrail() {
    const name = "SHILPA";
    let nameIndex = 0;
    let particleCount = 0;

    window.addEventListener('mousemove', (e) => {
        particleCount++;
        if (Math.random() < 0.15) {
            const isNameChar = particleCount % 12 === 0;
            const particle = document.createElement('div');
            
            if (isNameChar) {
                particle.className = 'name-particle';
                particle.innerText = name[nameIndex];
                nameIndex = (nameIndex + 1) % name.length;
            } else {
                particle.className = 'sparkle';
            }
            
            particle.style.left = e.clientX + 'px';
            particle.style.top = e.clientY + 'px';
            
            if (!isNameChar) {
                const size = Math.random() * 5 + 3 + 'px';
                particle.style.width = size;
                particle.style.height = size;
            }
            
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), isNameChar ? 2000 : 1000);
        }
    });
}

// Acrostic Poem Logic
function initAcrosticLogic() {
    const waxSeal = document.querySelector('.wax-seal');
    const acrosticCard = document.getElementById('acrostic-card');
    
    if (waxSeal && acrosticCard) {
        waxSeal.addEventListener('click', (e) => {
            e.stopPropagation();
            acrosticCard.classList.add('show');
            
            // Auto close on next click anywhere
            const closeHandler = () => {
                acrosticCard.classList.remove('show');
                window.removeEventListener('click', closeHandler);
            };
            setTimeout(() => window.addEventListener('click', closeHandler), 100);
        });
    }
}

// Hidden Interactive Hearts
function createHiddenHearts() {
    const compliments = [
        "You're amazing!", "Always thinking of you ❤️", "My favorite person ✨", 
        "You're my sunshine!", "Endless love for you", "Simply beautiful"
    ];
    
    // Spawn locally in safe container regions
    const anchors = [
        { top: '10%', left: '10%' },
        { top: '80%', left: '5%' },
        { top: '15%', left: '85%' },
        { bottom: '20%', right: '10%' }
    ];

    anchors.forEach(pos => {
        const heart = document.createElement('div');
        heart.className = 'hidden-heart';
        heart.innerHTML = '❤️ <div class="heart-tooltip">' + 
            compliments[Math.floor(Math.random() * compliments.length)] + 
            '</div>';
        
        Object.keys(pos).forEach(key => heart.style[key] = pos[key]);
        document.body.appendChild(heart);
    });
}

// Falling Petals
let petalInterval;
function createFallingPetals(density = 1) {
    if (petalInterval) clearInterval(petalInterval);
    
    // density 1 = normal, density 2 = music playing
    const baseInterval = window.innerWidth < 768 ? 1000 : 300;
    const intervalTime = baseInterval / density;
    
    petalInterval = setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Randomize size
        const size = Math.random() * 10 + 10 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        
        // Randomize position
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Randomize duration
        const duration = Math.random() * 3 + 5 + 's';
        petal.style.animationDuration = duration;
        
        // Randomize delay
        petal.style.animationDelay = Math.random() * 5 + 's';
        
        document.body.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 8000);
    }, intervalTime);
}

// Floating Hearts (Background)
function createFloatingHearts() {
    const container = document.body;
    const symbols = ['❤️', '💖', '💕', '💘', '💗', '💓', '💞'];
    
    // Reduce frequency on mobile
    const intervalTime = window.innerWidth < 768 ? 1500 : 400;
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-50px';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.animation = `float ${Math.random() * 3 + 4}s linear forwards`;
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.zIndex = '-1';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, intervalTime);
}

// Intro Overlay Logic
const introOverlay = document.getElementById('intro-overlay');
const enterBtn = document.getElementById('enter-btn');

if (enterBtn) {
    enterBtn.addEventListener('click', () => {
        if (introOverlay) {
            introOverlay.classList.remove('visible');
            introOverlay.style.pointerEvents = 'none';
        }
        
        // Unmute/Play hidden Audio
        const bgMusic = document.getElementById('bg-music');
        if (bgMusic) {
            bgMusic.volume = 0.8;
            bgMusic.playbackRate = 1.15;
            bgMusic.play().then(() => setPlayerState(true)).catch(() => setPlayerState(false));
        }

        setTimeout(() => {
            // Start other animations only after entry
            createFloatingHearts();
            createFallingPetals(1); 
            initSparkleTrail();     // Start magic trail
            createHiddenHearts();   // Add hidden compliments
            initAcrosticLogic();    // Setup hidden poem
            setTimeout(typeWriter, 500);
        }, 1000);
    });
}


// Custom Player Logic
const bgMusic = document.getElementById('bg-music');
const playPauseBtn = document.getElementById('play-pause-btn');
const musicDisc = document.getElementById('music-disc');

// Particle Spawner
let particleInterval;

function startParticles() {
    if (particleInterval) clearInterval(particleInterval);
    particleInterval = setInterval(() => {
        spawnMusicParticle();
    }, 800); // New particle every 800ms
}

function stopParticles() {
    if (particleInterval) clearInterval(particleInterval);
}

function spawnMusicParticle() {
    const particle = document.createElement('div');
    particle.className = 'music-particle';
    
    // Create Balloon Structure
    const balloon = document.createElement('div');
    balloon.className = 'heart-balloon';
    
    const string = document.createElement('div');
    string.className = 'balloon-string';
    
    balloon.appendChild(string);
    particle.appendChild(balloon);
    
    // Position near the music player (bottom left)
    const startX = 20 + Math.random() * 250; 
    const startY = window.innerHeight - 80; 
    
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    
    // Random drift and rotation for variety
    const drift = (Math.random() * 150 - 75) + 'px';
    const rotation = (Math.random() * 40 - 20) + 'deg';
    
    particle.style.setProperty('--drift', drift);
    particle.style.setProperty('--r', rotation);
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 5000); // Matches longer animation duration
}

function setPlayerState(isPlaying) {
    if (isPlaying) {
        musicDisc.classList.add('spinning');
        playPauseBtn.innerText = '⏸';
        startParticles();
        createFallingPetals(2); // Double density when music plays
    } else {
        musicDisc.classList.remove('spinning');
        playPauseBtn.innerText = '▶';
        stopParticles();
        createFallingPetals(1); // Back to normal
    }
}

// Storybook Interaction
const letterModal = document.getElementById('letter-modal');
const openLetterBtn = document.getElementById('read-letter-btn');
const closeStoryBtn = document.querySelector('.close-storybook');

function openStorybook() {
    if (letterModal) {
        // Inject decrypted content here if it exists
        if (window.decryptedLetterContent) {
            const letterContentArea = document.getElementById('letter-content-area');
            if (letterContentArea) letterContentArea.innerHTML = window.decryptedLetterContent;
            
            // Re-bind canvas logic if it was replaced (since innerHTML wipes events)
            // But canvas is IN content.
            // So we need to call setupSignaturePad() AFTER injection
            setTimeout(setupSignaturePad, 100); 
        }

        // Display flex first so it's in DOM
        letterModal.classList.remove('hidden'); // Remove legacy hidden if present
        letterModal.style.display = 'flex';
        
        // Small timeout to allow browser to render display:flex before adding opacity class
        setTimeout(() => {
            letterModal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }, 10);
    }
}

function closeStorybook() {
    if (letterModal) {
        letterModal.classList.remove('show');
        
        // Wait for transition to finish before hiding
        setTimeout(() => {
            letterModal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scroll
        }, 500); // Matches CSS transition duration
    }
}

// Event Listeners
if (openLetterBtn) {
    openLetterBtn.addEventListener('click', openStorybook);
}

if (closeStoryBtn) {
    closeStoryBtn.addEventListener('click', closeStorybook);
}

// Close when clicking background
if (letterModal) {
    letterModal.addEventListener('click', (e) => {
        // e.target will be the modal overlay itself if the inner content isn't clicked
        if (e.target === letterModal) {
            closeStorybook();
        }
    });
}

// "Love Uptime" Counter
function updateUptime() {
    const startDate = new Date('2025-09-03T09:00:00'); // August 2023 (Story Start)
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const uptimeElement = document.getElementById('uptime-counter');
    if (uptimeElement) {
        uptimeElement.innerText = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    }
}

setInterval(updateUptime, 1000); // Update every second
updateUptime(); // Initial call

// ---------------------------------------------------------
// Digital Signature Pad Logic (Modified: Only Accept Button)
// ---------------------------------------------------------
function setupSignaturePad() {
    const lockSigBtn = document.getElementById('lock-sig-btn');

    // Accept/Lock Button
    if (lockSigBtn) {
        // Remove old listeners if any by cloning (simple trick)
        const newBtn = lockSigBtn.cloneNode(true);
        if(lockSigBtn.parentNode) {
            lockSigBtn.parentNode.replaceChild(newBtn, lockSigBtn);
        }
        
        newBtn.addEventListener('click', () => {
             // Visual Lock Effect
            newBtn.innerText = "Accepted ✅";
            newBtn.disabled = true;
            newBtn.style.background = "#00b894";
            newBtn.style.cursor = "default";
            newBtn.style.transform = "scale(1.05)";
            newBtn.style.boxShadow = "0 0 15px #00b894";
            
            // Add Stamp Effect
            const stamp = document.createElement('div');
            stamp.className = 'stamp-seal';
            stamp.innerText = "OFFER ACCEPTED";
            
            // Append to parent of button or specific container
            if (newBtn.parentElement && newBtn.parentElement.parentElement) {
                 // Try to append to the acceptance section
                 newBtn.parentElement.parentElement.appendChild(stamp);
            }
            
            // Confetti
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.8 },
                colors: ['#ff3366', '#d4af37', '#ffffff'] // Love colors
            });
        });
    }
}

// Initial setup (if canvas exists primarily, though usually hidden)
setupSignaturePad();

if (playPauseBtn && bgMusic) {
    playPauseBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            setPlayerState(true);
        } else {
            bgMusic.pause();
            setPlayerState(false);
        }
    });

    // Handle end of track loop visual
    bgMusic.addEventListener('ended', () => {
        // Since it loops, this might not fire often, but good practice
        // If not looping: setPlayerState(false);
    });
}

// --- Image Lightbox Logic ---
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');
const momentsGrid = document.querySelector('.moments-grid');

if (momentsGrid) {
    momentsGrid.addEventListener('click', (e) => {
        const item = e.target.closest('.moment-item');
        if (item) {
            const img = item.querySelector('img');
            lightboxImg.src = img.src;
            lightboxCaption.innerText = "❤️ Shared Magic";
            lightboxModal.classList.remove('hidden');
        }
    });
}

if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
        lightboxModal.classList.add('hidden');
    });
}

lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
        lightboxModal.classList.add('hidden');
    }
});

// --- Enhanced Image Integration (Storybook Background) ---
// Add a subtle watercolor background to the storybook left page when it opens
const storybookBook = document.querySelector('.book-container');
if (storybookBook) {
    const leftPage = storybookBook.querySelector('.left-page');
    if (leftPage) {
        leftPage.style.backgroundImage = "linear-gradient(rgba(232, 226, 210, 0.8), rgba(253, 250, 240, 0.9)), url('assets/images/background.png')";
        leftPage.style.backgroundSize = "cover";
        leftPage.style.backgroundPosition = "center";
    }
}
