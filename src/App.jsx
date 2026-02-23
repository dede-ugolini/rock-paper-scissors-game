import { Box, Collapse, CssBaseline, Stack, ThemeProvider } from "@mui/material";

import { useState } from "react";

import Buttons from "./Buttons";
import Footer from "./Footer";
import Header from "./Header";
import ResetScore from "./ResetScore";
import Rules from "./Rules";
import { lightTheme } from "./theme/theme";
import Winner from "./Winner";

let scorePlayer = localStorage.getItem("playerScore");
let scoreComputer = localStorage.getItem("computerScore")

// Caso seja a primeira vez utilizando
if (scorePlayer === null) { localStorage.setItem("playerScore", 0) }
if (scoreComputer === null) { localStorage.setItem("computerScore", 0) }

function App() {

  const [statecomputerChoice, setComputerChoice] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");

  const [playerScore, setPlayerScore] = useState(parseInt(scorePlayer));
  const [computerScore, setComputerScore] = useState(parseInt(scoreComputer));

  const [checked, setChecked] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  const [winner, setWinner] = useState({ player: false, computer: false, draw: false });
  const handleCheck = () => {
    setTimeout(() => {
      setChecked(!checked);
    }, 500);
  }

  const playerWins = () => {
    setWinner({
      player: true,
      computer: false,
      draw: false,
    });
    setPlayerScore(playerScore + 1);
    localStorage.setItem("playerScore", playerScore);
    handleCheck();
  }

  const computerWins = () => {
    setWinner({
      player: false,
      computer: true,
      draw: false,
    });
    setComputerScore(computerScore + 1);
    localStorage.setItem("computerScore", playerScore + 1);
    handleCheck();
  }

  const draw = () => {
    setWinner({
      player: false,
      computer: false,
      draw: true,
    });
    handleCheck();
  }

  const verify = (choice) => {

    const randomChoice = () => Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomChoice()];
    setComputerChoice(computerChoice)

    setPlayerChoice(choice);

    if (choice === computerChoice) {
      draw();
    }
    else if (choice == "scissors" && computerChoice === "paper") {
      playerWins();
    }
    else if (choice === "rock" && computerChoice === "scissors") {
      playerWins();
    }
    else if (choice === "paper" && computerChoice === "rock") {
      playerWins();
    }
    else {
      computerWins();
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

              <Collapse in={!checked}>
                <Box>
                  <Buttons handleChoice={verify} />
                </Box>
              </Collapse>

            </Stack>

            <Collapse in={checked}>
              <Box>
                <Winner handleCheck={handleCheck} playerChoice={playerChoice} computerChoice={statecomputerChoice} winner={winner} />
              </Box>
            </Collapse>

          </Stack>

          {/* Botões de regras e resetar placar */}
          <Stack direction={{ xs: "column-reverse", md: "row-reverse" }} spacing={3} px={5} alignItems={{ xs: "center", md: "end" }}>
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
