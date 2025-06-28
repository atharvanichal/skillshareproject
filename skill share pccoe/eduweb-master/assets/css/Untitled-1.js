// Sample user database
const users = [
    { id: 1, name: "Alice", offers: ["Python", "JavaScript"], wants: ["Marketing", "Design"] },
    { id: 2, name: "Bob", offers: ["Design", "Marketing"], wants: ["Python"] },
    { id: 3, name: "Charlie", offers: ["JavaScript", "React"], wants: ["Marketing", "Python"] },
    { id: 4, name: "David", offers: ["SEO", "Marketing"], wants: ["JavaScript"] }
];

// Function to find best matches
function findMatches(userId) {
    const currentUser = users.find(user => user.id === userId);
    if (!currentUser) return "User not found";

    // Matching users based on skills they offer and want
    const matches = users
        .filter(user => user.id !== userId) // Exclude self
        .map(user => {
            const offeredToUser = user.offers.filter(skill => currentUser.wants.includes(skill));
            const wantedByUser = user.wants.filter(skill => currentUser.offers.includes(skill));

            return {
                user: user.name,
                offersToYou: offeredToUser,
                wantsFromYou: wantedByUser,
                matchScore: offeredToUser.length + wantedByUser.length // Score-based sorting
            };
        })
        .filter(match => match.matchScore > 0) // Remove zero matches
        .sort((a, b) => b.matchScore - a.matchScore); // Sort by best match

    return matches.length > 0 ? matches : "No suitable matches found";
}

// Test the function
console.log(findMatches(1)); // Find matches for Alice
