// Elements
const mainCard = document.getElementById('main-card');
const proposalCard = document.getElementById('proposal-card');
const actionButtons = document.getElementById('action-buttons');
const typingText = document.getElementById('typing-text');
const viewOfferBtn = document.getElementById('view-offer-btn');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const successOverlay = document.getElementById('success-overlay');

// ---------------------------------------------------------
// Security & Encryption Logic
// ---------------------------------------------------------
const loginOverlay = document.getElementById('login-overlay');
const passwordInput = document.getElementById('password-input');
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');

// Encrypted Data (Generated via AWS)
const encryptedLetter = "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";
const encryptedMessage = "U2FsdGVkX19R8J5lT5y9SvogSS9+eTAfi+ctLo2jQszIlisSh9fjiDA4UsqtVej+Gu76cCcE633ydnTFdXJQFf7PVDiFPJHi+V9PlKKjmyHL4siYRw2TUFhHu4mLLt/02BNVHTYOaMHrpxf1LpOmRZ7qPNI1gCetEYnJESuylnrSyD44x8gbkLvrmcFkd3yrHayeEMfb7TXdGfEvZEZH3BZk4D0enRYH7wUXgJXwNw6RLjdt5DZNLjlq9q34Yn7a";

let decryptedMessage = "";

function attemptLogin() {
    const password = passwordInput.value;
    if (!password) {
        loginError.innerText = "Please enter a password.";
        return;
    }

    try {
        // Try decrypting message first as a quick check
        const bytes = CryptoJS.AES.decrypt(encryptedMessage, password);
        const decryptedUtf8 = bytes.toString(CryptoJS.enc.Utf8);

        if (decryptedUtf8 && decryptedUtf8.length > 5) {
            // Success!
            decryptedMessage = decryptedUtf8;
            localStorage.setItem('site_access_token', 'granted'); // Session persistence
            
            // Decrypt Letter Content
            const letterBytes = CryptoJS.AES.decrypt(encryptedLetter, password);
            const letterHtml = letterBytes.toString(CryptoJS.enc.Utf8);
            
            if (letterHtml) {
                // Store/Use globally or just inject when needed
                window.decryptedLetterContent = letterHtml;
                
                // Hide Overlay
                loginOverlay.style.opacity = '0';
                setTimeout(() => {
                    loginOverlay.style.display = 'none';
                    // Trigger Intro only after login
                    const introOverlay = document.getElementById('intro-overlay');
                    if (introOverlay) introOverlay.classList.add('visible'); // If needed
                }, 500);

            } else {
                 throw new Error("Decryption Check Failed");
            }

        } else {
            loginError.innerText = "Access Denied: Incorrect Password.";
            
            // Animation shake
            const box = document.querySelector('.login-box');
            box.style.animation = 'shake 0.5s ease';
            setTimeout(() => box.style.animation = '', 500);
        }
    } catch (e) {
        console.error(e);
        loginError.innerText = "Access Denied: Incorrect Password.";
         // Animation shake
        const box = document.querySelector('.login-box');
        box.style.animation = 'shake 0.5s ease';
        setTimeout(() => box.style.animation = '', 500);
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
const speed = 40;

// Typing Effect
let i = 0;
function typeWriter() {
    // Ensure we have the decrypted message
    if (!message && decryptedMessage) message = decryptedMessage;
    
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
            
            // Only add tilt effect on desktop/larger screens
            if (window.innerWidth > 768) {
                if (mainCard) addTiltEffect(mainCard);
                if (proposalCard) addTiltEffect(proposalCard);
            }
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
// Digital Signature Pad Logic (Wrapped for Re-init)
// ---------------------------------------------------------
function setupSignaturePad() {
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
}

// Initial setup (if canvas exists primarily, though usually hidden)
setupSignaturePad();

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
