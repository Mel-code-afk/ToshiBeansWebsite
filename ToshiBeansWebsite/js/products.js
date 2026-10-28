const products = [

    // =========================
    // HOT DRINKS
    // =========================

    {
        id: "hot-americano",
        name: "Hot Americano",
        category: "Hot Drinks",
        description: "Classic hot americano.",
        sizes: [
            { size: "Hot", price: 75 }
        ],
        icon: "☕"
    },

    {
        id: "hot-spanish-latte",
        name: "Hot Spanish Latte",
        category: "Hot Drinks",
        description: "Hot espresso with sweet and creamy milk.",
        sizes: [
            { size: "Hot", price: 90 }
        ],
        icon: "☕"
    },

    {
        id: "hot-salted-caramel-macchiato",
        name: "Hot Salted Caramel Macchiato",
        category: "Hot Drinks",
        description: "Hot coffee with salted caramel flavor.",
        sizes: [
            { size: "Hot", price: 105 }
        ],
        icon: "☕"
    },

    {
        id: "hot-mocha-latte",
        name: "Hot Mocha Latte",
        category: "Hot Drinks",
        description: "Hot espresso with chocolate and creamy milk.",
        sizes: [
            { size: "Hot", price: 105 }
        ],
        icon: "☕"
    },

    {
        id: "hot-matcha-latte",
        name: "Hot Matcha Latte",
        category: "Hot Drinks",
        description: "Warm and creamy matcha latte.",
        sizes: [
            { size: "Hot", price: 95 }
        ],
        icon: "🍵"
    },

    {
        id: "hot-salted-caramel-matcha",
        name: "Hot Salted Caramel Matcha",
        category: "Hot Drinks",
        description: "Warm matcha with salted caramel flavor.",
        sizes: [
            { size: "Hot", price: 115 }
        ],
        icon: "🍵"
    },

    {
        id: "hot-earl-grey-choco",
        name: "Hot Earl Grey Choco",
        category: "Hot Drinks",
        description: "Warm Earl Grey and chocolate drink.",
        sizes: [
            { size: "Hot", price: 95 }
        ],
        icon: "☕"
    },


    // =========================
    // ICED COFFEE BASED
    // =========================

    {
        id: "americano",
        name: "Americano",
        category: "Iced Coffee Based",
        description: "Bold espresso served over ice.",
        sizes: [
            { size: "12 oz", price: 60 },
            { size: "16 oz", price: 75 },
            { size: "22 oz", price: 95 }
        ],
        icon: "🧊"
    },

    {
        id: "spanish-latte",
        name: "Spanish Latte",
        category: "Iced Coffee Based",
        description: "Smooth espresso with sweet creamy milk.",
        sizes: [
            { size: "12 oz", price: 75 },
            { size: "16 oz", price: 90 },
            { size: "22 oz", price: 110 }
        ],
        icon: "☕"
    },

    {
        id: "sea-salt-latte",
        name: "Sea Salt Latte",
        category: "Iced Coffee Based",
        description: "Creamy iced latte with sea salt flavor.",
        sizes: [
            { size: "12 oz", price: 80 },
            { size: "16 oz", price: 95 },
            { size: "22 oz", price: 115 }
        ],
        icon: "☕"
    },

    {
        id: "vanilla-latte",
        name: "Vanilla Latte",
        category: "Iced Coffee Based",
        description: "Smooth espresso with vanilla and milk.",
        sizes: [
            { size: "12 oz", price: 80 },
            { size: "16 oz", price: 95 },
            { size: "22 oz", price: 115 }
        ],
        icon: "☕"
    },

    {
        id: "salted-caramel-macchiato",
        name: "Salted Caramel Macchiato",
        category: "Iced Coffee Based",
        description: "Espresso with milk and salted caramel.",
        sizes: [
            { size: "12 oz", price: 90 },
            { size: "16 oz", price: 105 },
            { size: "22 oz", price: 125 }
        ],
        icon: "☕"
    },

    {
        id: "mocha-latte",
        name: "Mocha Latte",
        category: "Iced Coffee Based",
        description: "Espresso with rich chocolate and milk.",
        sizes: [
            { size: "12 oz", price: 90 },
            { size: "16 oz", price: 105 },
            { size: "22 oz", price: 125 }
        ],
        icon: "☕"
    },

    {
        id: "white-mocha-latte",
        name: "White Mocha Latte",
        category: "Iced Coffee Based",
        description: "Espresso with creamy white chocolate.",
        sizes: [
            { size: "12 oz", price: 90 },
            { size: "16 oz", price: 105 },
            { size: "22 oz", price: 125 }
        ],
        icon: "☕"
    },

    {
        id: "nutella-latte",
        name: "Nutella Latte",
        category: "Iced Coffee Based",
        description: "Creamy coffee with rich Nutella flavor.",
        sizes: [
            { size: "12 oz", price: 100 },
            { size: "16 oz", price: 115 },
            { size: "22 oz", price: 135 }
        ],
        icon: "☕"
    },

    {
        id: "biscoff-latte",
        name: "Biscoff Latte",
        category: "Iced Coffee Based",
        description: "Creamy coffee with Biscoff flavor.",
        sizes: [
            { size: "12 oz", price: 100 },
            { size: "16 oz", price: 115 },
            { size: "22 oz", price: 135 }
        ],
        icon: "☕"
    },


    // =========================
    // MATCHA
    // =========================

    {
        id: "matcha-latte",
        name: "Matcha Latte",
        category: "Matcha",
        description: "Creamy and smooth matcha with milk.",
        sizes: [
            { size: "12 oz", price: 80 },
            { size: "16 oz", price: 95 },
            { size: "22 oz", price: 115 }
        ],
        icon: "🍵"
    },

    {
        id: "sea-salt-matcha",
        name: "Sea Salt Matcha",
        category: "Matcha",
        description: "Creamy matcha with sea salt flavor.",
        sizes: [
            { size: "12 oz", price: 85 },
            { size: "16 oz", price: 100 },
            { size: "22 oz", price: 120 }
        ],
        icon: "🍵"
    },

    {
        id: "dirty-matcha",
        name: "Dirty Matcha",
        category: "Matcha",
        description: "Matcha combined with a bold coffee flavor.",
        sizes: [
            { size: "12 oz", price: 90 },
            { size: "16 oz", price: 110 },
            { size: "22 oz", price: 130 }
        ],
        icon: "🍵"
    },

    {
        id: "salted-caramel-matcha",
        name: "Salted Caramel Matcha",
        category: "Matcha",
        description: "Smooth matcha with salted caramel.",
        sizes: [
            { size: "12 oz", price: 100 },
            { size: "16 oz", price: 115 },
            { size: "22 oz", price: 135 }
        ],
        icon: "🍵"
    },

    {
        id: "choco-matcha",
        name: "Choco Matcha",
        category: "Matcha",
        description: "Creamy matcha mixed with chocolate.",
        sizes: [
            { size: "12 oz", price: 100 },
            { size: "16 oz", price: 115 },
            { size: "22 oz", price: 135 }
        ],
        icon: "🍵"
    },

    {
        id: "white-choco-matcha",
        name: "White Choco Matcha",
        category: "Matcha",
        description: "Matcha with creamy white chocolate.",
        sizes: [
            { size: "12 oz", price: 100 },
            { size: "16 oz", price: 115 },
            { size: "22 oz", price: 135 }
        ],
        icon: "🍵"
    },

    {
        id: "strawberry-matcha",
        name: "Strawberry Matcha",
        category: "Matcha",
        description: "Matcha with sweet strawberry flavor.",
        sizes: [
            { size: "12 oz", price: 100 },
            { size: "16 oz", price: 115 },
            { size: "22 oz", price: 135 }
        ],
        icon: "🍵"
    },

    {
        id: "mango-matcha",
        name: "Mango Matcha",
        category: "Matcha",
        description: "Creamy matcha with mango flavor.",
        sizes: [
            { size: "12 oz", price: 100 },
            { size: "16 oz", price: 115 },
            { size: "22 oz", price: 135 }
        ],
        icon: "🍵"
    },

    {
        id: "cloud-matcha",
        name: "Cloud Matcha",
        category: "Matcha",
        description: "Smooth matcha with a creamy cloud topping.",
        sizes: [
            { size: "12 oz", price: 105 },
            { size: "16 oz", price: 120 },
            { size: "22 oz", price: 140 }
        ],
        icon: "🍵"
    },

    {
        id: "earth-matcha",
        name: "Earth Matcha",
        category: "Matcha",
        description: "Rich and earthy premium matcha drink.",
        sizes: [
            { size: "12 oz", price: 105 },
            { size: "16 oz", price: 125 },
            { size: "22 oz", price: 145 }
        ],
        icon: "🍵"
    },


    // =========================
    // NON COFFEE BASED
    // =========================

    {
        id: "earl-grey-choco",
        name: "Earl Grey Choco",
        category: "Non Coffee Based",
        description: "Earl Grey tea blended with chocolate.",
        sizes: [
            { size: "12 oz", price: 85 },
            { size: "16 oz", price: 105 },
            { size: "22 oz", price: 125 }
        ],
        icon: "🥤"
    },

    {
        id: "berry-milk",
        name: "Berry Milk",
        category: "Non Coffee Based",
        description: "Creamy milk with sweet berry flavor.",
        sizes: [
            { size: "12 oz", price: 85 },
            { size: "16 oz", price: 105 },
            { size: "22 oz", price: 125 }
        ],
        icon: "🥤"
    },

    {
        id: "mango-milk",
        name: "Mango Milk",
        category: "Non Coffee Based",
        description: "Creamy milk with tropical mango flavor.",
        sizes: [
            { size: "12 oz", price: 85 },
            { size: "16 oz", price: 105 },
            { size: "22 oz", price: 125 }
        ],
        icon: "🥤"
    },

    {
        id: "taro-cloud",
        name: "Taro Cloud",
        category: "Non Coffee Based",
        description: "Smooth taro drink with creamy topping.",
        sizes: [
            { size: "12 oz", price: 90 },
            { size: "16 oz", price: 110 },
            { size: "22 oz", price: 130 }
        ],
        icon: "🥤"
    },

    {
        id: "thai-milk-tea",
        name: "Thai Milk Tea",
        category: "Non Coffee Based",
        description: "Sweet and creamy Thai-style milk tea.",
        sizes: [
            { size: "12 oz", price: 90 },
            { size: "16 oz", price: 110 },
            { size: "22 oz", price: 130 }
        ],
        icon: "🥤"
    },


    // =========================
    // FRUIT SODA
    // =========================

    {
        id: "green-apple-soda",
        name: "Green Apple Soda",
        category: "Fruit Soda",
        description: "Refreshing green apple flavored soda.",
        sizes: [
            { size: "16 oz", price: 45 },
            { size: "22 oz", price: 65 }
        ],
        icon: "🥤"
    },

    {
        id: "strawberry-soda",
        name: "Strawberry Soda",
        category: "Fruit Soda",
        description: "Refreshing strawberry flavored soda.",
        sizes: [
            { size: "16 oz", price: 45 },
            { size: "22 oz", price: 65 }
        ],
        icon: "🥤"
    },

    {
        id: "blueberry-soda",
        name: "Blueberry Soda",
        category: "Fruit Soda",
        description: "Refreshing blueberry flavored soda.",
        sizes: [
            { size: "16 oz", price: 45 },
            { size: "22 oz", price: 65 }
        ],
        icon: "🥤"
    },

    {
        id: "green-apple-soda-cream",
        name: "Green Apple Soda w/ Cream",
        category: "Fruit Soda",
        description: "Green apple soda topped with cream.",
        sizes: [
            { size: "16 oz", price: 55 },
            { size: "22 oz", price: 75 }
        ],
        icon: "🥤"
    },

    {
        id: "strawberry-soda-cream",
        name: "Strawberry Soda w/ Cream",
        category: "Fruit Soda",
        description: "Strawberry soda topped with cream.",
        sizes: [
            { size: "16 oz", price: 55 },
            { size: "22 oz", price: 75 }
        ],
        icon: "🥤"
    },

    {
        id: "blueberry-soda-cream",
        name: "Blueberry Soda w/ Cream",
        category: "Fruit Soda",
        description: "Blueberry soda topped with cream.",
        sizes: [
            { size: "16 oz", price: 55 },
            { size: "22 oz", price: 75 }
        ],
        icon: "🥤"
    },

    {
        id: "green-apple-soda-yakult",
        name: "Green Apple Soda w/ Yakult",
        category: "Fruit Soda",
        description: "Green apple soda mixed with Yakult.",
        sizes: [
            { size: "16 oz", price: 65 },
            { size: "22 oz", price: 85 }
        ],
        icon: "🥤"
    },

    {
        id: "strawberry-soda-yakult",
        name: "Strawberry Soda w/ Yakult",
        category: "Fruit Soda",
        description: "Strawberry soda mixed with Yakult.",
        sizes: [
            { size: "16 oz", price: 65 },
            { size: "22 oz", price: 85 }
        ],
        icon: "🥤"
    },

    {
        id: "blueberry-soda-yakult",
        name: "Blueberry Soda w/ Yakult",
        category: "Fruit Soda",
        description: "Blueberry soda mixed with Yakult.",
        sizes: [
            { size: "16 oz", price: 65 },
            { size: "22 oz", price: 85 }
        ],
        icon: "🥤"
    },


    // =========================
    // SNACKS
    // =========================

    {
        id: "lobster-balls",
        name: "Lobster Balls",
        category: "Snacks",
        description: "Savory lobster-flavored snack.",
        sizes: [
            { size: "1 serving", price: null }
        ],
        icon: "🍢"
    },

    {
        id: "fish-tofu",
        name: "Fish Tofu",
        category: "Snacks",
        description: "Savory fish tofu snack.",
        sizes: [
            { size: "3 pcs", price: 55 }
        ],
        icon: "🍢"
    },

    {
        id: "hotdog",
        name: "Hotdog",
        category: "Snacks",
        description: "Classic hotdog snack.",
        sizes: [
            { size: "1 pc", price: 25 }
        ],
        icon: "🌭"
    },

    {
        id: "chocolate-xiao-long-bao",
        name: "Chocolate Xiao Long Bao",
        category: "Snacks",
        description: "Chocolate-filled Xiao Long Bao.",
        sizes: [
            { size: "5 pcs", price: 150 }
        ],
        icon: "🥟"
    },

    {
        id: "japanese-siomai",
        name: "Japanese Siomai",
        category: "Snacks",
        description: "Japanese-style siomai.",
        sizes: [
            { size: "3 pcs", price: 20 }
        ],
        icon: "🥟"
    },

    {
        id: "big-siomai",
        name: "Big Siomai",
        category: "Snacks",
        description: "Large savory siomai.",
        sizes: [
            { size: "3 pcs", price: 35 }
        ],
        icon: "🥟"
    },

    {
        id: "fries",
        name: "Fries",
        category: "Snacks",
        description: "Crispy golden french fries.",
        sizes: [
            { size: "1 serving", price: 120 }
        ],
        icon: "🍟"
    },

    {
        id: "nachos",
        name: "Nachos",
        category: "Snacks",
        description: "Crunchy nachos perfect for sharing.",
        sizes: [
            { size: "1 serving", price: 160 }
        ],
        icon: "🧀"
    },

    {
        id: "pancit-canton",
        name: "Pancit Canton",
        category: "Snacks",
        description: "Choose from Calamansi, Chilimansi or Sweet & Spicy.",
        sizes: [
            { size: "1 serving", price: 50 }
        ],
        icon: "🍜"
    },

    {
        id: "pancit-canton-egg",
        name: "Pancit Canton w/ Egg",
        category: "Snacks",
        description: "Pancit Canton served with egg.",
        sizes: [
            { size: "1 serving", price: 65 }
        ],
        icon: "🍜"
    },

    {
        id: "buldak-carbonara",
        name: "Buldak Carbonara",
        category: "Snacks",
        description: "Creamy and spicy Buldak Carbonara noodles.",
        sizes: [
            { size: "1 serving", price: 130 }
        ],
        icon: "🍜"
    },

    {
        id: "buldak-carbonara-egg",
        name: "Buldak Carbonara w/ Egg",
        category: "Snacks",
        description: "Buldak Carbonara noodles served with egg.",
        sizes: [
            { size: "1 serving", price: 145 }
        ],
        icon: "🍜"
    }
];


// =========================
// ADD ONS
// =========================

const addOns = [
    {
        id: "syrup-sauce",
        name: "Syrup / Sauce",
        price: 25
    },

    {
        id: "oatside-milk",
        name: "Oatside Milk",
        price: 20
    },

    {
        id: "extra-espresso-shot",
        name: "Extra Espresso Shot",
        price: 15
    },

    {
        id: "sinkers",
        name: "Sinkers",
        price: 15
    },

    {
        id: "cheesecake",
        name: "Cheesecake",
        price: 15
    }
];


// Find a product using its ID
function getProductById(id) {
    return products.find(product => product.id === id);
}


// Get all products from a category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}