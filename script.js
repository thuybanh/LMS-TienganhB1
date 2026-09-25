// ============================================================
// DỮ LIỆU TỪ VỰNG
// ============================================================

const lessons = {

    1: [

        {
            word: "abandon",
            type: "v",
            ipa: "/əˈbændən/",
            meaning: "bỏ rơi"
        },

        {
            word: "abuse",
            type: "n",
            ipa: "/əˈbjuːs/",
            meaning: "sự lạm dụng"
        },

        {
            word: "analyze",
            type: "v",
            ipa: "/ˈænəlaɪz/",
            meaning: "phân tích"
        },

        {
            word: "benefit",
            type: "v",
            ipa: "/ˈbenɪfɪt/",
            meaning: "hưởng lợi"
        },

        {
            word: "communicate",
            type: "v",
            ipa: "/kəˈmjuːnɪkeɪt/",
            meaning: "giao tiếp"
        },

        {
            word: "conditions",
            type: "n",
            ipa: "/kənˈdɪʃənz/",
            meaning: "điều kiện"
        },

        {
            word: "conservation",
            type: "n",
            ipa: "/ˌkɒnsəˈveɪʃən/",
            meaning: "sự bảo tồn"
        },

        {
            word: "convince",
            type: "v",
            ipa: "/kənˈvɪns/",
            meaning: "thuyết phục"
        },

        {
            word: "cruel",
            type: "adj",
            ipa: "/ˈkruːəl/",
            meaning: "tàn nhẫn"
        },

        {
            word: "debate",
            type: "v",
            ipa: "/dɪˈbeɪt/",
            meaning: "tranh luận"
        },

        {
            word: "domestic",
            type: "adj",
            ipa: "/dəˈmestɪk/",
            meaning: "nội địa"
        },

        {
            word: "emergency",
            type: "n",
            ipa: "/ɪˈmɜːdʒənsi/",
            meaning: "khẩn cấp"
        },

        {
            word: "environment",
            type: "n",
            ipa: "/ɪnˈvaɪərənmənt/",
            meaning: "môi trường"
        },

        {
            word: "feed",
            type: "v",
            ipa: "/fiːd/",
            meaning: "cho ăn"
        },

        {
            word: "harmless",
            type: "adj",
            ipa: "/ˈhɑːmləs/",
            meaning: "vô hại"
        },

        {
            word: "herd",
            type: "n",
            ipa: "/hɜːd/",
            meaning: "bầy đàn"
        },

        {
            word: "humane",
            type: "adj",
            ipa: "/hjuːˈmeɪn/",
            meaning: "nhân đạo, nhân văn"
        },

        {
            word: "involve",
            type: "v",
            ipa: "/ɪnˈvɒlv/",
            meaning: "liên quan đến"
        },

        {
            word: "issue",
            type: "n",
            ipa: "/ˈɪʃuː/",
            meaning: "vấn đề"
        },

        {
            word: "poisonous",
            type: "adj",
            ipa: "/ˈpɔɪzənəs/",
            meaning: "độc hại, có độc"
        },

        {
            word: "protect",
            type: "v",
            ipa: "/prəˈtekt/",
            meaning: "bảo vệ"
        },

        {
            word: "realize",
            type: "v",
            ipa: "/ˈrɪəlaɪz/",
            meaning: "nhận ra"
        },

        {
            word: "result",
            type: "n",
            ipa: "/rɪˈzʌlt/",
            meaning: "kết quả"
        },

        {
            word: "savannah",
            type: "n",
            ipa: "/səˈvænə/",
            meaning: "thảo nguyên"
        },

        {
            word: "search for",
            type: "v",
            ipa: "/sɜːtʃ fɔː/",
            meaning: "tìm kiếm"
        },

        {
            word: "sedate",
            type: "v",
            ipa: "/sɪˈdeɪt/",
            meaning: "cho dùng thuốc an thần"
        },

        {
            word: "specialization",
            type: "n",
            ipa: "/ˌspeʃəlaɪˈzeɪʃən/",
            meaning: "chuyên môn hóa"
        },

        {
            word: "suffer",
            type: "v",
            ipa: "/ˈsʌfə/",
            meaning: "chịu đựng"
        },

        {
            word: "survive",
            type: "v",
            ipa: "/səˈvaɪv/",
            meaning: "tồn tại"
        },

        {
            word: "zoology",
            type: "n",
            ipa: "/zuˈɒlədʒi/",
            meaning: "động vật học"
        }

    ]

};


