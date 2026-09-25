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

    // Sau này thêm:
    // 2: [],
    // 3: [],
    // 4: [],
    // ...
};


// ============================================================
// BIẾN CHƯƠNG TRÌNH
// ============================================================

let currentLesson = 1;

let questions = [];
let currentQuestion = 0;

let score = 0;
let wrongWords = [];

let currentMode = "learn";

let currentDirection = "EN_TO_VI";


// ============================================================
// LẤY CÁC PHẦN TỬ HTML
// ============================================================

const content = document.getElementById("content");


// ============================================================
// HÀM RANDOM MẢNG
// ============================================================

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
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
// TẠO MENU BÀI HỌC
// ============================================================

function createLessonMenu() {

    let lessonMenu = document.getElementById("lessonMenu");

    // Nếu HTML chưa có lessonMenu thì tự tạo
    if (!lessonMenu) {

        lessonMenu = document.createElement("div");

        lessonMenu.id = "lessonMenu";

        // Tìm sidebar nếu có
        const sidebar =
            document.querySelector(".sidebar") ||
            document.querySelector("aside");

        if (sidebar) {
            sidebar.prepend(lessonMenu);
        } else {
            document.body.prepend(lessonMenu);
        }
    }


    lessonMenu.innerHTML = "";


    // Tạo Bài 1 → Bài 10
    for (let i = 1; i <= 10; i++) {

        const button = document.createElement("button");

        button.className = "lesson-button";

        button.textContent = `Bài ${i}`;

        button.addEventListener("click", () => {
            selectLesson(i);
        });

        lessonMenu.appendChild(button);
    }
}


// ============================================================
// GẮN NÚT TEST
// ============================================================

function setupTestButton() {

    // Tìm nút test nếu HTML đã có
    let testButton =
        document.getElementById("testButton");


    // Nếu chưa có thì tìm button có chữ Test
    if (!testButton) {

        const buttons =
            document.querySelectorAll("button");

        for (const button of buttons) {

            if (
                button.textContent
                    .toLowerCase()
                    .includes("test")
            ) {
                testButton = button;
                break;
            }
        }
    }


    if (testButton) {

        testButton.id = "testButton";

        testButton.onclick = function () {
            startTest();
        };
    }
}


// ============================================================
// CHỌN BÀI
// ============================================================

function selectLesson(lessonNumber) {

    currentLesson = lessonNumber;


    // Xóa trạng thái active cũ
    document
        .querySelectorAll(".lesson-button")
        .forEach(button => {
            button.classList.remove("active");
        });


    // Active bài hiện tại
    const buttons =
        document.querySelectorAll(".lesson-button");

    if (buttons[lessonNumber - 1]) {

        buttons[lessonNumber - 1]
            .classList.add("active");
    }


    // Nếu bài chưa có dữ liệu
    if (!lessons[lessonNumber]) {

        content.innerHTML = `

            <h1>Bài ${lessonNumber}</h1>

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
// BẮT ĐẦU HỌC
// ============================================================

function startLearning() {

    currentMode = "learn";

    questions =
        shuffle(lessons[currentLesson]);

    currentQuestion = 0;

    score = 0;

    wrongWords = [];


    showQuestion();
}


// ============================================================
// HIỂN THỊ CÂU HỎI
// ============================================================

function showQuestion() {

    const word =
        questions[currentQuestion];


    // Random:
    // 50% Anh → Việt
    // 50% Việt → Anh

    currentDirection =
        Math.random() < 0.5
            ? "EN_TO_VI"
            : "VI_TO_EN";


    let questionText;
    let instruction;


    if (currentDirection === "EN_TO_VI") {

        questionText =
            word.word;

        instruction =
            "Nghĩa tiếng Việt của từ này là gì?";

    } else {

        questionText =
            word.meaning;

        instruction =
            "Từ tiếng Anh của nghĩa này là gì?";
    }


    content.innerHTML = `

        <h1>
            ${currentMode === "test"
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
                ${questionText}
            </div>


            <input
                id="answer"
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


    const answer =
        document.getElementById("answer");


    const checkButton =
        document.getElementById("checkButton");


    answer.focus();


    // Click Kiểm tra
    checkButton.onclick =
        checkAnswer;


    // Nhấn Enter
    answer.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {
                checkAnswer();
            }

        }
    );
}


// ============================================================
// KIỂM TRA ĐÁP ÁN
// ============================================================

function checkAnswer() {

    const input =
        document.getElementById("answer");


    if (!input) {
        return;
    }


    const userAnswer =
        normalize(input.value);


    if (!userAnswer) {

        input.focus();

        return;
    }


    const word =
        questions[currentQuestion];


    let correctAnswer;


    if (currentDirection === "EN_TO_VI") {

        correctAnswer =
            normalize(word.meaning);

    } else {

        correctAnswer =
            normalize(word.word);
    }


    const feedback =
        document.getElementById("feedback");


    const isCorrect =
        userAnswer === correctAnswer;


    if (isCorrect) {

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

                <span>
                    ${word.type}
                </span>

                <span>
                    ${word.ipa}
                </span>

                <br>

                ${word.meaning}

            </div>

            <button
                class="next-button"
                onclick="nextQuestion()"
            >
                Câu tiếp →
            </button>

        `;

    } else {

        wrongWords.push(word);


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
                ${
                    currentDirection === "EN_TO_VI"
                        ? word.meaning
                        : word.word
                }
            </div>

            <div class="word-info">

                <strong>
                    ${word.word}
                </strong>

                <span>
                    ${word.type}
                </span>

                <span>
                    ${word.ipa}
                </span>

                <br>

                ${word.meaning}

            </div>

            <button
                class="next-button"
                onclick="nextQuestion()"
            >
                Câu tiếp →
            </button>

        `;
    }


    input.disabled = true;


    document.getElementById("checkButton")
        .disabled = true;
}


// ============================================================
// CÂU TIẾP
// ============================================================

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        showResult();

        return;
    }


    showQuestion();
}


// ============================================================
// TEST TOÀN BỘ BÀI
// ============================================================

function startTest() {

    if (!lessons[currentLesson]) {

        content.innerHTML = `

            <h1>Test bài ${currentLesson}</h1>

            <div class="card">

                Bài này chưa có từ vựng.

            </div>

        `;

        return;
    }


    currentMode = "test";


    questions =
        shuffle(lessons[currentLesson]);


    currentQuestion = 0;

    score = 0;

    wrongWords = [];


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
                    Từ cần xem lại
                </h3>

                ${wrongWords
                    .map(word => `

                        <div class="wrong-item">

                            <strong>
                                ${word.word}
                            </strong>

                            <span>
                                ${word.type}
                            </span>

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
            ${
                currentMode === "test"
                    ? "Kết quả Test"
                    : "Hoàn thành"
            }
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


            <div class="result-buttons">

                <button
                    class="check-button"
                    onclick="startLearning()"
                >
                    Học lại
                </button>


                <button
                    class="check-button"
                    onclick="startTest()"
                >
                    Test lại
                </button>

            </div>

        </div>

    `;
}


// ============================================================
// KHỞI ĐỘNG WEBSITE
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createLessonMenu();

        setupTestButton();

        selectLesson(1);

    }
);