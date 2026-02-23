import { Button, Box, Stack, Typography } from "@mui/material"

const choices = [
  { name: "rock", icon: "/icon-rock.svg", background: "hsl(349, 71%, 52%)", borderColor: "hsl(347, 75%, 35%)" },
  { name: "paper", icon: "/icon-paper.svg", background: "hsl(230, 89%, 62%)", borderColor: "hsl(229, 64%, 46%)" },
  { name: "scissors", icon: "/icon-scissors.svg", background: "hsl(39, 89%, 49%)", borderColor: "hsl(28, 76%, 44%)" },
]

export default function Winner({ handleCheck, playerChoice, computerChoice, winner }) {

  const player = choices.find(item => item.name === playerChoice);
  const computer = choices.find(item => item.name === computerChoice);

  return (
    <>
      <Stack direction={"row"} spacing={5} width={"100%"} height={"100%"}>
        {/* Botão do player*/}
        <Box borderRadius={"50%"} height={{ lg: "30vh", md: "24vh", sm: "20vh", xs: "10vh" }} width={{ lg: "17vw", md: "16vw", sm: "14vw", xs: "10vw" }} sx={{
          display: "flex",
          justifyContent: "center", alignItems: "center",
          background: player?.background,
          borderBottom: "12px solid",
          borderColor: player?.borderColor,
        }}>

          <Button variant="contained" sx={{
            height: "75%", width: "75%", boxShadow: "none",
            background: "white", borderRadius: "50%", borderTop: "10px solid grey",
            ":hover": { boxShadow: "none" }
          }}
          >
            {player && (
              <img src={player.icon} style={{ height: "55%", width: "55%" }} />
            )}
          </Button>
        </Box>

        <Stack spacing={3} >
          <Typography variant="h3" fontWeight={"bold"} sx={{ color: "#FFF" }}>
            {(winner.draw ? "Draw" : winner.player ? "You win" : "You lose").toUpperCase()}
          </Typography>
          <Button variant={"contained"} onClick={handleCheck}>
            Play Again
          </Button>

        </Stack>

        {/* Botão do computador*/}
        <Box borderRadius={"50%"} height={{ lg: "30vh", md: "24vh", sm: "20vh", xs: "10vh" }} width={{ lg: "17vw", md: "16vw", sm: "14vw", xs: "10vw" }} sx={{
          display: "flex",
          justifyContent: "center", alignItems: "center",
          background: computer?.background,
          borderBottom: "12px solid",
          borderColor: computer?.borderColor,
        }}>

          <Button variant="contained" sx={{
            height: "75%", width: "75%", boxShadow: "none",
            background: "white", borderRadius: "50%", borderTop: "10px solid grey",
            ":hover": { boxShadow: "none" }
          }}
          >
            {computer && (
              <img src={computer.icon} style={{ height: "55%", width: "55%" }} />
            )}
          </Button>
        </Box>
      </Stack>
    </>
  )
}