// ============================================================
// BIẾN CHƯƠNG TRÌNH
// ============================================================

let currentLesson = 1;

let questions = [];

let currentQuestion = 0;

let score = 0;

let wrongWords = [];

let mode = "learn";

let direction = "EN_TO_VI";

let answered = false;


// ============================================================
// LẤY HTML
// ============================================================

const lessonMenu =
    document.getElementById("lessonMenu");

const testButton =
    document.getElementById("testButton");

const content =
    document.getElementById("content");


// ============================================================
// RANDOM
// ============================================================

function shuffle(array) {

    const newArray = [...array];

    for (
        let i = newArray.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            newArray[i],
            newArray[j]
        ] =
        [
            newArray[j],
            newArray[i]
        ];
    }

    return newArray;
}


// ============================================================
// CHUẨN HÓA CÂU TRẢ LỜI
// ============================================================

function normalize(text) {

    return text
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ");

}


// ============================================================
// TẠO MENU
// ============================================================

function createMenu() {

    lessonMenu.innerHTML = "";


    for (let i = 1; i <= 10; i++) {

        const button =
            document.createElement("button");


        button.className =
            "lesson-button";


        button.textContent =
            `Bài ${i}`;


        button.addEventListener(
            "click",
            function () {

                selectLesson(i);

            }
        );


        lessonMenu.appendChild(button);
    }
}


// ============================================================
// CHỌN BÀI
// ============================================================

function selectLesson(number) {

    currentLesson = number;


    const buttons =
        document.querySelectorAll(
            ".lesson-button"
        );


    buttons.forEach(
        button => {
            button.classList.remove(
                "active"
            );
        }
    );


    if (buttons[number - 1]) {

        buttons[number - 1]
            .classList.add("active");
    }


    if (!lessons[number]) {

        content.innerHTML = `

            <h1>Bài ${number}</h1>

            <div class="card">

                <p>
                    Bài này chưa có từ vựng.
                </p>

            </div>

        `;

        return;
    }


    startLearning();
}


// ============================================================
// HỌC TỪ VỰNG
// ============================================================

function startLearning() {

    mode = "learn";

    questions =
        shuffle(
            lessons[currentLesson]
        );

    currentQuestion = 0;

    score = 0;

    wrongWords = [];

    showQuestion();
}


// ============================================================
// TEST
// ============================================================

function startTest() {

    if (!lessons[currentLesson]) {

        content.innerHTML = `

            <h1>
                Test bài ${currentLesson}
            </h1>

            <div class="card">

                <p>
                    Bài này chưa có từ vựng.
                </p>

            </div>

        `;

        return;
    }


    mode = "test";

    questions =
        shuffle(
            lessons[currentLesson]
        );

    currentQuestion = 0;

    score = 0;

    wrongWords = [];

    showQuestion();
}


// ============================================================
// HIỂN THỊ CÂU HỎI
// ============================================================

function showQuestion() {

    answered = false;


    const word =
        questions[currentQuestion];


    // Random Anh → Việt / Việt → Anh

    direction =
        Math.random() < 0.5
            ? "EN_TO_VI"
            : "VI_TO_EN";


    let question;

    let instruction;


    if (direction === "EN_TO_VI") {

        question =
            word.word;

        instruction =
            "Nghĩa tiếng Việt của từ này là gì?";

    } else {

        question =
            word.meaning;

        instruction =
            "Từ tiếng Anh của nghĩa này là gì?";
    }


    content.innerHTML = `

        <h1>

            ${mode === "test"
                ? "Test"
                : "Học từ vựng"}

            — Bài ${currentLesson}

        </h1>


        <div class="card">

            <div class="progress">

                Câu ${currentQuestion + 1}
                / ${questions.length}

            </div>


            <div class="question-type">

                ${instruction}

            </div>


            <div class="question">

                ${question}

            </div>


            <input
                id="answerInput"
                class="answer-input"
                type="text"
                placeholder="Nhập câu trả lời..."
                autocomplete="off"
            >


            <button
                id="checkButton"
                class="check-button"
            >

                Kiểm tra

            </button>


            <div id="feedback"></div>

        </div>
    `;


    const input =
        document.getElementById(
            "answerInput"
        );


    const button =
        document.getElementById(
            "checkButton"
        );


    input.focus();


    // Click chuột để kiểm tra

    button.addEventListener(
        "click",
        checkAnswer
    );
}


// ============================================================
// KIỂM TRA ĐÁP ÁN
// ============================================================

