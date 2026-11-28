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
    },

    "gym": {
        title: "Gym",
        description: "Find company for gym sessions and fitness training."
    },

    "yoga-pilates": {
        title: "Yoga & Pilates",
        description: "Find people to practice yoga, Pilates and stretching."
    },

    "group-workouts": {
        title: "Group Workouts",
        description: "Join group fitness classes and exercise together."
    },

    "running": {
        title: "Running",
        description: "Find running partners and enjoy outdoor training."
    },

    "racket-sports": {
        title: "Racket Sports",
        description: "Find partners for tennis, badminton and table tennis."
    },

    "group-sports": {
        title: "Group Sports",
        description: "Find teams and people for group sports and games."
    },

    "cycling": {
        title: "Cycling",
        description: "Find company for bike rides and cycling routes."
    },

    "swimming": {
        title: "Swimming",
        description: "Find swimming partners and enjoy training together."
    },

    "hiking": {
        title: "Hiking",
        description: "Find company for hikes, trails and outdoor adventures."
    },

    "other-sports": {
        title: "Other Sports",
        description: "Discover other sports and find people to enjoy them with."
    },

    // ENTERTAINMENT

    "cinema": {
        title: "Cinema",
        description: "Find company for movies, cinema evenings and film nights."
    },

    "concerts-live-music": {
        title: "Concerts & Live Music",
        description: "Find people to enjoy concerts and live music together."
    },

    "spa-wellness": {
        title: "Spa & Wellness",
        description: "Find company for spa days, saunas and wellness experiences."
    },

    "karaoke": {
        title: "Karaoke",
        description: "Find people to sing, have fun and enjoy karaoke together."
    },

    "bowling-billiards": {
        title: "Bowling & Billiards",
        description: "Find partners for bowling, billiards and friendly games."
    },

    "theatre-musicals": {
        title: "Theatre & Musicals",
        description: "Find company for theatre performances and musicals."
    },

    "festivals": {
        title: "Festivals",
        description: "Discover festivals and enjoy special events together."
    },

    "museums-exhibitions": {
        title: "Museums & Exhibitions",
        description: "Explore museums, art exhibitions and cultural places together."
    },

    "stand-up-comedy": {
        title: "Stand-up Comedy",
        description: "Find company for comedy shows and stand-up evenings."
    },

    "nightclubs": {
        title: "Nightclubs",
        description: "Find people for dancing and nights out."
    },

    "escape-rooms": {
        title: "Escape Rooms",
        description: "Find a team for puzzles, challenges and escape room adventures."
    },

    "events-shows": {
        title: "Events & Shows",
        description: "Discover interesting events, performances and special shows."
    },

    "dance-events": {
        title: "Dance & Dance Events",
        description: "Find company for dancing and dance events."
    },

    "other": {
        title: "Other",
        description: "Find company for other entertainment activities and experiences."
    }

};

const sectionParents = {
    // COFFEE & WALK
    "coffee": { name: "Coffee & Walk", url: "coffee-walk.html" },
    "walks": { name: "Coffee & Walk", url: "coffee-walk.html" },
    "city-walks": { name: "Coffee & Walk", url: "coffee-walk.html" },
    "park-walks": { name: "Coffee & Walk", url: "coffee-walk.html" },
    "dog-walks": { name: "Coffee & Walk", url: "coffee-walk.html" },
    "shopping": { name: "Coffee & Walk", url: "coffee-walk.html" },
    "breakfast": { name: "Coffee & Walk", url: "coffee-walk.html" },
    "photo-walks": { name: "Coffee & Walk", url: "coffee-walk.html" },
    "desserts": { name: "Coffee & Walk", url: "coffee-walk.html" },
    "sunset-walks": { name: "Coffee & Walk", url: "coffee-walk.html" },
    "sunrise-walks": { name: "Coffee & Walk", url: "coffee-walk.html" },
    "coffee-books": { name: "Coffee & Walk", url: "coffee-walk.html" },

    // SPORT
    "gym": { name: "Sport", url: "sport.html" },
    "yoga-pilates": { name: "Sport", url: "sport.html" },
    "group-workouts": { name: "Sport", url: "sport.html" },
    "running": { name: "Sport", url: "sport.html" },
    "racket-sports": { name: "Sport", url: "sport.html" },
    "group-sports": { name: "Sport", url: "sport.html" },
    "cycling": { name: "Sport", url: "sport.html" },
    "swimming": { name: "Sport", url: "sport.html" },
    "hiking": { name: "Sport", url: "sport.html" },
    "other-sports": { name: "Sport", url: "sport.html" },

    // ENTERTAINMENT
    "cinema": { name: "Entertainment", url: "entertainment.html" },
    "concerts-live-music": { name: "Entertainment", url: "entertainment.html" },
    "spa-wellness": { name: "Entertainment", url: "entertainment.html" },
    "karaoke": { name: "Entertainment", url: "entertainment.html" },
    "bowling-billiards": { name: "Entertainment", url: "entertainment.html" },
    "theatre-musicals": { name: "Entertainment", url: "entertainment.html" },
    "festivals": { name: "Entertainment", url: "entertainment.html" },
    "museums-exhibitions": { name: "Entertainment", url: "entertainment.html" },
    "stand-up-comedy": { name: "Entertainment", url: "entertainment.html" },
    "nightclubs": { name: "Entertainment", url: "entertainment.html" },
    "escape-rooms": { name: "Entertainment", url: "entertainment.html" },
    "events-shows": { name: "Entertainment", url: "entertainment.html" },
    "dance-events": { name: "Entertainment", url: "entertainment.html" },
    "other": { name: "Entertainment", url: "entertainment.html" }
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
    ],

    "gym": [
        "anna",
        "emma",
        "lucas",
        "sofia",
        "daniel"
    ],

    "yoga-pilates": [
        "emma",
        "anna",
        "olivia",
        "clara",
        "mia"
    ],

    "group-workouts": [
        "emma",
        "clara",
        "lily",
        "olivia",
        "sofia"
    ],

    "running": [
        "daniel",
        "lucas",
        "noah",
        "alex",
        "ethan"
    ],

    "racket-sports": [
        "lucas",
        "daniel",
        "alex",
        "nina",
        "ethan"
    ],

    "group-sports": [
        "noah",
        "alex",
        "daniel",
        "ethan",
        "lucas"
    ],

    "cycling": [
        "noah",
        "lucas",
        "mia",
        "alex",
        "nina"
    ],

    "swimming": [
        "anna",
        "emma",
        "mia",
        "olivia",
        "clara"
    ],

    "hiking": [
        "noah",
        "alex",
        "nina",
        "mia",
        "daniel"
    ],

    "other-sports": [
        "sofia",
        "ethan",
        "lily",
        "olivia",
        "clara"
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
<a href="${sectionParents[pageKey].url}">
${sectionParents[pageKey].name}
</a>
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

