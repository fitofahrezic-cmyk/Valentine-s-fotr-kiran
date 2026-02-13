let noMessages = [
    "Are you sure? 😢",
    "Really sure? 🥺",
    "Think again 💔",
    "I'll be sad 😭",
    "Last chance... 😔",
    "Please? 🥹"
];

let messageIndex = 0;
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

function handleNoClick() {
    if (messageIndex < noMessages.length) {
        noBtn.textContent = noMessages[messageIndex];
        messageIndex++;

        let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 5) + "px";
        yesBtn.style.padding = "20px 40px";
    } else {
        noBtn.disabled = true;
        noBtn.textContent = "Too late 😘";
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
