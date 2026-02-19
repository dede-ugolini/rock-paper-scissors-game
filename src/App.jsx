import { Stack, IconButton, Box, CssBaseline, Button } from "@mui/material";

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

      <Stack py={5} gap={10} height={"100vh"} width={"100%"} alignItems={"center"} sx={{
        background: "radial-gradient(at top, hsl(214, 47%, 23%), hsl(237, 48%, 15%))"
      }}>

        <Header />

        <Stack justifyContent={"center"} alignItems={"center"} width={"80%"} >

          <Box gap={20} width={"75%"} height="300px" sx={{
            background: "red", background: "url(/bg-triangle.svg) no-repeat center", display: "flex",
            flexDirection: "column",
            alignItems: "center"

          }}>
            <Box width={"100%"} sx={{ display: "flex", alignItems: 'center', justifyContent: "center" }} gap={20}>
              <Box>
                <Button>
                  <img src="/icon-paper.svg" alt="" />
                </Button>
              </Box>

              <Box>
                <Button>
                  <img src="/icon-scissors.svg" alt="" />
                </Button>
              </Box>

            </Box>
            {/* Box principal que armazena o triangulo e os icones */}
            <Button>
              <img src="/icon-rock.svg" alt="" />
            </Button>

            <Box>
            </Box>
          </Box>

        </Stack>

        <Rules />
        <ResetScore />
      </Stack>

    </>
  )
}

export default App
