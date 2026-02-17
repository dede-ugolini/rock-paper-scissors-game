import { Stack, IconButton } from "@mui/material";

import { useState } from "react";
import ResetScore from "./ResetScore";
import Rules from "./Rules";

let playerScore = localStorage.getItem("playerScore");
let computerScore = localStorage.getItem("computerScore")

// Caso seja a primeira vez utilizando
if (playerScore === null) { localStorage.setItem("playerScore", 0) }
if (computerScore === null) { localStorage.setItem("computerScore", 0) }

function App() {

  const [playerChoice, setPlayerChoice] = useState("");

  const choices = ["rock", "paper", "scissors"];

  const handleChoice = (choice) => {
    setPlayerChoice(choice);
    console.log(choice);
    verify();
  }

  const playerWins = () => {
    let currentScore = (parseInt(localStorage.getItem("playerScore"))) + 1;
    localStorage.setItem("playerScore", currentScore);
  }

  const computerWins = () => {
    let currentScore = (parseInt(localStorage.getItem("computerScore")) + 1);
    localStorage.setItem("computerScore", currentScore);
  }

  const verify = () => {

    const randomChoice = () => Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomChoice()];
    console.log("Computer choice: " + computerChoice);

    if (playerChoice === "scissors" && computerChoice === "rock") {
      computerWins();
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
      playerWins();
    }
    else if (playerChoice === "scissors" && computerChoice === "scissors") {
      //TODO
    }


  }

  return (
    <>
      <Stack width={"100%"} alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
        <Stack justifyContent={"center"} alignItems={"center"} width={"80%"}>
          <h1>Player Score: {playerScore}</h1>
          <h1>Computer Score: {computerScore}</h1>
          <Stack width="80%" justifyContent={"center"} alignItems={"center"}>
            <img src="/bg-triangle.svg" alt="" />
          </Stack>


          <Stack direction={"row"}>
            <IconButton onClick={() => handleChoice("rock")}
              sx={{
                borderRadius: "50%",
                border: "5px solid green"
              }}
            >
              <img src="icon-rock.svg" alt="" />
            </IconButton>

            <IconButton onClick={() => handleChoice("paper")}
              sx={{
                borderRadius: "50%",
                border: "5px solid red"
              }}
            >
              <img src="icon-paper.svg" />
            </IconButton>

            <IconButton onClick={() => handleChoice("scissors")}
              sx={{
                borderRadius: "50%",
                border: "5px solid yellow"
              }}
            >
              <img src="icon-scissors.svg" />
            </IconButton>
          </Stack>

          <Rules />
          <ResetScore />
        </Stack>
      </Stack>
    </>
  )
}

export default App
