let winnerButton;

function generateButtons() {
    let buttonCount = parseInt(document.getElementById("button-count").value);
    let buttonsContainer = document.getElementById("buttons-container");
    buttonsContainer.innerHTML = "";
    document.getElementById("message").textContent = "";
    if (isNaN(buttonCount) || buttonCount <= 0) {
        alert("Please enter a valid number of buttons.");
        return;
    }
    for (let i = 1; i <= buttonCount; ++i) {
        let button = document.createElement("button");
        button.className = "btn btn-primary m-1";
        button.textContent = "Button " + i;
        button.onclick = function() {
            checkWinner(this, i);
        };
        buttonsContainer.appendChild(button);
    }
    winnerButton = Math.floor(Math.random() * buttonCount) + 1;
}

function checkWinner(button, buttonNumber) {
    let messageElement = document.getElementById("message");
    if (buttonNumber === winnerButton) {
        messageElement.textContent = "Congratulations! You found the winning button!";
        button.classList.remove('btn-primary', 'btn-danger');
        button.classList.add('btn-success');
    } else {
        messageElement.textContent = "Sorry, this button is not a winner. Please try again.";
        button.classList.remove('btn-primary');
        button.classList.add('btn-danger');
    }
}