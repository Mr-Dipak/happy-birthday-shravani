const FRIEND_NAME = "Shravani"; // Replace with your friend's name
const SECRET_CODE = "mrdipak"; // You can change this to any code you want
const TYPING_SPEED = 50;

// Add some cool hacker symbols
const hackerSymbols = '⚡☢️⚠️🔓🔒💻🛡️⚔️🔑';
const encryptedChars = '田【〖〗】〘〙〚〛々㊙️㊗️';

const commands = [
    "INITIALIZING SECURE SHELL...",
    "ESTABLISHING SSH CONNECTION...",
    "RUNNING VULNERABILITY SCAN...",
    "DETECTING POTENTIAL SECURITY EXPERT...",
    "ANALYZING RSA ENCRYPTION...",
    "BYPASSING AES-256 PROTOCOLS...",
    "ACCESSING SECURE DATABASE...",
    "DEPLOYING QUANTUM ENCRYPTION...",
    "INITIALIZING BLOCKCHAIN VERIFICATION...",
    "> SECURITY CLEARANCE REQUIRED",
    "ENTER ACCESS KEY TO DECRYPT MESSAGE..."
];

// Add more personalized security messages
const securityChallenges = [
    "CHALLENGE 1: PORT SCANNING IN PROGRESS...",
    "CHALLENGE 2: FIREWALL BREACH ATTEMPTED...",
    "CHALLENGE 3: ENCRYPTION KEY ANALYSIS...",
    "FINAL CHALLENGE: QUANTUM CRYPTOGRAPHY TEST"
];

const birthdayMessage = [
    "🔓 ACCESS GRANTED! WELCOME SECURITY EXPERT! 🔓",
    "INITIALIZING CELEBRATION PROTOCOL v2.0",
    "DEPLOYING ENCRYPTED BIRTHDAY MESSAGE...",
    `DEAR ${FRIEND_NAME},`,
    "EXECUTING birthday_wishes.sh 🎂",
    "HAPPY BIRTHDAY TO OUR BRILLIANT",
    "FUTURE CYBERSECURITY EXPERT! 🔒",
    "MAY YOUR FIREWALLS BE UNBREAKABLE",
    "YOUR ENCRYPTION UNCRACKABLE",
    "AND YOUR PASSWORDS UNHACKABLE!",
    "KEEP DEFENDING THE DIGITAL REALM 💻",
    "AND PURSUING YOUR SECURITY DREAMS!",
    "CELEBRATING YOUR SPECIAL DAY",
    "WITH 256-BIT ENCRYPTED LOVE! 💚",
    generateEncryptedHeart(),
    "SECURITY STATUS: MAXIMUM PROTECTION ENABLED",
    `${hackerSymbols} HAPPY HACKING! ${hackerSymbols.split('').reverse().join('')}`
];

function generateEncryptedHeart() {
    return `
    ╔═══${encryptedChars[0]}═══╗
    ║ ${encryptedChars[1]}${encryptedChars[2]}${encryptedChars[3]} ║
    ║  ❤️  ║
    ╚════════╝
    `;
}

// Enhanced security scan messages with more technical details
const securityScanMessages = [
    "SCANNING TCP/UDP PORTS [==================>] PORT 443 SECURE",
    "ANALYZING PACKET DATA [===========>........] 64-BIT ENCRYPTION",
    "CHECKING SSL CERTIFICATES [================>] SHA-256 VERIFIED",
    "MONITORING FIREWALL STATUS [============>...] DMZ PROTECTED",
    "DETECTING INTRUSION ATTEMPTS [===========>.] 0 THREATS",
    "VERIFYING SHA-256 HASH [==================>] MATCH CONFIRMED",
    "SECURING TCP/IP PROTOCOLS [===============>] IPV6 ENABLED",
    "DEPLOYING NEURAL FIREWALL [==============>] AI ACTIVE",
    "INITIALIZING ZERO-DAY PROTECTION [========>] PATCHES UPDATED",
    "RUNNING PENETRATION TESTS [==============>] SYSTEM HARDENED"
];

const typingEffect = document.querySelector('.typing-effect');
const accessForm = document.getElementById('access-form');
const birthdayMessageDiv = document.getElementById('birthday-message');
const glitchText = document.querySelector('.glitch-text');

const hackingAnimationChars = '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏';
let hackingAnimationFrame = 0;

async function typeText(text, element) {
    for (let i = 0; i < text.length; i++) {
        element.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve, TYPING_SPEED));
    }
    await new Promise(resolve => setTimeout(resolve, 500));
}

async function displayCommands() {
    for (const command of commands) {
        typingEffect.textContent = '';
        await typeText(command, typingEffect);
    }
    accessForm.classList.remove('hidden');
}

