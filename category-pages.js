const categories = {
    "coffee": {
        title: "Coffee",
        description: "Find people for coffee and good conversations."
    },
    "walks": {
        title: "Walks",
        description: "Find company for relaxed walks and fresh air."
    },
    "city-walks": {
        title: "City Walks",
        description: "Explore the city and discover interesting places."
    },
    "park-walks": {
        title: "Park Walks",
        description: "Enjoy green spaces and peaceful walks."
    },
    "dog-walks": {
        title: "Dog Walks",
        description: "Meet dog lovers and find company for your walks."
    },
    "shopping": {
        title: "Shopping",
        description: "Find someone to explore shops and discover new places."
    },
    "breakfast": {
        title: "Breakfast",
        description: "Start the day with good food and friendly company."
    },
    "photo-walks": {
        title: "Photo Walks",
        description: "Explore interesting places and share creative ideas."
    },
    "desserts": {
        title: "Desserts",
        description: "Discover sweet places and enjoy a little break."
    },
    "sunset-walks": {
        title: "Sunset Walks",
        description: "Enjoy evening views and peaceful walks."
    },
    "sunrise-walks": {
        title: "Sunrise Walks",
        description: "Start early and enjoy the quiet morning."
    },
    "coffee-books": {
        title: "Coffee & Books",
        description: "Meet fellow book lovers for coffee and conversation."
    }
};


// Распределение тестовых пользователей по подразделам

const categoryUsers = {
    "coffee": [
        "anna",
        "emma",
        "lucas",
        "sofia",
        "daniel"
    ],

    "walks": [
        "anna",
        "daniel",
        "noah",
        "alex",
        "nina"
    ],

    "city-walks": [
        "lucas",
        "daniel",
        "ethan",
        "nina",
        "alex"
    ],

    "park-walks": [
        "anna",
        "noah",
        "alex",
        "mia",
        "nina"
    ],

    "dog-walks": [
        "alex",
        "noah",
        "mia",
        "nina",
        "ethan"
    ],

    "shopping": [
        "emma",
        "clara",
        "lily",
        "sofia",
        "olivia"
    ],

    "breakfast": [
        "emma",
        "olivia",
        "clara",
        "lily",
        "anna"
    ],

    "photo-walks": [
        "mia",
        "clara",
        "ethan",
        "alex",
        "nina"
    ],

    "desserts": [
        "lily",
        "emma",
        "clara",
        "olivia",
        "sofia"
    ],

    "sunset-walks": [
        "alex",
        "nina",
        "noah",
        "mia",
        "daniel"
    ],

    "sunrise-walks": [
        "emma",
        "anna",
        "olivia",
        "lucas",
        "ethan"
    ],

    "coffee-books": [
        "olivia",
        "anna",
        "sofia",
        "clara",
        "emma"
    ]
};


const pageKey = location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

const category = categories[pageKey];

if (category && window.profiles) {

    document.title = `${category.title} | FrenDen`;

    const main = document.querySelector("main");

    const userKeys = categoryUsers[pageKey] || [];

    const cards = userKeys
        .filter(key => window.profiles[key])
        .map(key => {

            const person = window.profiles[key];

            return `
<a href="profile.html?person=${encodeURIComponent(key)}&from=${encodeURIComponent(pageKey)}"
class="user-card">

<div class="user-top">

<div class="avatar">
${person.photo ? `<img src="${person.photo}" alt="${person.name}">` : ""}
</div>

<div class="user-info">
<h2>${person.name}, ${person.age}</h2>
<p>📍 ${person.location} • ${person.distance} km away</p>
</div>

<div class="status">
${person.status}
</div>

</div>

<div class="user-title">
${Array.isArray(person.looking)
                    ? person.looking.join(" · ")
                    : person.looking || person.activities || category.title}
</div>

<div class="user-text">
${person.about || ""}
</div>

<div class="user-time">
🕒 ${person.time || "Flexible"}
</div>

<div class="tags">
${(person.activities || [])
                    .slice(0, 3)
                    .map(item => `<span>${item}</span>`)
                    .join("")}
</div>

</a>
`;
        })
        .join("");

    main.innerHTML = `
<div class="breadcrumbs">
<a href="index.html">Home</a>
<span>›</span>
<a href="coffee-walk.html">Coffee & Walk</a>
<span>›</span>
<span class="current">${category.title}</span>
</div>

<section class="intro">
<h1>${category.title}</h1>
<p>${category.description}</p>
</section>

<section class="filters">
<button>📅 Today</button>
<button>🗓 This Week</button>
<button>🌅 Morning</button>
<button>☀️ Afternoon</button>
<button>🌇 Evening</button>
<button>📍 Nearby</button>
</section>

${cards}
`;
}

