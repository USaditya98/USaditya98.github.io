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

// Encrypted Data (Generated via Simple XOR Cipher)
const encryptedLetter = "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";
const encryptedMessage = "Fw0IHhUSJ0g6BBkNIwlFTAcEcwAIGhVBIQ0fBRUWNgxJFR8UIUgZHh8HOgQMTBUZJw0HHxkXNgQQQlA4PB0bTBsIPQwHCQMSf0gaARkNNkRJDR4FcxgMAwANNkgaBxkNPxtJDQIEcw0RDxURJwEGAhENfUg+CVAWPB0FCFANOgMMTAQOcw0RGBUPN0gITAAEIQUIAhUPJ0gGChYEIUZHQg==";

let decryptedMessage = "";

// Simple XOR Decryption Function
function xorDecrypt(base64Text, key) {
    try {
        const text = atob(base64Text);
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return result;
    } catch (e) {
        return null;
    }
}

function attemptLogin() {
    const password = passwordInput.value;
    if (!password) {
        loginError.innerText = "Please enter a password.";
        return;
    }

    try {
        // Try decrypting message first as a quick check
        const decryptedUtf8 = xorDecrypt(encryptedMessage, password);

        if (decryptedUtf8 && decryptedUtf8.length > 5 && decryptedUtf8.includes("Dearest")) {
            // Success!
            decryptedMessage = decryptedUtf8;
            localStorage.setItem('site_access_token', 'granted');
            
            // Decrypt Letter Content
            const letterHtml = xorDecrypt(encryptedLetter, password);
            
            if (letterHtml) {
                window.decryptedLetterContent = letterHtml;
                
                // Hide Overlay
                loginOverlay.style.opacity = '0';
                setTimeout(() => {
                    loginOverlay.style.display = 'none';
                    const introOverlay = document.getElementById('intro-overlay');
                    if (introOverlay) introOverlay.classList.add('visible');
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
