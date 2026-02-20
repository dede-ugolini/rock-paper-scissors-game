import { Stack, IconButton, Box, CssBaseline, Button, ThemeProvider, Paper, Collapse, Fade } from "@mui/material";

import { useState } from "react";

import ResetScore from "./ResetScore";
import Rules from "./Rules";
import Header from "./Header"
import { lightTheme } from "./theme/theme";
import Footer from "./Footer";
import Winner from "./Winner";
import Buttons from "./Buttons";

let scorePlayer = localStorage.getItem("playerScore");
let scoreComputer = localStorage.getItem("computerScore")

// Caso seja a primeira vez utilizando
if (scorePlayer === null) { localStorage.setItem("playerScore", 0) }
if (scoreComputer === null) { localStorage.setItem("computerScore", 0) }

function App() {

  const [playerChoice, setPlayerChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(parseInt(scorePlayer));
  const [computerScore, setComputerScore] = useState(parseInt(scoreComputer));

  const choices = ["rock", "paper", "scissors"];

  const handleChoice = (choice) => {
    setPlayerChoice(choice);
    console.log("Player choice: " + choice);
    verify();
  }

  const playerWins = () => {
    console.log("Player wins");
    setPlayerScore(playerScore + 1);
    localStorage.setItem("playerScore", playerScore);
    displayResults();
  }

  const computerWins = () => {
    console.log("Computer wins");
    setComputerScore(computerScore + 1);
    localStorage.setItem("computerScore", playerScore + 1);
  }

  const draw = () => {
    console.log("TODO draw");
    alert("Empate");
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
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />

        {/* Container principal que engolba tudo*/}
        <Stack height={"100vh"} sx={{
          background: "radial-gradient(at top, hsl(214, 47%, 23%), hsl(237, 48%, 15%))"
        }}>

          <Stack py={5} gap={10} width={"100%"} alignItems={"center"} >

            <Header playerScore={playerScore} computerScore={computerScore} />

            <Stack justifyContent={"center"} alignItems={"center"} width={"80%"} >

              <Fade in={!checked}>
                <Box>
                  <Buttons handleChoice={handleChoice} />
                </Box>
              </Fade>

            </Stack>

            <Fade in={checked}>
              <Box>
                <Winner handleCheck={handleCheck} handleChoice={handleChoice} />
              </Box>
            </Fade>

          </Stack>

          {/* Botões de regras e resetar placar */}
          <Stack direction={"row-reverse"} spacing={3} px={5} alignItems={"end"}>
            <ResetScore />
            <Rules />
          </Stack>

          {/* Footer */}
          <Stack py={5} alignItems={"center"}>
            <Footer />
          </Stack>
        </Stack>
      </ThemeProvider>

    </>
  )
}

export default App
