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

      {/* Container principal que engolba tudo*/}
      <Stack py={5} gap={10} height={"100vh"} width={"100%"} alignItems={"center"} sx={{
        background: "radial-gradient(at top, hsl(214, 47%, 23%), hsl(237, 48%, 15%))"
      }}>

        <Header />

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

                <Button variant="contained" sx={{ height: "130px", width: "130px", boxShadow: "none", background: "white", borderRadius: "50%", borderTop: "10px solid grey", ":hover": { boxShadow: "none" } }}>
                  <img src="/icon-paper.svg" style={{ height: "60%", width: "60%" }} />
                </Button>
              </Box>

              {/* Box que armazena botão de tesoura*/}
              <Box borderRadius={"50%"} height={"170px"} width={"170px"} sx={{
                display: "flex",
                justifyContent: "center", alignItems: "center", background: "hsl(39, 89%, 49%)",
                borderBottom: "10px solid hsl(28, 76%, 44%)"
              }}>
                <Button variant="contained" sx={{ height: "130px", width: "130px", boxShadow: "none", background: "white", borderRadius: "50%", borderTop: "10px solid grey", ":hover": { boxShadow: "none" } }}>
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
                <Button variant="contained" sx={{ height: "130px", width: "130px", boxShadow: "none", background: "white", borderRadius: "50%", borderTop: "10px solid grey", ":hover": { boxShadow: "none" } }}>
                  <img src="/icon-rock.svg" style={{ height: "60%", width: "60%" }} />
                </Button>
              </Box>
            </Box>
          </Box>

        </Stack>
      </Stack>

    </>
  )
}

export default App
