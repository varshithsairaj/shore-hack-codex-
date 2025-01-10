document.getElementById("start-btn").addEventListener("click", startGame);

let ecoCompanion;
let gameStarted = false;

function startGame() {
    ecoCompanion = new EcoCompanion();
    document.getElementById("game-content").innerHTML = `
        <p>Welcome to 'Eco Quest'! Your companion is ${ecoCompanion.name}.</p>
        <p>The Earth is in trouble, but you have the power to help! Let's start our journey.</p>
        <button onclick="firstDecision()">Start Adventure</button>
    `;
    gameStarted = true;
}

function firstDecision() {
    document.getElementById("game-content").innerHTML = `
        <p>It's a sunny day, and you are in a beautiful park. You see a lot of litter on the ground.</p>
        <p>What do you do?</p>
        <div class="game-section">
            <button onclick="pickUpLitter()">Pick up litter</button>
            <button onclick="ignoreLitter()">Ignore</button>
        </div>
    `;
}

function pickUpLitter() {
    document.getElementById("game-content").innerHTML = `
        <p>You start picking up the litter, and soon the park looks much cleaner!</p>
        <p>Congratulations! You've unlocked the first milestone: Clean Parks!</p>
        <button onclick="recyclingChallenge()">Next Challenge</button>
    `;
}

function ignoreLitter() {
    document.getElementById("game-content").innerHTML = `
        <p>You walk away and the litter stays. But you could have made a difference!</p>
        <p>GAME OVER</p>
        <button onclick="resetGame()">Try Again</button>
    `;
}

function recyclingChallenge() {
    document.getElementById("game-content").innerHTML = `
        <p>The park is clean, but you realize there’s still so much trash we throw away every day.</p>
        <p>You need to help your friends understand recycling! Challenge: What should you tell them to recycle?</p>
        <div class="game-section">
            <button onclick="checkAnswer('paper')">Paper</button>
            <button onclick="checkAnswer('toys')">Toys</button>
            <button onclick="checkAnswer('food')">Food wrappers</button>
        </div>
    `;
}

function checkAnswer(answer) {
    if (answer === 'paper') {
        document.getElementById("game-content").innerHTML = `
            <p>Great job! Paper can be recycled and turned into new things like books and boxes!</p>
            <p>Congratulations! You've unlocked the second milestone: Recycling!</p>
            <button onclick="waterConservationChallenge()">Next Challenge</button>
        `;
    } else {
        document.getElementById("game-content").innerHTML = `
            <p>Oops! That’s not recyclable. Try again!</p>
            <button onclick="recyclingChallenge()">Try Again</button>
        `;
    }
}

function waterConservationChallenge() {
    document.getElementById("game-content").innerHTML = `
        <p>After recycling, you notice a water fountain in the park. But water is precious!</p>
        <p>Challenge: How can you help save water?</p>
        <div class="game-section">
            <button onclick="incorrectAnswer()">Leave the fountain running</button>
            <button onclick="correctAnswer()">Turn off the tap after use</button>
            <button onclick="incorrectAnswer()">Water plants more often</button>
        </div>
    `;
}

function incorrectAnswer() {
    document.getElementById("game-content").innerHTML = `
        <p>Oops! That’s not the best choice. Let’s try again!</p>
        <button onclick="waterConservationChallenge()">Try Again</button>
    `;
}

function correctAnswer() {
    document.getElementById("game-content").innerHTML = `
        <p>Great! Turning off taps after use helps save a lot of water!</p>
        <p>Congratulations! You've unlocked the third milestone: Water Conservation!</p>
        <button onclick="renewableEnergyChallenge()">Next Challenge</button>
    `;
}

function renewableEnergyChallenge() {
    document.getElementById("game-content").innerHTML = `
        <p>You and your friends are now talking about how to power the world without harming the planet.</p>
        <p>Challenge: Which source of energy is clean and doesn’t pollute the air?</p>
        <div class="game-section">
            <button onclick="checkEnergyAnswer('solar')">Solar</button>
            <button onclick="checkEnergyAnswer('coal')">Coal</button>
            <button onclick="checkEnergyAnswer('wind')">Wind</button>
        </div>
    `;
}

function checkEnergyAnswer(answer) {
    if (answer === 'solar' || answer === 'wind') {
        document.getElementById("game-content").innerHTML = `
            <p>Great choice! Solar and wind power are clean and don't pollute!</p>
            <p>Congratulations! You've unlocked the fourth milestone: Clean Energy!</p>
            <button onclick="educationChallenge()">Next Challenge</button>
        `;
    } else {
        document.getElementById("game-content").innerHTML = `
            <p>Oops! Coal pollutes the air. Try again!</p>
            <button onclick="renewableEnergyChallenge()">Try Again</button>
        `;
    }
}

function educationChallenge() {
    document.getElementById("game-content").innerHTML = `
        <p>You think it’s important to teach everyone about taking care of the planet.</p>
        <p>Challenge: How will you spread awareness?</p>
        <div class="game-section">
            <button onclick="teachFriends()">Tell your friends at school</button>
            <button onclick="writeLetter()">Write a letter to the mayor</button>
            <button onclick="shareOnline()">Share on social media</button>
        </div>
    `;
}

