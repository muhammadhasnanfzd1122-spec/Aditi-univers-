/* =========================================
   ADITI'S UNIVERSE — JAVASCRIPT
========================================= */

const PASSWORD = "0925";

const photos = [
    "Photo1.jpg",
    "Photo2.jpg",
    "Photo3.jpg",
    "Photo4.jpg",
    "Photo5.jpg",
    "Photo6.jpg",
    "Photo7.jpg",
    "Photo8.jpg",
    "Photo9.jpg",
    "Photo10.jpg"
];

const memories = [
    {
        title: "A Little Beginning ✨",
        text: "Some beautiful stories begin without us even realizing it."
    },
    {
        title: "That Little Smile 💗",
        text: "Some moments are small, but somehow they stay in our hearts."
    },
    {
        title: "A Beautiful Memory 🌙",
        text: "Not every special moment needs a big story. Sometimes the feeling is enough."
    },
    {
        title: "A Moment To Keep 🪐",
        text: "A little memory from a beautiful journey."
    },
    {
        title: "Something Special ✨",
        text: "Some people simply make ordinary days feel a little brighter."
    },
    {
        title: "Another Little Memory 💕",
        text: "One more little piece of this beautiful collection."
    },
    {
        title: "Forever Worth Remembering 🌸",
        text: "There are moments we wish we could keep forever."
    },
    {
        title: "A Tiny Piece Of Happiness 💫",
        text: "A small moment, a big smile, a beautiful memory."
    },
    {
        title: "One More Star ⭐",
        text: "Every memory has its own little place in the universe."
    },
    {
        title: "The Best Is Yet To Come 🌌",
        text: "And maybe the most beautiful memories are still waiting ahead."
    }
];

let currentMemory = 0;
let musicPlaying = false;

/* ELEMENTS */
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const starMessage = document.getElementById("starMessage");
const memoryPopup = document.getElementById("memoryPopup");
const memoryImage = document.getElementById("memoryImage");
const memoryNumber = document.getElementById("memoryNumber");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");
const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");
const giftHint = document.getElementById("giftHint");

/* PAGE SYSTEM */
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    const nextPage = document.getElementById(pageId);

    if (!nextPage) return;

    pages.forEach(page => {
        page.classList.remove("active");
    });

    setTimeout(() => {
        nextPage.classList.add("active");
    }, 50);

    window.scrollTo(0, 0);
}

/* CREATE STAR FIELD */
function createStars() {
    const starContainer = document.getElementById("stars");
    if (!starContainer) return;

    starContainer.innerHTML = ''; // Clear previous if any

    for (let i = 0; i < 80; i++) {
        const star = document.createElement("span");
        star.style.position = "fixed";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        const size = Math.random() * 3 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.borderRadius = "50%";
        star.style.background = "white";
        star.style.opacity = (Math.random() * 0.7 + 0.2).toString();
        star.style.boxShadow = "0 0 8px rgba(255,255,255,.8)";
        star.style.animation = `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`;
        star.style.animationDelay = Math.random() * 4 + "s";

        starContainer.appendChild(star);
    }
}

/* UNIVERSE START */
function startUniverse() {
    startMusic();
    showPage("starPage");
    createSparkles();
}

/* SECRET STAR */
function openStarMessage() {
    if (!starMessage) return;
    starMessage.style.display = "block";
    createHearts(8);
}

/* SPACE MISSION */
function openMission() {
    showPage("missionPage");
    createStarsBurst();
}

/* MOON */
function openMoon() {
    showPage("moonPage");
    typeMoonMessage();
}

function typeMoonMessage() {
    const message = document.querySelector(".moon-message");
    if (!message) return;
    message.style.animation = "popup 1s ease forwards";
}

/* MEMORY GALAXY */
function openMemories() {
    showPage("memoriesPage");
}

function showMemory(index) {
    if (!memoryPopup) return;
    currentMemory = index;
    updateMemory();
    memoryPopup.style.display = "block";
}

function updateMemory() {
    const memory = memories[currentMemory];
    if (!memory) return;

    if (memoryImage) {
        memoryImage.src = photos[currentMemory];
        memoryImage.onerror = function() {
            this.src = "https://placehold.co/600x400/1b0b2e/ffffff?text=Photo+" + (currentMemory + 1);
        };
    }

    if (memoryNumber) {
        memoryNumber.textContent = `MEMORY #${String(currentMemory + 1).padStart(2, "0")}`;
    }

    if (memoryTitle) {
        memoryTitle.textContent = memory.title;
    }

    if (memoryText) {
        memoryText.textContent = memory.text;
    }
}

function nextMemory() {
    currentMemory++;
    if (currentMemory >= photos.length) {
        currentMemory = 0;
    }
    updateMemory();
}

function closeMemory() {
    if (!memoryPopup) return;
    memoryPopup.style.display = "none";
}

/* TRANSMISSION & LETTER */
function openTransmission() {
    closeMemory();
    showPage("transmissionPage");
    createHearts(10);
}

function openLetter() {
    showPage("letterPage");
}

/* TIME MACHINE */
function openTimeMachine() {
    showPage("timePage");
}

/* GIFT */
function openGift() {
    showPage("giftPage");
}

function openGiftBox() {
    if (!giftBox) return;
    giftBox.classList.add("opened");

    if (giftHint) {
        giftHint.style.opacity = "0";
    }

    setTimeout(() => {
        if (giftMessage) {
            giftMessage.style.display = "block";
        }
    }, 600);

    createHearts(15);
    createFireworks();
}

/* FINAL PAGE */
function openFinal() {
    showPage("finalPage");
    setTimeout(() => {
        createFireworks();
        createHearts(20);
        createStarsBurst();
    }, 400);
}

