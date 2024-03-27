// Original data
const vendorsAndCategories = [
    { category: "Electronics", vendors: ["Amazon", "Best Buy", "Samsung", "Apple"] },
    { category: "Clothing", vendors: ["Macy's", "Nike", "Adidas", "Zara"] },
    { category: "Furniture", vendors: ["IKEA", "Ashley Furniture", "West Elm", "Pottery Barn"] },
    { category: "Home Improvement", vendors: ["Home Depot", "Lowe's", "Menards", "Ace Hardware"] },
    { category: "Beauty", vendors: ["Sephora", "Ulta Beauty", "L'Oreal", "Maybelline"] },
    { category: "Health", vendors: ["CVS", "Walgreens", "GNC", "Centrum"] },
    { category: "Grocery", vendors: ["Kroger", "Safeway", "Walmart", "Whole Foods Market"] },
    { category: "Pet Supplies", vendors: ["Petco", "Petsmart", "Purina", "Royal Canin"] },
    { category: "Toys", vendors: ["Hasbro", "Mattel", "Lego", "Fisher-Price"] },
    { category: "Sports & Outdoors", vendors: ["Nike", "Adidas", "The North Face", "Columbia"] },
    { category: "Books", vendors: ["Barnes & Noble", "Amazon Books", "Penguin Random House", "Simon & Schuster"] },
    { category: "Movies & Music", vendors: ["Netflix", "Hulu", "Spotify", "Apple Music"] },
    { category: "Office Supplies", vendors: ["Staples", "Office Depot", "Avery", "Paper Mate"] },
    { category: "Jewelry & Watches", vendors: ["Zales", "Tiffany & Co.", "Rolex", "Citizen"] },
    { category: "Tools & Hardware", vendors: ["Home Depot", "Lowe's", "Craftsman", "Kobalt"] },
    { category: "Auto Parts", vendors: ["AutoZone", "NAPA Auto Parts", "O'Reilly Auto Parts", "Advance Auto Parts"] },
    { category: "Baby Products", vendors: ["Walmart Baby", "Target Baby", "Pampers", "Huggies"] },
    { category: "Luggage & Travel", vendors: ["Samsonite", "Tumi", "Briggs & Riley", "Eagle Creek"] },
    { category: "Arts & Crafts", vendors: ["Michaels", "Hobby Lobby", "Crayola", "Elmer's"] },
    { category: "Industrial Supplies", vendors: ["Grainger", "Fastenal", "MSC Industrial Supply", "Ferguson"] }
];

// Array for vendors with duplicated items removed
export const vendors = [...new Set(vendorsAndCategories.flatMap(item => item.vendors))];

// Array for categories
export const categories = vendorsAndCategories.map(item => item.category);