function teachFriends() {
    document.getElementById("game-content").innerHTML = `
        <p>Teaching your friends is a great way to spread the message!</p>
        <p>Congratulations! You've unlocked the fifth milestone: Environmental Education!</p>
        <button onclick="transportationChallenge()">Next Challenge</button>
    `;
}

function writeLetter() {
    document.getElementById("game-content").innerHTML = `
        <p>Writing to the mayor is important too, but teaching your friends can be a great first step!</p>
        <button onclick="educationChallenge()">Try Again</button>
    `;
}

function shareOnline() {
    document.getElementById("game-content").innerHTML = `
        <p>Sharing online is a good idea, but telling people in person can have a bigger impact!</p>
        <button onclick="educationChallenge()">Try Again</button>
    `;
}

function transportationChallenge() {
    document.getElementById("game-content").innerHTML = `
        <p>You’re thinking about how to travel in a way that doesn’t harm the planet.</p>
        <p>Challenge: What is the best way to travel without polluting the air?</p>
        <div class="game-section">
            <button onclick="chooseTransportation('bike')">Bike</button>
            <button onclick="chooseTransportation('car')">Car</button>
            <button onclick="chooseTransportation('bus')">Bus</button>
        </div>
    `;
}

function chooseTransportation(choice) {
    if (choice === 'bus') {
        document.getElementById("game-content").innerHTML = `
            <p>Bus is great! It doesn’t pollute!</p>
            <p>Congratulations! You've unlocked the sixth milestone: Sustainable Transportation!</p>
            <button onclick="farmingChallenge()">Next Challenge</button>
        `;
    } else {
        document.getElementById("game-content").innerHTML = `
            <p>Oops! Cars pollute the air. Try a more eco-friendly option!</p>
            <button onclick="transportationChallenge()">Try Again</button>
        `;
    }
}

function farmingChallenge() {
    document.getElementById("game-content").innerHTML = `
        <p>You decide to help the planet by supporting sustainable farming practices.</p>
        <p>Challenge: What kind of farming should you support?</p>
        <div class="game-section">
            <button onclick="supportFarming('organic')">Organic farming</button>
            <button onclick="supportFarming('factory')">Factory farming</button>
            <button onclick="supportFarming('urban')">Urban gardening</button>
        </div>
    `;
}

function supportFarming(type) {
    if (type === 'organic') {
        document.getElementById("game-content").innerHTML = `
            <p>Organic farming is great! It helps protect nature and gives us healthy food.</p>
            <p>Congratulations! You've unlocked the final milestone: Sustainable Farming!</p>
            <button onclick="endGame()">End Game</button>
        `;
    } else {
        document.getElementById("game-content").innerHTML = `
            <p>Oops! Factory farming harms the environment. Try supporting organic farming!</p>
            <button onclick="farmingChallenge()">Try Again</button>
        `;
    }
}

function endGame() {
    document.getElementById("game-content").innerHTML = `
        <div id="game-summary">
            <h2>Congratulations! You've completed the 'Eco Quest'!</h2>
            <p>You made a huge impact on the environment with the help of your EcoCompanion, ${ecoCompanion.name}!</p>
            <p>Here’s what you’ve accomplished:</p>
            <ul>
                <li><strong>Cleaned the Park:</strong> You picked up litter and made the park beautiful!</li>
                <li><strong>Recycling Knowledge:</strong> You taught others about recycling!</li>
                <li><strong>Saved Water:</strong> You learned how to conserve water.</li>
                <li><strong>Clean Energy:</strong> You supported solar and wind power.</li>
                <li><strong>Environmental Education:</strong> You shared knowledge with your friends.</li>
                <li><strong>Sustainable Transportation:</strong> You chose bikes over cars!</li>
                <li><strong>Sustainable Farming:</strong> You supported organic farming practices!</li>
            </ul>
            <p>You've earned a badge for being an Eco Hero!</p>
            <button onclick="resetGame()">Play Again</button>
        </div>
    `;
}


function resetGame() {
    document.getElementById("game-content").innerHTML = '';
    startGame();
}

class EcoCompanion {
    constructor(name = "EcoBot") {
        this.name = name;
    }

    giveHint(level) {
        const hints = {
            1: "Plants are important! They help clean the air and give us oxygen. Try planting some trees!",
            2: "Recycling is like magic! It turns old things into new things. What can we recycle?",
            3: "Water is precious! Saving water helps all living things. Can you think of ways to save it?",
            4: "Clean energy comes from nature! Solar and wind power help reduce pollution. Can you promote these?",
            5: "Teaching your friends is fun! The more people who know how to care for the planet, the better!",
            6: "Bikes and walking are great! They don’t pollute the air like cars. Which one can you use?",
            7: "Plants and animals are all part of nature. Growing food the right way helps protect our planet!"
        };
        return hints[level] || "I have no hints for this level.";
    }
}