/* RESTART */
function restartStory() {
    currentMemory = 0;
    if (memoryPopup) memoryPopup.style.display = "none";
    if (giftBox) giftBox.classList.remove("opened");
    if (giftMessage) giftMessage.style.display = "none";
    if (giftHint) giftHint.style.opacity = "1";
    showPage("universePage");
}

/* MUSIC */
function startMusic() {
    if (!bgMusic) return;
    bgMusic.volume = 0.45;
    const promise = bgMusic.play();
    if (promise !== undefined) {
        promise.then(() => {
            musicPlaying = true;
            updateMusicButton();
        }).catch(() => {});
    }
}

function toggleMusic() {
    if (!bgMusic) return;
    if (bgMusic.paused) {
        bgMusic.volume = 0.45;
        bgMusic.play().then(() => {
            musicPlaying = true;
            updateMusicButton();
        }).catch(() => {});
    } else {
        bgMusic.pause();
        musicPlaying = false;
        updateMusicButton();
    }
}

function updateMusicButton() {
    if (!musicBtn) return;
    musicBtn.innerHTML = (bgMusic && !bgMusic.paused) ? "🔊" : "🎵";
}

/* HEARTS / EMOJI EFFECTS (FIXED LEFT STACK ISSUE) */
function createHearts(amount = 10) {
    const heartList = ["💗", "💕", "💖", "💓", "💞", "✨", "🤍"];

    for (let i = 0; i < amount; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.className = "floating-heart";
            heart.textContent = heartList[Math.floor(Math.random() * heartList.length)];
            
            // Distributed horizontally across viewport
            heart.style.position = "fixed";
            heart.style.left = (5 + Math.random() * 90) + "vw";
            heart.style.bottom = "-20px";
            heart.style.fontSize = (14 + Math.random() * 18) + "px";
            heart.style.pointerEvents = "none";
            heart.style.zIndex = "999";
            
            // Smooth float up animation
            heart.animate([
                { transform: 'translateY(0) scale(1)', opacity: 1 },
                { transform: `translateY(-${80 + Math.random() * 20}vh) scale(1.3)`, opacity: 0 }
            ], {
                duration: 4000 + Math.random() * 3000,
                easing: 'ease-out'
            });

            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 7000);
        }, i * 150);
    }
}

/* SPARKLES */
function createSparkles() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const sparkle = document.createElement("div");
            sparkle.textContent = "✦";
            sparkle.style.position = "fixed";
            sparkle.style.left = Math.random() * 90 + 5 + "vw";
            sparkle.style.top = Math.random() * 90 + 5 + "vh";
            sparkle.style.color = "#fff";
            sparkle.style.fontSize = 10 + Math.random() * 15 + "px";
            sparkle.style.zIndex = "999";
            sparkle.style.pointerEvents = "none";

            sparkle.animate([
                { opacity: 0, transform: 'scale(0.5)' },
                { opacity: 1, transform: 'scale(1.2)' },
                { opacity: 0, transform: 'scale(0)' }
            ], {
                duration: 1500,
                easing: 'ease-in-out'
            });

            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1500);
        }, i * 80);
    }
}

/* FIREWORKS */
function createFireworks() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const x = 15 + Math.random() * 70;
            const y = 15 + Math.random() * 50;
            createFireworkParticles(x, y);
        }, i * 200);
    }
}

function createFireworkParticles(x, y) {
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement("div");
        particle.style.position = "fixed";
        particle.style.left = x + "vw";
        particle.style.top = y + "vh";
        particle.style.width = "4px";
        particle.style.height = "4px";
        particle.style.borderRadius = "50%";
        particle.style.background = "white";
        particle.style.boxShadow = "0 0 10px #ff8dde";
        particle.style.zIndex = "998";
        particle.style.pointerEvents = "none";

        const angle = (Math.PI * 2 * i) / 12;
        const distance = 40 + Math.random() * 60;

        particle.animate([
            { transform: "translate(0,0) scale(1)", opacity: 1 },
            { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1200,
            easing: "ease-out"
        });

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1200);
    }
}

/* STAR BURST */
function createStarsBurst() {
    for (let i = 0; i < 20; i++) {
        const star = document.createElement("div");
        star.textContent = "✦";
        star.style.position = "fixed";
        star.style.left = "50%";
        star.style.top = "50%";
        star.style.color = "#fff";
        star.style.fontSize = 8 + Math.random() * 12 + "px";
        star.style.zIndex = "999";
        star.style.pointerEvents = "none";

        const angle = Math.random() * Math.PI * 2;
        const distance = 60 + Math.random() * 180;

        star.animate([
            { transform: "translate(-50%,-50%) scale(0)", opacity: 1 },
            { transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(1.5)`, opacity: 0 }
        ], {
            duration: 1400,
            easing: "ease-out"
        });

        document.body.appendChild(star);
        setTimeout(() => star.remove(), 1400);
    }
}

function preloadPhotos() {
    photos.forEach(photo => {
        const img = new Image();
        img.src = photo;
    });
}

/* GLOBAL BINDINGS */
window.startUniverse = startUniverse;
window.openStarMessage = openStarMessage;
window.openMission = openMission;
window.openMoon = openMoon;
window.openMemories = openMemories;
window.showMemory = showMemory;
window.nextMemory = nextMemory;
window.closeMemory = closeMemory;
window.openTransmission = openTransmission;
window.openLetter = openLetter;
window.openTimeMachine = openTimeMachine;
window.openGift = openGift;
window.openGiftBox = openGiftBox;
window.openFinal = openFinal;
window.restartStory = restartStory;
window.toggleMusic = toggleMusic;

document.addEventListener("DOMContentLoaded", () => {
    createStars();
    preloadPhotos();
    updateMusicButton();
});
       
