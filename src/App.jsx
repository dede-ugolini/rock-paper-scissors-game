import { Stack, IconButton, Box, CssBaseline, Button, ThemeProvider } from "@mui/material";

import { useState } from "react";

import ResetScore from "./ResetScore";
import Rules from "./Rules";
import Header from "./Header"
import { lightTheme } from "./theme/theme";
import Footer from "./Footer";
import Winner from "./Winner";

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

              {/* Box que armazena icones de pedra papel e tesoura e o triangulo*/}
              <Box gap={20} width={"75%"} height="300px" sx={{
                background: "url(/bg-triangle.svg) no-repeat center", display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>

                <Box width={"100%"} sx={{
                  display: "flex", alignItems: 'center', justifyContent: "center",
                  position: "relative", top: "-40px"
                }} gap={20}>

                  {/* Box que armeza o botão de papel*/}
                  <Box borderRadius={"50%"} height={"170px"} width={"170px"} sx={{
                    display: "flex",
                    justifyContent: "center", alignItems: "center", background: "hsl(230, 89%, 62%)",
                    borderBottom: "10px solid hsl(229, 64%, 46%)"
                  }}>

                    <Button variant="contained" sx={{
                      height: "130px", width: "130px", boxShadow: "none",
                      background: "white", borderRadius: "50%", borderTop: "10px solid grey",
                      ":hover": { boxShadow: "none" }
                    }}
                      onClick={() => handleChoice("paper")}
                    >
                      <img src="/icon-paper.svg" style={{ height: "60%", width: "60%" }} />
                    </Button>
                  </Box>

                  {/* Box que armazena botão de tesoura*/}
                  <Box borderRadius={"50%"} height={"170px"} width={"170px"} sx={{
                    display: "flex",
                    justifyContent: "center", alignItems: "center", background: "hsl(39, 89%, 49%)",
                    borderBottom: "10px solid hsl(28, 76%, 44%)"
                  }}>
                    <Button variant="contained" sx={{
                      height: "130px", width: "130px", boxShadow: "none",
                      background: "white", borderRadius: "50%", borderTop: "10px solid grey",
                      ":hover": { boxShadow: "none" }
                    }}
                      onClick={() => handleChoice("scissors")}
                    >
                      <img src="/icon-scissors.svg" style={{ height: "70%", width: "70%" }} />
                    </Button>
                  </Box>

                </Box  >

                <Box sx={{ position: "relative", top: "-110px" }}>
                  <Box borderRadius={"50%"} height={"170px"} width={"190px"} sx={{
                    display: "flex",
                    justifyContent: "center", alignItems: "center", background: "hsl(349, 71%, 52%)",
                    borderBottom: "10px solid hsl(347, 75%, 35%)",
                  }}>
                    <Button variant="contained" sx={{
                      height: "130px", width: "130px", boxShadow: "none",
                      background: "white", borderRadius: "50%", borderTop: "10px solid grey",
                      ":hover": { boxShadow: "none" }
                    }}
                      onClick={() => handleChoice("rock")}
                    >
                      <img src="/icon-rock.svg" style={{ height: "60%", width: "60%" }} />
                    </Button>
                  </Box>
                </Box>
              </Box>

            </Stack>
          </Stack>

          <Stack direction={"row-reverse"} spacing={3} px={5} alignItems={"end"}>
            <ResetScore />
            <Rules />
          </Stack>

          <Stack py={5} alignItems={"center"}>
            <Footer />
          </Stack>
        </Stack>
      </ThemeProvider>

    </>
  )
}

export default App
