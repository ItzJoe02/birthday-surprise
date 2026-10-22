/* =====================================================
   BIRTHDAY WEBSITE
   Thangoww ❤️ Meoww
===================================================== */


/* ================= MUSIC ================= */

const music = document.getElementById("bgMusic");

if (music) {
    music.volume = 0.45;
}


/* ================= START SURPRISE ================= */

function startSurprise() {

    const welcome = document.getElementById("welcome");
    const countdown = document.getElementById("countdown");
    const main = document.getElementById("main");
    const countNumber = document.getElementById("countNumber");

    welcome.classList.add("hidden");

    countdown.classList.remove("hidden");

    let count = 3;

    countNumber.textContent = count;

    const countdownTimer = setInterval(() => {

        count--;

        if (count > 0) {

            countNumber.textContent = count;

        } else {

            clearInterval(countdownTimer);

            countdown.classList.add("hidden");

            main.classList.remove("hidden");

            if (music) {

                music.play().catch(() => {

                    console.log(
                        "Music will start after user interaction."
                    );

                });

            }

            createFloatingHearts();

            startPhotoSlideshow();
        }

    }, 1000);
}


/* ================= FLOATING HEARTS ================= */

function createFloatingHearts() {

    const container =
        document.getElementById("floatingHearts");

    if (!container) return;

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.className = "floating-heart";

        const hearts = [
            "❤️",
            "💕",
            "💖",
            "💗",
            "💓",
            "💞",
            "💘"
        ];

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 10000);

    }, 700);
}


/* ================= PHOTO SLIDESHOW ================= */

const photos = [

    "images/v1.jpeg",
    "images/v2.jpeg",
    "images/v3.jpeg",
    "images/v4.jpeg",
    "images/v5.jpeg",
    "images/v6.jpeg",
    "images/v7.jpeg",
    "images/v8.jpeg",
    "images/v9.jpeg"

];


const captions = [

    "One of the memories I will always keep close to my heart ❤️",

    "A beautiful moment with my favourite person 🥹❤️",

    "Just you and me... that's enough for me 💕",

    "Another little memory that makes me smile 😊",

    "This one will always be special to me ❤️",

    "Our silly little moments are my favourites 😂💗",

    "Every picture reminds me how lucky I am 🥹",

    "More memories, more laughter, more love 💕",

    "And I want a lifetime of moments with you ❤️"

];


let currentPhoto = 0;

let slideshowStarted = false;


function startPhotoSlideshow() {

    if (slideshowStarted) return;

    slideshowStarted = true;

    const photo =
        document.getElementById("memoryPhoto");

    const number =
        document.getElementById("photoNumber");

    const caption =
        document.getElementById("photoCaption");

    const dots =
        document.getElementById("photoDots");


    if (!photo) return;


    /* CREATE DOTS */

    photos.forEach((_, index) => {

        const dot =
            document.createElement("div");

        dot.className = "photo-dot";

        if (index === 0) {
            dot.classList.add("active");
        }

        dots.appendChild(dot);

    });


    function showPhoto(index) {

        photo.style.opacity = "0";

        setTimeout(() => {

            photo.src = photos[index];

            number.textContent =
                `${index + 1} / ${photos.length}`;

            caption.textContent =
                captions[index];

            const allDots =
                document.querySelectorAll(".photo-dot");

            allDots.forEach(dot => {
                dot.classList.remove("active");
            });

            if (allDots[index]) {
                allDots[index].classList.add("active");
            }

            photo.style.opacity = "1";

        }, 500);
    }


    setInterval(() => {

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        showPhoto(currentPhoto);

    }, 4000);
}


/* ================= MEOW MESSAGE ================= */

function showMeowMessage() {

    const message =
        document.getElementById("meowMessage");

    if (!message) return;

    message.classList.remove("hidden");

    createHeartExplosion();

}


/* ================= HEART EXPLOSION ================= */

function createHeartExplosion() {

    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💞",
        "💘"
    ];

    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement("div");

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.position = "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.zIndex =
            "1000";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.pointerEvents =
            "none";

        document.body.appendChild(heart);


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 350;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.2)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1200 + Math.random() * 800,
                easing:
                    "ease-out"
            }
        );


        setTimeout(() => {
            heart.remove();
        }, 2200);

    }
}


/* ================= LOVE QUIZ ================= */

const questions = [

    {
        question:
            "Who started the first conversation? 😏",

        answers: [
            "Thangoww ❤️",
            "Meoww 🐱",
            "Nobody 😂"
        ],

        correct: 1
    },


    {
        question:
            "Who gets jealous more? 👀",

        answers: [
            "Thangoww 😌",
            "Meoww 😂",
            "Both of us ❤️"
        ],

        correct: 2
    },


    {
        question:
            "Who loves the other person more? ❤️",

        answers: [
            "Thangoww",
            "Meoww",
            "Both forever 💕"
        ],

        correct: 2
    },


    {
        question:
            "What do I want with you? 🥹",

        answers: [
            "Just memories",
            "A few years",
            "A lifetime together ❤️"
        ],

        correct: 2
    },


    {
        question:
            "Who will I choose again and again? 💍",

        answers: [
            "Nobody",
            "My Thangoww ❤️",
            "Maybe someone else 😂"
        ],

        correct: 1
    }

];


let currentQuestion = 0;


function loadQuestion() {

    const question =
        document.getElementById("question");

    const answers =
        document.getElementById("answers");

    const progress =
        document.getElementById("quizProgress");

    const result =
        document.getElementById("quizResult");


    if (!question || !answers) return;


    const q =
        questions[currentQuestion];


    question.textContent =
        q.question;


    progress.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    answers.innerHTML = "";

    result.textContent = "";


    q.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className =
            "answer-btn";

        button.textContent =
            answer;

        button.onclick = () =>
            quizAnswer(index);

        answers.appendChild(button);

    });

}


function quizAnswer(selected) {

    const result =
        document.getElementById("quizResult");

    if (selected === questions[currentQuestion].correct) {

        result.textContent =
            "🥰 Correct! Your Meoww knows you! ❤️";

        result.style.color =
            "#ffe600";

        setTimeout(() => {

            currentQuestion++;

            if (
                currentQuestion >=
                questions.length
            ) {

                result.textContent =
                    "💖 Quiz Complete! Thangoww + Meoww = Forever ❤️";

                document.getElementById(
                    "answers"
                ).innerHTML = "";

                document.getElementById(
                    "question"
                ).textContent =
                    "FOREVER TOGETHER ❤️";

            } else {

                loadQuestion();

            }

        }, 1200);

    } else {

        result.textContent =
            "🥺 Awww... Try again Thangoww ❤️";

        result.style.color =
            "#ffd1e6";

    }

}


/* Load first question */

loadQuestion();


/* ================= GIFT ================= */

function openGift() {

    const gift =
        document.getElementById("giftBox");

    gift.classList.remove("hidden");

    createHeartExplosion();

}


/* ================= LETTER ================= */

function openLetter() {

    const letter =
        document.getElementById("letterBox");

    letter.classList.remove("hidden");

    letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* ================= FINAL CELEBRATION ================= */

function startCelebration() {

    const celebration =
        document.getElementById("celebration");

    celebration.classList.remove("hidden");

    createHeartExplosion();

    setTimeout(() => {

        createHeartExplosion();

    }, 1000);


    setTimeout(() => {

        createHeartExplosion();

    }, 2000);


    if (music) {

        music.play().catch(() => {});

    }

}