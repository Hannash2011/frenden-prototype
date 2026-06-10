
document.addEventListener("DOMContentLoaded", () => {
    /* ===== LOCATION ===== */
    /* ===== LOCATION ===== */
    const locationBtn = document.getElementById("locationBtn");
    const dropdown = document.getElementById("locationDropdown");
    const locationWrapper = document.querySelector(".location-wrapper");
    const input = document.getElementById("locationInput");
    const options = document.querySelectorAll(".location-option");

    const dateBtn = document.getElementById("dateBtn");
    const calendar = document.getElementById("calendar");

    /* OPEN / CLOSE LOCATION */
    locationBtn.onclick = () => {
        dropdown.style.display =
            dropdown.style.display === "block" ? "none" : "block";
    };

    /* LOCATION OPTIONS */
    options.forEach(option => {
        option.onclick = () => {
            locationBtn.textContent = option.textContent;
            dropdown.style.display = "none";
        };
    });

    /* CUSTOM LOCATION */
    input.addEventListener("keydown", function (e) {

        if (e.key === "Enter" && input.value.trim() !== "") {

            locationBtn.textContent = "📍 " + input.value;
            dropdown.style.display = "none";
        }
    });

    /* CLOSE ON OUTSIDE CLICK */
    document.addEventListener("click", function (e) {

        if (!locationWrapper.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });

    /* DATE */
    dateBtn.onclick = () => {
        calendar.click();
    };

    calendar.addEventListener("change", function () {

        if (!this.value) {
            dateBtn.textContent = "📅 Any day";
            return;
        }

        const date = new Date(this.value);

        const formatted = date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short"
        });

        dateBtn.textContent = "📅 " + formatted;
    });

    // ----------------------
    // ДАННЫЕ
    // ----------------------

    const data = {
        "Путешествия": {
            "Море": [],
            "Горы": [],
            "Турция": [
                { name: "Анна", age: 34, dist: 2, text: "Полететь в Тоскану в сентябре" },
                { name: "Ольга", age: 29, dist: 5, text: "Ищу тур в Турцию летом" }
            ],
            "За город": []
        },

        "Спорт": {
            "Футбол": [
                { name: "Джон", age: 28, dist: 1, text: "Пойти на футбол в субботу" },
            ],
            "Пробежка": [
                { name: "Марина", age: 31, dist: 2, text: "Утренняя пробежка у озера" }
            ]
        },

        "Развлечения": {
            "Кафе": [
                { name: "Елена", age: 38, dist: 3, text: "Выпить кофе в парке вечером" }
            ]
        },

        "Просто общение": {
            "Кофе": [
                { name: "Света", age: 27, dist: 1, text: "Просто погулять и поговорить" }
            ]
        }
    };

    // ----------------------
    // НАВИГАЦИЯ
    // ----------------------

    let currentPerson = null;

    function show(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    }

    // ----------------------
    // ГЛАВНАЯ
    // ----------------------

    function renderHome() {
        const home = document.getElementById("home");

        const categories = Object.keys(data);

        home.innerHTML = `
    <h2>Категории</h2>
    <div class="grid">
        ${categories.map(c => `
        <div class="card" onclick="openCategory('${c}')">
            <h3>${c}</h3>
        </div>
        `).join("")}
    </div>
    `;
    }

    // ----------------------
    // ПОДКАТЕГОРИИ
    // ----------------------

    function openCategory(cat) {
        const page = document.getElementById("subcategories");

        const subs = Object.keys(data[cat]);

        page.innerHTML = `
    <h2>${cat}</h2>
    <div class="grid">
        ${subs.map(s => `
        <div class="card" onclick="openSub('${cat}','${s}')">
            ${s}
        </div>
        `).join("")}
    </div>
    `;

        show("subcategories");
    }

    // ----------------------
    // ЛЮДИ
    // ----------------------

    function openSub(cat, sub) {
        const page = document.getElementById("people");

        const people = data[cat][sub];

        page.innerHTML = `
    <h2>${sub}</h2>

    ${people.map((p, i) => `
    <div class="person" onclick="openProfile('${cat}','${sub}',${i})">
        <b>${p.name}, ${p.age}</b>
        <div class="distance">📍 ${p.dist} км</div>
        <div>${p.text}</div>
    </div>
    `).join("")}
    `;

        show("people");
    }

    // ----------------------
    // ПРОФИЛЬ
    // ----------------------

    function openProfile(cat, sub, i) {
        currentPerson = data[cat][sub][i];

        const page = document.getElementById("profile");

        page.innerHTML = `
    <h2>${currentPerson.name}</h2>
    <p>📍 ${currentPerson.dist} км</p>

    <p><b>Хочет:</b> ${currentPerson.text}</p>

    <button onclick="openChat()">Написать</button>

    <div style="margin-top:10px;">
        <button onclick="blockUser()">Заблокировать</button>
        <button onclick="reportUser()">Пожаловаться</button>
    </div>
    `;

        show("profile");
    }

    // ----------------------
    // ЧАТ
    // ----------------------

    let messages = [];

    function openChat() {
        messages = [];
        const page = document.getElementById("chat");

        page.innerHTML = `
    <h2>Чат с ${currentPerson.name}</h2>

    <div class="chat-box" id="chatBox"></div>

    <div class="input-row">
        <input id="msgInput" placeholder="Сообщение..." />
        <button onclick="sendMsg()">Отправить</button>
    </div>

    <button onclick="blockUser()">🚫 Блокировать</button>
    `;

        show("chat");
        renderChat();
    }

    function sendMsg() {
        const input = document.getElementById("msgInput");

        if (!input.value.trim()) return;

        messages.push({ text: input.value, me: true });

        renderChat();

        input.value = "";
    }

    function renderChat() {
        const box = document.getElementById("chatBox");

        if (!box) return;

        box.innerHTML = messages.map(m => `
    <div class="msg ${m.me ? "me" : ""}">
        ${m.text} 
    </div>
    `).join("");

        box.scrollTop = box.scrollHeight;
    }

    // ----------------------
    // БЛОК / ЖАЛОБА
    // ----------------------

    function blockUser() {
        alert("Пользователь заблокирован");
        show("home");
    }

    function reportUser() {
        alert("Жалоба отправлена");
    }

    // ----------------------
    // ИНИЦИАЛИЗАЦИЯ
    // ----------------------

    renderHome();
    show("home");

});
