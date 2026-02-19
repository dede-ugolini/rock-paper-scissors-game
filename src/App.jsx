import { Stack, IconButton, Box, CssBaseline } from "@mui/material";

import { useState } from "react";

import ResetScore from "./ResetScore";
import Rules from "./Rules";
import Header from "./Header"

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
    console.log("Player choice: " + choice);
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

  const draw = () => {
    console.log("TODO draw");
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
      draw();
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
      computerWins();
    }
    else if (playerChoice === "paper" && computerChoice === "paper") {
      draw();
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
      computerWins();
    }
    else if (playerChoice === "rock" && computerChoice === "rock") {
      draw();
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
      computerWins();
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
      playerWins();
    }
  }

  return (
    <>
      <CssBaseline />
      <Stack width={"100%"} alignContent={"center"} justifyContent={"center"} alignItems={"center"} sx={{
        background: "radial-gradient(at top, hsl(214, 47%, 23%), hsl(237, 48%, 15%))"
      }}>
        <Header />
        <Stack justifyContent={"center"} alignItems={"center"} width={"80%"} >
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
