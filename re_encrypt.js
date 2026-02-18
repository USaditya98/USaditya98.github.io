const CryptoJS = require("crypto-js");

const password = "Shilpa";

const letterContent = `
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
    <p class="hr-instruction" style="margin-bottom: 20px;">As HR, please enable this permanent offer by clicking below:</p>
    <div class="sig-controls">
        <button id="lock-sig-btn" class="sm-btn bloom" style="font-size: 1.2rem; padding: 12px 30px; cursor: pointer;">Accept Offer 🖋️</button>
    </div>
</div>
`;

const message = "Dearest Shilpa, we have reviewed your profile extensively. Your kindness, smile, and people skills are exceptional. We would like to extend a permanent offer...";

// Encrypt
const encryptedLetter = CryptoJS.AES.encrypt(letterContent, password).toString();
const encryptedMessage = CryptoJS.AES.encrypt(message, password).toString();

console.log("ENCRYPTED_LETTER_START");
console.log(encryptedLetter);
console.log("ENCRYPTED_LETTER_END");

console.log("ENCRYPTED_MESSAGE_START");
console.log(encryptedMessage);
console.log("ENCRYPTED_MESSAGE_END");