async function displaySecurityChallenge() {
    const challenges = document.createElement('div');
    challenges.className = 'security-challenges';
    document.body.appendChild(challenges);

    for (const challenge of securityChallenges) {
        challenges.textContent = challenge;
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Add cool hacking effect
        const progress = document.createElement('div');
        progress.className = 'challenge-progress';
        challenges.appendChild(progress);
        
        for (let i = 0; i < 20; i++) {
            progress.textContent += '█';
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
    
    challenges.textContent = "ALL SECURITY CHALLENGES COMPLETED! 🎉";
    await new Promise(resolve => setTimeout(resolve, 1000));
    challenges.remove();
}

async function displayBirthdayMessage() {
    birthdayMessageDiv.classList.remove('hidden');
    document.querySelector('.ascii-art').classList.remove('hidden');
    createBinaryRain();
    createHackingAnimation();
    createEncryptionEffect();
    await displaySecurityChallenge(); // Add security challenge before message
    updateSecurityScan();
    
    for (const line of birthdayMessage) {
        glitchText.textContent = '';
        await typeText(line, glitchText);
        await new Promise(resolve => setTimeout(resolve, 1500));
    }
}

function createMatrixEffect() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const columns = Math.floor(width / 20);
    const drops = new Array(columns).fill(0);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, width, height);
        
        ctx.fillStyle = '#0f0';
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = String.fromCharCode(Math.random() * 128);
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            if (drops[i] * 20 > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    window.setInterval(draw, 35);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

function createBinaryRain() {
    const binaryRain = document.querySelector('.binary-rain');
    const width = window.innerWidth;
    const characters = '01';
    let html = '';

    for (let i = 0; i < 50; i++) {
        const left = Math.random() * width;
        const animationDuration = 3 + Math.random() * 5;
        const delay = Math.random() * 2;
        const fontSize = 10 + Math.random() * 14;
        
        html += `<div class="binary-digit" style="
            left: ${left}px;
            animation: fall ${animationDuration}s linear ${delay}s infinite;
            font-size: ${fontSize}px;
        ">${characters.charAt(Math.floor(Math.random() * characters.length))}</div>`;
    }

    binaryRain.innerHTML = html;
}

function createHackingAnimation() {
    const terminal = document.createElement('div');
    terminal.className = 'hacking-terminal';
    terminal.innerHTML = `
        <div class="terminal-header">
            <span class="spinner">${hackingAnimationChars[0]}</span>
            <span class="status">INITIALIZING HACK SEQUENCE...</span>
        </div>
    `;
    document.body.appendChild(terminal);

    setInterval(() => {
        hackingAnimationFrame = (hackingAnimationFrame + 1) % hackingAnimationChars.length;
        terminal.querySelector('.spinner').textContent = hackingAnimationChars[hackingAnimationFrame];
    }, 100);
}

function createEncryptionEffect() {
    const encryptionLayer = document.createElement('div');
    encryptionLayer.className = 'encryption-layer';
    const characters = 'ABCDEF0123456789';
    let html = '';

    for (let i = 0; i < 100; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        html += `<span class="hex-char" style="
            --delay: ${Math.random() * 2}s;
            --duration: ${1 + Math.random()}s;
        ">${char}</span>`;
    }

    encryptionLayer.innerHTML = html;
    document.body.appendChild(encryptionLayer);
}

function updateSecurityScan() {
    const scanText = document.querySelector('.scan-text');
    let currentIndex = 0;

    setInterval(() => {
        scanText.textContent = securityScanMessages[currentIndex];
        currentIndex = (currentIndex + 1) % securityScanMessages.length;
    }, 2000);
}

document.getElementById('submit-code').addEventListener('click', async () => {
    const password = document.getElementById('password').value;
    if (password === SECRET_CODE) {
        accessForm.classList.add('hidden');
        await displayBirthdayMessage();
    } else {
        typingEffect.textContent = 'ACCESS DENIED. TRY AGAIN.';
        setTimeout(() => {
            typingEffect.textContent = 'ENTER ACCESS KEY TO DECRYPT MESSAGE...';
        }, 2000);
    }
});

// Add styles for binary rain
const style = document.createElement('style');
style.textContent = `
    .binary-digit {
        position: absolute;
        color: #0f0;
        text-shadow: 0 0 5px #0f0;
        opacity: 0.8;
    }

    @keyframes fall {
        from { transform: translateY(-100vh); }
        to { transform: translateY(100vh); }
    }

    .hacking-terminal {
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 20, 0, 0.8);
        padding: 10px;
        border: 1px solid #0f0;
        border-radius: 5px;
        font-family: monospace;
        color: #0f0;
        z-index: 1000;
    }

    .spinner {
        margin-right: 10px;
        animation: spin 1s linear infinite;
    }

    .encryption-layer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
    }

    .hex-char {
        position: absolute;
        color: #0f0;
        opacity: 0.5;
        font-family: monospace;
        animation: float var(--duration) ease-in-out var(--delay) infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
    }

    .security-challenges {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 20, 0, 0.9);
        padding: 20px;
        border: 2px solid #0f0;
        border-radius: 10px;
        font-family: monospace;
        color: #0f0;
        z-index: 1000;
        text-align: center;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
    }

    .challenge-progress {
        margin-top: 10px;
        color: #0f0;
        text-shadow: 0 0 5px #0f0;
    }

    .hex-char {
        text-shadow: 0 0 8px #0f0;
        font-weight: bold;
    }

    @keyframes glitch-flicker {
        0% { opacity: 1; }
        50% { opacity: 0.8; }
        51% { opacity: 1; }
        52% { opacity: 0.8; }
        53% { opacity: 1; }
        54% { opacity: 0.8; }
        55% { opacity: 1; }
    }

    .security-challenges {
        animation: glitch-flicker 2s infinite;
    }
`;
document.head.appendChild(style);

// Start the animation sequence
window.addEventListener('load', () => {
    createMatrixEffect();
    displayCommands();
}); 