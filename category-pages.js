const categories = {
    "dog-walks": {
        title: "Dog Walks",
        description: "Meet dog lovers and find company for your daily walks.",
        people: [
            ["Maya, 27", "🐕 Morning walk with my dog", "Looking for someone to walk with our dogs and enjoy the fresh air.", "Today • 09:00", ["🐕 Dogs", "🌳 Park", "💬 Chat"]],
            ["Alex, 30", "🐾 Weekend dog walk", "My dog loves meeting new friends. Let's explore a new walking route.", "Saturday • 11:00", ["🐾 Dog lovers", "🚶 Walk", "🌿 Nature"]],
            ["Nina, 33", "🐶 Relaxed evening walk", "Looking for another dog owner to join us for an easy evening walk.", "Today • 18:00", ["🐶 Dogs", "🌆 Evening", "🚶 Easy walk"]]
        ]
    },
    "shopping": {
        title: "Shopping",
        description: "Find someone to browse shops, explore malls and discover new places.",
        people: [
            ["Maya, 27", "🛍️ Shopping around the city", "Looking for company to browse shops and discover some new stores.", "Today • 14:00", ["🛍️ Shopping", "🏙️ City", "💬 Chat"]],
            ["Alex, 30", "👟 Weekend shopping", "Planning a relaxed shopping trip this weekend. Coffee afterwards?", "Saturday • 13:00", ["👟 Stores", "☕ Coffee", "🗓 Weekend"]],
            ["Nina, 33", "🛒 Browse and explore", "No strict plans, just looking around and enjoying a day out.", "Today • 16:00", ["🛒 Browse", "👋 Meet", "☀️ Afternoon"]]
        ]
    },
    "breakfast": {
        title: "Breakfast",
        description: "Start the day with good food, coffee and friendly company.",
        people: [
            ["Maya, 27", "🥐 Breakfast at a café", "Looking for someone to try a cosy breakfast place this morning.", "Today • 09:00", ["🥐 Breakfast", "☕ Coffee", "💬 Chat"]],
            ["Alex, 30", "🍳 Weekend brunch", "Let's find a nice brunch spot and take the morning slowly.", "Sunday • 11:00", ["🍳 Brunch", "🗓 Weekend", "🥞 Food"]],
            ["Nina, 33", "☕ Early coffee and breakfast", "Would love some company for breakfast before starting the day.", "Tomorrow • 08:30", ["☕ Coffee", "🥑 Breakfast", "🌅 Morning"]]
        ]
    },
    "photo-walks": {
        title: "Photo Walks",
        description: "Explore interesting places, take photos and share creative ideas.",
        people: [
            ["Maya, 27", "📷 Photo walk downtown", "Looking for someone to photograph streets, details and everyday moments.", "Today • 16:00", ["📷 Photography", "🏙️ City", "💬 Chat"]],
            ["Alex, 30", "🌿 Nature photography", "Let's explore a green area and capture interesting views together.", "Saturday • 10:00", ["🌿 Nature", "📸 Photos", "🚶 Walk"]],
            ["Nina, 33", "✨ Golden hour photos", "Looking for a photo buddy to catch the best evening light.", "Today • 18:30", ["✨ Golden hour", "📷 Camera", "🌇 Evening"]]
        ]
    },
    "desserts": {
        title: "Desserts",
        description: "Discover sweet places, try new treats and enjoy a little break.",
        people: [
            ["Maya, 27", "🍰 Cake and coffee", "Want to try a new cake café with someone who loves desserts.", "Today • 15:00", ["🍰 Cake", "☕ Coffee", "💬 Chat"]],
            ["Alex, 30", "🧁 Find the best dessert", "Let's visit a sweet spot and decide which dessert deserves the top place.", "Saturday • 14:00", ["🧁 Desserts", "🍮 Treats", "🗓 Weekend"]],
            ["Nina, 33", "🍓 A little sweet break", "Looking for company for a relaxed café visit and something sweet.", "Tomorrow • 13:00", ["🍓 Sweet treats", "☕ Café", "🙂 Relax"]]
        ]
    },
    "sunset-walks": {
        title: "Sunset Walks",
        description: "Enjoy evening views, peaceful walks and the colours of the sunset.",
        people: [
            ["Maya, 27", "🌇 Sunset by the city", "Looking for someone to enjoy the evening light and take a relaxed walk.", "Today • 19:00", ["🌇 Sunset", "🚶 Walk", "💬 Chat"]],
            ["Alex, 30", "🌅 Evening views", "Let's find a nice viewpoint and enjoy the sunset together.", "Saturday • 20:00", ["🌅 Views", "📷 Photos", "🌆 Evening"]],
            ["Nina, 33", "🌆 A quiet sunset walk", "Would love some company for a peaceful walk at the end of the day.", "Today • 19:30", ["🌆 Evening", "🌿 Relax", "🚶 Walk"]]
        ]
    },
    "sunrise-walks": {
        title: "Sunrise Walks",
        description: "Start early, enjoy the quiet morning and watch the world wake up.",
        people: [
            ["Maya, 27", "🌅 Early morning walk", "Looking for an early bird to enjoy the quiet streets before the day begins.", "Tomorrow • 06:30", ["🌅 Sunrise", "🚶 Walk", "☕ Coffee"]],
            ["Alex, 30", "🌄 Sunrise and fresh air", "Let's get outside early and start the day with a peaceful walk.", "Saturday • 06:00", ["🌄 Morning", "🌿 Nature", "☀️ Fresh air"]],
            ["Nina, 33", "☕ Morning walk and coffee", "A short morning walk followed by coffee would be a lovely start to the day.", "Tomorrow • 07:00", ["☕ Coffee", "🌅 Early start", "🙂 Relax"]]
        ]
    },
    "coffee-books": {
        title: "Coffee & Books",
        description: "Meet fellow book lovers for coffee, reading and conversation.",
        people: [
            ["Maya, 27", "📚 Reading at a café", "Looking for someone to read alongside me and chat about books over coffee.", "Today • 15:00", ["📚 Books", "☕ Coffee", "💬 Chat"]],
            ["Alex, 30", "📖 Bookshop and coffee", "Let's browse a bookshop and find a cosy place to sit afterwards.", "Saturday • 13:00", ["📖 Bookshop", "☕ Café", "🗓 Weekend"]],
            ["Nina, 33", "📕 Share your favourite book", "I'd love to meet another reader and exchange book recommendations.", "Sunday • 11:00", ["📕 Reading", "💡 Ideas", "🙂 Relax"]]
        ]
    }
};

const pageKey = location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

const category = categories[pageKey];

if (category) {
    document.title = `${category.title} | FrenDen`;

    const main = document.querySelector("main");

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

${category.people.map((person, index) => `
<a href="${["maya", "alex", "nina"][index]}-profile.html" class="user-card">
<div class="user-top">
<div class="avatar"></div>
<div class="user-info">
<h2>${person[0]}</h2>
<p>📍 Oslo • ${["1.0", "2.3", "1.6"][index]} km away</p>
</div>
<div class="status">${index === 2 ? "⚪ Away" : "🟢 Online"}</div>
</div>

<div class="user-title">${person[1]}</div>
<div class="user-text">${person[2]}</div>
<div class="user-time">🕒 ${person[3]}</div>

<div class="tags">
${person[4].map(tag => `<span>${tag}</span>`).join("")}
</div>
</a>
`).join("")}
`;
}

