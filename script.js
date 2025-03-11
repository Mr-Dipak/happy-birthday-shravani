const FRIEND_NAME = "Shravani Dhuri"; // Replace with your friend's name
const SECRET_CODE = "2025"; // You can change this to any code you want
const TYPING_SPEED = 50;

// Cybersecurity-themed ASCII art collection
const asciiArtCollection = [
    `
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣤⣴⣦⣤⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⣿⣿⣿⠿⠿⠿⠿⣿⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⣠⣾⣿⣿⡿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣿⣿⣶⡀⠀⠀⠀⠀
    ⠀⠀⠀⣴⣿⣿⠟⠁⠀⠀⠀⣶⣶⣶⣶⡆⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣦⠀⠀⠀
    ⠀⠀⣼⣿⣿⠋⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣧⠀⠀
    ⠀⢸⣿⣿⠃⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⡇⠀
    ⠀⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⠀
    ⢀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡀
    ⣼⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣧
    ⢿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡿
    ⠀⢿⣿⡇⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡿⠀
    ⠀⠘⣿⣷⡀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⠃⠀
    ⠀⠀⠘⢿⣷⣄⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⣠⣾⡿⠋⠀⠀⠀
    ⠀⠀⠀⠈⠻⣿⣷⣤⡀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⢀⣤⣾⣿⠟⠋⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠈⠙⠿⣿⣶⣴⣿⣿⣿⣿⣿⣶⣶⣿⡿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠛⠛⠛⠛⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    `,
    `
     _____________________________________
    |                                     |
    |  SECURITY LEVEL: MAXIMUM            |
    |  ENCRYPTION: AES-256                |
    |  FIREWALL: ACTIVE                   |
    |  INTRUSION DETECTION: ENABLED       |
    |  BIRTHDAY MODE: ACTIVATED           |
    |_____________________________________|
    `
];

const commands = [
    "INITIALIZING SYSTEM...",
    "ESTABLISHING SECURE CONNECTION...",
    "SCANNING FOR BIRTHDAY PROTOCOLS...",
    "DETECTING POTENTIAL SECURITY EXPERT...",
    "ANALYZING ENCRYPTION PATTERNS...",
    "BYPASSING FIREWALL PROTOCOLS...",
    "RUNNING VULNERABILITY SCAN...",
    "CHECKING PORT STATUS: 80, 443, 22...",
    "DEPLOYING NEURAL NETWORK...",
    "ACCESSING CELEBRATION DATABASE...",
    "COMPILING BIRTHDAY ALGORITHMS...",
    "> SECURITY CHECK REQUIRED",
    "PLEASE ENTER ACCESS CODE TO CONTINUE..."
];

const birthdayMessage = [
    "ACCESS GRANTED!",
    "EXECUTING BIRTHDAY_PROTOCOL.exe",
    "DECRYPTING SPECIAL MESSAGE...",
    "[ENCRYPTION KEY VERIFIED]",
    `DEAR ${FRIEND_NAME},`,
    "INITIALIZING BIRTHDAY CELEBRATION SEQUENCE",
    "HAPPY BIRTHDAY TO OUR FUTURE",
    "CYBERSECURITY EXPERT! 🔒",
    "MAY YOUR ENCRYPTION BE STRONG",
    "YOUR FIREWALLS IMPENETRABLE",
    "AND YOUR PASSWORDS COMPLEX",
    "KEEP DEBUGGING, KEEP LEARNING",
    "KEEP HACKING FOR GOOD! 💻",
    "CELEBRATING YOUR SPECIAL DAY",
    "IN TRUE HACKER STYLE!",
    "WITH SECURE WISHES 🔐",
    "<3"
];

const securityScanMessages = [
    "SCANNING NETWORK PORTS...",
    "ANALYZING PACKET DATA...",
    "CHECKING SSL CERTIFICATES...",
    "MONITORING FIREWALL STATUS...",
    "DETECTING INTRUSION ATTEMPTS...",
    "VERIFYING ENCRYPTION KEYS...",
    "SECURING COMMUNICATION CHANNELS...",
    "RUNNING PENETRATION TESTS...",
    "ANALYZING NETWORK TRAFFIC...",
    "CHECKING FOR VULNERABILITIES...",
    "DEPLOYING SECURITY PATCHES...",
    "UPDATING ENCRYPTION PROTOCOLS..."
];

const typingEffect = document.querySelector('.typing-effect');
const accessForm = document.getElementById('access-form');
const birthdayMessageDiv = document.getElementById('birthday-message');
const glitchText = document.querySelector('.glitch-text');

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