function checkAnswer() {

    // Nếu đã trả lời rồi thì Enter sẽ sang câu tiếp
    if (answered) {

        nextQuestion();

        return;
    }


    const input =
        document.getElementById(
            "answerInput"
        );


    const button =
        document.getElementById(
            "checkButton"
        );


    const feedback =
        document.getElementById(
            "feedback"
        );


    const userAnswer =
        normalize(input.value);


    if (userAnswer === "") {

        input.focus();

        return;
    }


    const word =
        questions[currentQuestion];


    let correctAnswer;


    if (direction === "EN_TO_VI") {

        correctAnswer =
            normalize(word.meaning);

    } else {

        correctAnswer =
            normalize(word.word);
    }


    const correct =
        userAnswer === correctAnswer;


    answered = true;


    input.disabled = true;

    button.disabled = true;


    if (correct) {

        score++;


        feedback.className =
            "feedback correct";


        feedback.innerHTML = `

            <div class="feedback-title">

                ✓ Đúng

            </div>


            <div class="word-info">

                <strong>
                    ${word.word}
                </strong>

                <br>

                ${word.meaning}

                <br>

                ${word.type}
                ·
                ${word.ipa}

            </div>


            <button
                id="nextButton"
                class="next-button"
            >

                Câu tiếp →

            </button>

        `;

    } else {

        wrongWords.push(word);


        const answer =
            direction === "EN_TO_VI"
                ? word.meaning
                : word.word;


        feedback.className =
            "feedback wrong";


        feedback.innerHTML = `

            <div class="feedback-title">

                ✗ Sai

            </div>


            <div>

                Đáp án đúng:

            </div>


            <div class="correct-answer">

                ${answer}

            </div>


            <div class="word-info">

                <strong>
                    ${word.word}
                </strong>

                <br>

                ${word.meaning}

                <br>

                ${word.type}
                ·
                ${word.ipa}

            </div>


            <button
                id="nextButton"
                class="next-button"
            >

                Câu tiếp →

            </button>

        `;
    }


    // Nút chuột "Câu tiếp"

    document
        .getElementById("nextButton")
        .addEventListener(
            "click",
            nextQuestion
        );
}


// ============================================================
// ENTER
// ============================================================

// Enter hoạt động ở mọi câu:
//
// 1. Chưa trả lời:
//    Enter = kiểm tra
//
// 2. Đã trả lời:
//    Enter = câu tiếp
//

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Enter") {
            return;
        }


        // Không xử lý nếu đang ở textarea
        if (
            event.target.tagName === "TEXTAREA"
        ) {
            return;
        }


        event.preventDefault();


        if (answered) {

            nextQuestion();

        } else {

            checkAnswer();

        }

    }
);


// ============================================================
// CÂU TIẾP
// ============================================================

function nextQuestion() {

    if (
        currentQuestion >=
        questions.length - 1
    ) {

        showResult();

        return;
    }


    currentQuestion++;


    showQuestion();
}


// ============================================================
// HIỂN THỊ KẾT QUẢ
// ============================================================

function showResult() {

    const total =
        questions.length;


    const wrong =
        total - score;


    let wrongHTML = "";


    if (wrongWords.length > 0) {

        wrongHTML = `

            <div class="wrong-list">

                <h3>
                    Từ sai
                </h3>


                ${wrongWords
                    .map(word => `

                        <div class="wrong-item">

                            <strong>
                                ${word.word}
                            </strong>

                            —

                            ${word.meaning}

                        </div>

                    `)
                    .join("")}

            </div>

        `;
    }


    content.innerHTML = `

        <h1>

            ${mode === "test"
                ? "Kết quả Test"
                : "Hoàn thành"}

        </h1>


        <div class="card result">

            <div class="result-title">

                Bài ${currentLesson}

            </div>


            <div class="score">

                ${score} / ${total}

            </div>


            <div class="result-detail">

                Đúng ${score} câu
                ·
                Sai ${wrong} câu

            </div>


            ${wrongHTML}


            <button
                id="retryButton"
                class="check-button"
            >

                Làm lại

            </button>

        </div>

    `;


    document
        .getElementById("retryButton")
        .addEventListener(
            "click",
            function () {

                if (mode === "test") {

                    startTest();

                } else {

                    startLearning();

                }

            }
        );
}


// ============================================================
// KHỞI ĐỘNG
// ============================================================

createMenu();


testButton.addEventListener(
    "click",
    startTest
);


selectLesson(1);