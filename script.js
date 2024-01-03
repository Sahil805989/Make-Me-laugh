let collection = [
    " What did the horse say after it tripped?\nHelp! I’ve fallen and I can’t giddyup!",
    " Why can’t you hear a pterodactyl going to the bathroom?\nBecause the “P” is silent.",
    " What do you call a well-balanced horse?\nStable.",
    " Why don't scientists trust atoms?\nBecause they make up everything!",
    " Parallel lines have so much in common.\nIt’s a shame they’ll never meet.",
    " Did you hear about the mathematician who's afraid of negative numbers?\nHe will stop at nothing to avoid them.",
    " I only know 25 letters of the alphabet.\nI don't know y.",
    " Why did the scarecrow win an award?\nBecause he was outstanding in his field!",
    " I told my wife she was drawing her eyebrows too high.\nShe looked surprised.",
    " What did one ocean say to the other ocean?\nNothing, they just waved.",
    " How do you organize a space party?\nYou planet!",
    " Why did the tomato turn red?\nBecause it saw the salad dressing!",
    " Why did the bicycle fall over?\nBecause it was two-tired!",
    " Why did the golfer bring two pairs of pants?\nIn case he got a hole in one.",
    " Why did the scarecrow become a successful politician?\nBecause he was outstanding in his field!",
    " What's orange and sounds like a parrot?\nA carrot!",
    " Why don't skeletons fight each other?\nThey don't have the guts.",
    " Why don't scientists trust atoms?\nBecause they make up everything!",
    " What do you call fake spaghetti?\nAn impasta!",
    " Why did the math book look sad?\nBecause it had too many problems.",
    " What did one hat say to the other?\nStay here, I'm going on ahead.",
    " Why don't scientists trust atoms?\nBecause they make up everything!",
    " Why did the coffee file a police report?\nIt got mugged.",
    " How do you catch a squirrel?\nClimb a tree and act like a nut!",
    " Why was the belt arrested?\nBecause it was holding up a pair of pants!",
    " Did you hear about the cheese factory that exploded?\nThere was nothing left but de-brie.",
    " What did one plate say to another?\nTonight, dinner's on me!",
    " Why couldn't the bicycle stand up by itself?\nIt was two-tired.",
    " Why did the scarecrow win an award?\nBecause he was outstanding in his field!",
    " Why don't seagulls fly over the bay?\nBecause then they'd be bagels!",
    " Why did the scarecrow become a successful politician?\nBecause he was outstanding in his field!"
];

let display = document.querySelector("#display");
let refresh = document.getElementById("next");

let shownJokes = [];

function getRandomJoke() {
    // Check if all jokes have been shown, reset if necessary
    if (shownJokes.length === collection.length) {
        shownJokes = [];
    }

    // Generate a random index until an unused one is found
    let jokeToShow;
    do {
        jokeToShow = Math.floor(Math.random() * collection.length);
    } while (shownJokes.includes(jokeToShow));

    // Store the index to avoid repetition
    shownJokes.push(jokeToShow);

    // Display the joke
    const joke = collection[jokeToShow];
    display.innerHTML = joke;
}

// Initial display
getRandomJoke();

// Function to get the next joke on button click
function getNextJoke() {
    getRandomJoke();
}

// Assign the function to the onclick event of the button
refresh.onclick = getNextJoke;
