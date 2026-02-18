// Elements
const mainCard = document.getElementById('main-card');
const proposalCard = document.getElementById('proposal-card');
const actionButtons = document.getElementById('action-buttons');
const typingText = document.getElementById('typing-text');
const viewOfferBtn = document.getElementById('view-offer-btn');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const successOverlay = document.getElementById('success-overlay');

// Text Config
// Text Config
const message = "Dearest Shilpa, we have reviewed your profile extensively. Your kindness, smile, and people skills are exceptional. We would like to extend a permanent offer...";
const speed = 40;

// Typing Effect
let i = 0;
function typeWriter() {
    if (i < message.length) {
        typingText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        document.querySelector('.cursor').style.display = 'none';
        setTimeout(() => {
            // Instead of showing buttons directly, start the game
            startGame();
        }, 500);
    }
}

// Gaming Logic
const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
let score = 0;
const targetScore = 5;

function startGame() {
    gameContainer.classList.remove('hidden');
    gameContainer.style.display = 'block'; // Ensure visibility
    spawnHeart();
}

function spawnHeart() {
    if (score >= targetScore) return;

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
    gameContainer.innerHTML = '<div class="glitch-text" style="color: #00b894;">LOVE UNLOCKED</div>';
    
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
        
        actionButtons.classList.remove('hidden');
        actionButtons.style.opacity = 1;
        actionButtons.style.animation = 'fadeIn 1s ease';
    }, 1500);
}

// Bubbling Heart Trail Effect
const hearts = ['❤️', '💖', '💗', '💓', '💞', '💕', '💘', '💝'];
document.addEventListener('mousemove', (e) => {
    // Create multiple small bubbles for a richer effect
    if (Math.random() < 0.3) return; // Throttling slightly naturally

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

// 3D Tilt Effect
function addTiltEffect(card) {
    card.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transition = 'all 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
}


// Initialize
// Initialize moved to click handler

// Transition to Proposal
if (viewOfferBtn) {
    viewOfferBtn.addEventListener('click', () => {
        if (mainCard) {
            mainCard.style.transform = 'translateY(-100vh) rotate(-10deg)';
            mainCard.style.opacity = '0';
        }
        
        setTimeout(() => {
            if (mainCard) mainCard.classList.add('hidden');
            if (proposalCard) {
                proposalCard.classList.remove('hidden');
                proposalCard.style.display = 'block'; // force display block for animation
                
                // Small delay to allow display block to apply before opacity transition
                setTimeout(() => {
                    proposalCard.style.opacity = '1';
                    proposalCard.style.animation = 'slideUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                }, 50);
            }
            
        }, 500);
    });
}

// "No" Button Logic
if (noBtn) {
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton);

    // Add touchstart for mobile responsiveness (faster than click/mouseover on touch)
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent actual click
        moveButton();
    });
}

function moveButton() {
    if (!noBtn) return;
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Calculate safe area (padding from edges)
    const padding = 20;
    
    // Calculate max X and Y
    const maxX = viewportWidth - btnWidth - padding;
    const maxY = viewportHeight - btnHeight - padding;

    // Determine new position
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    // Ensure it doesn't overlap completely with the "Yes" button if possible (simple check)
    // For now, just keeping it in bounds is a huge improvement for mobile
    
    noBtn.style.position = 'fixed'; // Use fixed to ensure it can go anywhere
    noBtn.style.left = `${Math.max(padding, x)}px`;
    noBtn.style.top = `${Math.max(padding, y)}px`;
    noBtn.style.zIndex = '100'; // Ensure it stays on top of other elements
    
    const texts = ["Are you sure?", "Think again!", "Application Rejected? No way!", "Just click Yes!", "Nice try!"];
    noBtn.innerText = texts[Math.floor(Math.random() * texts.length)];
}

// "Yes" Button Logic
if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        // 1. Confetti Explosion
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.7 },
            colors: ['#ff3366', '#6c5ce7', '#00b894']
        });

        // 2. Show Success Overlay
        setTimeout(() => {
            if (successOverlay) {
                successOverlay.classList.remove('hidden');
                successOverlay.style.display = 'flex';
            }
        }, 1000);

        // 3. Continuous Confetti
        let duration = 5 * 1000;
        let animationEnd = Date.now() + duration;
        let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 200 };

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        let interval = setInterval(function() {
            let timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            let particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    });
}

// Floating Hearts
function createFloatingHearts() {
    const container = document.body;
    const symbols = ['❤️', '💖', '💕', '💘', '💗', '💓', '💞'];
    
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
    }, 400);
}

// Add CSS for float animation dynamically if needed, 
// but we'll count on style.css for basic keyframes or add here:
// Add CSS for float animation dynamically if needed, 
// but we'll count on style.css for basic keyframes or add here:
// Dynamic style removed, handled in style.css

// Letter Logic (Moved to Card Interaction below)
// const letterModal = ... 
// const openLetterBtn = ...
// See "Card Interaction" section

// Timeline Logic (Merged into Storybook)
// const timelineModal = ... 
// See "Storybook Interaction" section

// Intro Overlay Logic
const introOverlay = document.getElementById('intro-overlay');
const enterBtn = document.getElementById('enter-btn');