async function displayBirthdayMessage() {
    birthdayMessageDiv.classList.remove('hidden');
    document.querySelector('.ascii-art').classList.remove('hidden');
    createBinaryRain();
    createHexBackground();
    createCircuitPattern();
    createDataStream();
    createPulseEffect();
    updateSecurityScan();
    
    // Display random ASCII art
    const asciiArtDiv = document.querySelector('.ascii-art pre');
    asciiArtDiv.textContent = asciiArtCollection[Math.floor(Math.random() * asciiArtCollection.length)];
    
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

function createHexBackground() {
    const hexChars = '0123456789ABCDEF';
    const hexContainer = document.createElement('div');
    hexContainer.className = 'hex-background';
    
    for (let i = 0; i < 100; i++) {
        const hex = document.createElement('div');
        hex.className = 'hex-code';
        hex.style.left = `${Math.random() * 100}%`;
        hex.style.top = `${Math.random() * 100}%`;
        hex.style.animationDelay = `${Math.random() * 5}s`;
        
        let hexString = '';
        for (let j = 0; j < 6; j++) {
            hexString += hexChars[Math.floor(Math.random() * hexChars.length)];
        }
        hex.textContent = hexString;
        hexContainer.appendChild(hex);
    }
    
    document.body.appendChild(hexContainer);
}

function createCircuitPattern() {
    const circuit = document.createElement('div');
    circuit.className = 'circuit-pattern';
    
    // Create circuit nodes
    for (let i = 0; i < 20; i++) {
        const node = document.createElement('div');
        node.className = 'circuit-node';
        node.style.left = `${Math.random() * 100}%`;
        node.style.top = `${Math.random() * 100}%`;
        node.style.animationDelay = `${Math.random() * 3}s`;
        circuit.appendChild(node);

        // Create connecting lines
        if (i > 0) {
            const line = document.createElement('div');
            line.className = 'circuit-line';
            line.style.width = `${30 + Math.random() * 100}px`;
            line.style.left = `${Math.random() * 100}%`;
            line.style.top = `${Math.random() * 100}%`;
            line.style.transform = `rotate(${Math.random() * 360}deg)`;
            line.style.animationDelay = `${Math.random() * 2}s`;
            circuit.appendChild(line);
        }
    }
    
    document.body.appendChild(circuit);
}

function createDataStream() {
    const stream = document.createElement('div');
    stream.className = 'data-stream';
    
    const streamContent = [
        'GET /secure/', 'POST /auth', 
        'SSH 22', 'HTTPS 443', 
        'AES-256', 'RSA-2048',
        'TCP/IP', 'UDP/853',
        'DNS/TLS', 'HTTP/3'
    ];
    
    for (let i = 0; i < 15; i++) {
        const packet = document.createElement('div');
        packet.className = 'data-packet';
        packet.textContent = streamContent[Math.floor(Math.random() * streamContent.length)];
        packet.style.animationDelay = `${Math.random() * 5}s`;
        packet.style.left = `${Math.random() * 100}%`;
        stream.appendChild(packet);
    }
    
    document.body.appendChild(stream);
}

function createPulseEffect() {
    const pulse = document.createElement('div');
    pulse.className = 'pulse-container';
    
    for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div');
        ring.className = 'pulse-ring';
        ring.style.animationDelay = `${i * 0.5}s`;
        pulse.appendChild(ring);
    }
    
    document.body.appendChild(pulse);
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
        typingEffect.textContent = 'AUTHENTICATION SUCCESSFUL...';
        await new Promise(resolve => setTimeout(resolve, 1000));
        typingEffect.textContent = 'DECRYPTING SECURE MESSAGE...';
        await new Promise(resolve => setTimeout(resolve, 1000));
        await displayBirthdayMessage();
    } else {
        typingEffect.textContent = 'ACCESS DENIED. INVALID SECURITY KEY.';
        // Add glitch effect to the input
        const input = document.getElementById('password');
        input.classList.add('error-shake');
        setTimeout(() => {
            input.classList.remove('error-shake');
            typingEffect.textContent = 'PLEASE ENTER ACCESS CODE TO CONTINUE...';
        }, 2000);
    }
});

// Add enhanced styles
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

    .hex-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    }

    .hex-code {
        position: absolute;
        color: rgba(0, 255, 0, 0.3);
        font-family: monospace;
        font-size: 12px;
        animation: fade 5s infinite;
    }

    @keyframes fade {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
    }

    .error-shake {
        animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }

    @keyframes shake {
        10%, 90% { transform: translate3d(-1px, 0, 0); }
        20%, 80% { transform: translate3d(2px, 0, 0); }
        30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
        40%, 60% { transform: translate3d(4px, 0, 0); }
    }

    .circuit-pattern {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2;
    }

    .circuit-node {
        position: absolute;
        width: 6px;
        height: 6px;
        background: #00ff00;
        border-radius: 50%;
        box-shadow: 0 0 10px #00ff00;
        animation: pulse 2s infinite;
    }

    .circuit-line {
        position: absolute;
        height: 2px;
        background: linear-gradient(90deg, transparent, #00ff00, transparent);
        animation: circuit-flow 3s infinite;
    }

    .data-stream {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 3;
    }

    .data-packet {
        position: absolute;
        font-family: monospace;
        font-size: 12px;
        color: #00ff00;
        white-space: nowrap;
        animation: packet-flow 8s linear infinite;
        opacity: 0.7;
    }

    .pulse-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 4;
        pointer-events: none;
    }

    .pulse-ring {
        position: absolute;
        width: 300px;
        height: 300px;
        border: 2px solid #00ff00;
        border-radius: 50%;
        animation: pulse-ring 3s linear infinite;
        opacity: 0;
    }

    @keyframes circuit-flow {
        0% {
            opacity: 0;
            transform: scaleX(0);
        }
        50% {
            opacity: 1;
            transform: scaleX(1);
        }
        100% {
            opacity: 0;
            transform: scaleX(0);
        }
    }

    @keyframes packet-flow {
        0% {
            transform: translateY(-100%) translateX(-50%);
            opacity: 0;
        }
        10% {
            opacity: 0.7;
        }
        90% {
            opacity: 0.7;
        }
        100% {
            transform: translateY(100vh) translateX(50%);
            opacity: 0;
        }
    }

    @keyframes pulse-ring {
        0% {
            transform: scale(0.3);
            opacity: 0.8;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.5);
            opacity: 0.5;
        }
    }

    .terminal-container {
        position: relative;
        overflow: hidden;
    }

    .terminal-container::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(0, 255, 0, 0.1) 51%,
            transparent 52%
        );
        background-size: 100% 4px;
        animation: scan-lines 4s linear infinite;
        pointer-events: none;
    }

    @keyframes scan-lines {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(100%);
        }
    }
`;
document.head.appendChild(style);

// Start the animation sequence
window.addEventListener('load', () => {
    createMatrixEffect();
    displayCommands();
}); 