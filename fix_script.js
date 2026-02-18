const fs = require('fs');

const scriptPath = 'script.js';
let content = fs.readFileSync(scriptPath, 'utf8');

// Define the simplified function (Clean & indented)
const newFunction = `// ---------------------------------------------------------
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
`;

// Find start and end of the old function
// We know it starts with 'function setupSignaturePad() {'
// And effectively ends before '// Initial setup'
const startMarker = "function setupSignaturePad() {";
const endMarker = "// Initial setup";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    // We also want to replace the previous comment block if possible, 
    // which starts a few lines above. 
    // Look for "// Digital Signature Pad Logic" above startIndex
    const commentMarker = "// Digital Signature Pad Logic";
    const commentIndex = content.lastIndexOf(commentMarker, startIndex);
    
    let replacementStart = startIndex;
    if (commentIndex !== -1 && commentIndex > startIndex - 200) { // Ensure it's the one right above
        // Include the separator line above the comment if it exists?
        // Let's just start from commentIndex - line of dashes if present
        // Step 339 shows line 613 is dashes.
        const dashesIndex = content.lastIndexOf("// -----", commentIndex);
        if (dashesIndex !== -1) {
            replacementStart = dashesIndex;
        } else {
            replacementStart = commentIndex;
        }
    }

    const before = content.substring(0, replacementStart);
    const after = content.substring(endIndex); // Keep endMarker and beyond
    
    const newContent = before + newFunction + "\n" + after;
    
    fs.writeFileSync(scriptPath, newContent);
    console.log("Successfully replaced setupSignaturePad.");
} else {
    console.error("Could not find markers.");
    console.log("Start: " + startIndex + ", End: " + endIndex);
}
