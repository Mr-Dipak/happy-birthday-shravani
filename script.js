const FRIEND_NAME = "Shravani Dhuri"; // Replace with your friend's name
const SECRET_CODE = "2025"; // You can change this to any code you want
const TYPING_SPEED = 50;

const commands = [
    "INITIALIZING SYSTEM...",
    "ESTABLISHING SECURE CONNECTION...",
    "SCANNING FOR BIRTHDAY PROTOCOLS...",
    "LOADING CELEBRATION MATRIX...",
    "DETECTED SPECIAL INDIVIDUAL...",
    "PREPARING BIRTHDAY SEQUENCE...",
    "> SECURITY CHECK REQUIRED",
    "PLEASE ENTER ACCESS CODE TO CONTINUE..."
];

const birthdayMessage = [
    "ACCESS GRANTED!",
    "EXECUTING BIRTHDAY_PROTOCOL.exe",
    `DEAR ${FRIEND_NAME},`,
    "HAPPY BIRTHDAY!",
    "MAY YOUR CODE BE BUG-FREE",
    "AND YOUR ENCRYPTION STRONG.",
    "CELEBRATING YOUR SPECIAL DAY",
    "IN TRUE HACKER STYLE!",
    "<3"
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

document.getElementById('submit-code').addEventListener('click', async () => {
    const password = document.getElementById('password').value;
    if (password === SECRET_CODE) {
        accessForm.classList.add('hidden');
        await displayBirthdayMessage();
    } else {
        typingEffect.textContent = 'ACCESS DENIED. TRY AGAIN.';
        setTimeout(() => {
            typingEffect.textContent = 'PLEASE ENTER ACCESS CODE TO CONTINUE...';
        }, 2000);
    }
});

// Start the animation sequence
window.addEventListener('load', () => {
    createMatrixEffect();
    displayCommands();
}); 