if (enterBtn) {
    enterBtn.addEventListener('click', () => {
        if (introOverlay) introOverlay.style.opacity = '0';
        
        // Unmute/Play hidden Audio IMMEDIATELY
        const bgMusic = document.getElementById('bg-music');
        if (bgMusic) {
            bgMusic.volume = 0.5; // Set volume to 50%
            bgMusic.play().then(() => {
                // If played successfully, update UI
                setPlayerState(true);
            }).catch(e => {
                console.log("Audio play failed:", e);
                // Fallback: Show play button state if autoplay fails
                setPlayerState(false);
            });
        }

        setTimeout(() => {
            if (introOverlay) introOverlay.style.display = 'none';
            // Start other animations only after entry
            createFloatingHearts();
            setTimeout(typeWriter, 500);
            if (mainCard) addTiltEffect(mainCard);
            if (proposalCard) addTiltEffect(proposalCard);
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
    const symbols = ['🎵', '🎶', '❤️', '🎼', '✨'];
    const particle = document.createElement('div');
    particle.className = 'music-particle';
    particle.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    
    // Position near the music player (bottom left)
    // We'll use fixed positioning based on window size to keep it near the player
    // Player is bottom: 20px, left: 20px, width ~300px
    const startX = 20 + Math.random() * 250; // Randomly along the player width
    const startY = window.innerHeight - 80; // Top of the player area
    
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    
    // Random drift
    const drift = (Math.random() * 100 - 50) + 'px';
    const rotation = (Math.random() * 360) + 'deg';
    
    particle.style.setProperty('--drift', drift);
    particle.style.setProperty('--r', rotation);
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 4000); // Cleanup after animation
}

function setPlayerState(isPlaying) {
    if (isPlaying) {
        musicDisc.classList.add('spinning');
        playPauseBtn.innerText = '⏸';
        startParticles();
    } else {
        musicDisc.classList.remove('spinning');
        playPauseBtn.innerText = '▶';
        stopParticles();
    }
}

// Storybook Interaction
const letterModal = document.getElementById('letter-modal');
const openLetterBtn = document.getElementById('read-letter-btn');
const closeStoryBtn = document.querySelector('.close-storybook');

function openStorybook() {
    if (letterModal) {
        // Display flex first so it's in DOM
        letterModal.classList.remove('hidden'); // Remove legacy hidden if present
        letterModal.style.display = 'flex';
        
        // Small timeout to allow browser to render display:flex before adding opacity class
        setTimeout(() => {
            letterModal.classList.add('show');
        }, 10);
    }
}

function closeStorybook() {
    if (letterModal) {
        letterModal.classList.remove('show');
        
        // Wait for transition to finish before hiding
        setTimeout(() => {
            letterModal.style.display = 'none';
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
// Digital Signature Pad Logic
// ---------------------------------------------------------
const canvas = document.getElementById('signature-pad');
const clearSigBtn = document.getElementById('clear-sig-btn');
const lockSigBtn = document.getElementById('lock-sig-btn');
const placeholder = document.querySelector('.sig-placeholder');

if (canvas) {
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    // Style
    ctx.strokeStyle = "#000"; // Pen color
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 2;

    function draw(e) {
        if (!isDrawing) return;
        
        // Prevent scrolling on touch
        e.preventDefault();

        // Get Position
        let offsetX, offsetY;
        if (e.type.includes('touch')) {
            const rect = canvas.getBoundingClientRect();
            offsetX = e.touches[0].clientX - rect.left;
            offsetY = e.touches[0].clientY - rect.top;
        } else {
            offsetX = e.offsetX;
            offsetY = e.offsetY;
        }

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
        [lastX, lastY] = [offsetX, offsetY];
        
        // Hide placeholder on first draw
        if (placeholder) placeholder.style.display = 'none';
    }

    function startDrawing(e) {
        isDrawing = true;
        
        if (e.type.includes('touch')) {
            const rect = canvas.getBoundingClientRect();
            lastX = e.touches[0].clientX - rect.left;
            lastY = e.touches[0].clientY - rect.top;
        } else {
            lastX = e.offsetX;
            lastY = e.offsetY;
        }
    }

    // Event Listeners for Draw
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

    // Touch Support
    canvas.addEventListener('touchstart', startDrawing, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', () => isDrawing = false);

    // Clear Button
    if (clearSigBtn) {
        clearSigBtn.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (placeholder) placeholder.style.display = 'block';
        });
    }

    // Accept/Lock Button
    if (lockSigBtn) {
        lockSigBtn.addEventListener('click', () => {
            // Visual Lock Effect
            canvas.style.pointerEvents = 'none';
            canvas.style.opacity = '0.7';
            
            // Disable buttons
            clearSigBtn.style.display = 'none';
            lockSigBtn.innerText = "Accepted ✅";
            lockSigBtn.disabled = true;
            lockSigBtn.style.background = "#00b894";
            lockSigBtn.style.borderColor = "#00b894";

            // Add Stamp Effect
            const stamp = document.createElement('div');
            stamp.className = 'stamp-seal';
            stamp.innerText = "OFFER ACCEPTED";
            canvas.parentElement.appendChild(stamp);
            
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

// Removing Old Timeline/Cinematic Logic references
// (Timeline logic was replaced by this unified Storybook)
// Removed outdated modal close logic if prevalent elsewhere or redundant
// Letter Modal Logic (Legacy removal/update)
/* 
const letterModal = document.getElementById('letter-modal'); // Already defined
const openLetterBtn = document.getElementById('open-letter-btn'); // Already defined
const closeLetter = document.querySelector('.close-letter'); // Removed from DOM

openLetterBtn.addEventListener('click', () => {
    letterModal.classList.remove('hidden');
});

closeLetter.addEventListener('click', () => {
    letterModal.classList.add('hidden');
});
*/

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

// Remove window.onload logic to prevent premature animation
// window.onload = ...  <-- Removed/Replaced below

// Initialize (Just basic setup, animations wait for click)
// No auto-start logic here anymore
