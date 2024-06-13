let winnerButton2

    function generateButtons() {
        let buttonCount = parseInt(document.getElementById("button-count").value);
        let buttonsContainer = document.getElementById("buttons-container");
        buttonsContainer.innerHTML = "";
        document.getElementById("message2").textContent = "";

        if (isNaN(buttonCount) || buttonCount <= 0) {
            alert("Please enter a valid number of buttons.");
            return;
        }

        for (let i = 1; i <= buttonCount; ++i) {
            let button = document.createElement("button");
            button.className = "btn btn-primary m-1";
            button.textContent = "Button " + i;
            button.onclick = function() {
                checkWinner(parseInt(this.textContent.split(" ")[1]));
            };
            buttonsContainer.appendChild(button);
        }
        winnerButton2 = Math.floor(Math.random() * buttonCount) + 1;
    }

    function checkWinner(buttonNumber2) {
        let messageElement = document.getElementById("message2");
        let buttons = document.querySelectorAll('#buttons-container button');

        if (buttonNumber2 === winnerButton2) {
            messageElement.textContent = 
            "Congratulations! You found the winning button!";
            buttons[buttonNumber2 - 1].classList.remove('btn-danger');
            buttons[buttonNumber2 - 1].classList.add('btn-success');
        } else {
            messageElement.textContent = 
            "Sorry, this button is not a winner. Please try again.";
            buttons[buttonNumber2 - 1].classList.remove('btn-primary');
            buttons[buttonNumber2 - 1].classList.add('btn-danger');
        }
    }