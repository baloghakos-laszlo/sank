document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("playButton");
    const howItWorksButton = document.getElementById("howItWorksButton");
    const playerForm = document.getElementById("playerForm");
    const revealButton = document.getElementById("revealButton");
    const messageDisplay = document.getElementById("messageDisplay");
    const gameCanvas =document.getElementById("gameCanvas");
    const hideButton = document.getElementById("hideButton");

    hideButton.style.display="none";
    gameCanvas.style.display = "none";


    //starts the game and 
    playerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
      
        // Get the number of players from the input
        const numberOfPlayers = document.getElementById("numberOfPlayers").value;
      
        // Validate the input (check if the value is between 2 and 12)
        if (numberOfPlayers >= 2 && numberOfPlayers <= 12) {
          // Show the hidden elements
          playButton.style.display = "none";
          howItWorksButton.style.display = "none";
          playerForm.style.display = "none";
          game(numberOfPlayers);
        } else {
          messageDisplay.textContent = "Please enter a valid number of players (2 to 12).";
        }
      });

      function game(numPlayers) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        let revealCount = 0;
        const spyNumber = Math.floor(Math.random() * numPlayers);
      
        console.log(spyNumber, randomNumber, revealCount)

        const messageDisplay = document.getElementById("messageDisplay");
        const revealButton = document.getElementById("revealButton");
        const hideButton = document.getElementById("hideButton");
        
        gameCanvas.style.display = "block";
      
        revealButton.addEventListener("click", function () {
          if (revealCount < numPlayers) {
            if (spyNumber == revealCount) {
              messageDisplay.innerText = `You are the spy. Try to blend in!`;
            }
            else {
              messageDisplay.innerText = `The number is ${randomNumber}`
            }
            messageDisplay.style.display = "block"
;
            revealCount++;
            hideButton.style.display = "block";
            revealButton.style.display = "none";
            
          }

        });
      
        hideButton.addEventListener("click", function () {
          messageDisplay.style.display = "none";
          hideButton.style.display = "none";
          revealButton.style.display = "block";

          if (revealCount == numPlayers ) {
            revealButton.style.display = "none"
            messageDisplay.style.display = "block"
            messageDisplay.innerText = "Go ahead, find out the spy is! /n Start new game"
  

          }

        });
      }

    })