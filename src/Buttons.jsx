import { Box, Button } from "@mui/material"

export default function Buttons({ handleChoice }) {

  return (
    <>
      {/* Box que armazena icones de pedra papel e tesoura e o triangulo*/}
      <Box gap={15} width={"100%"} height="300px" sx={{
        background: "url(/bg-triangle.svg) no-repeat center", display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>

        <Box width={"100%"} sx={{
          display: "flex", alignItems: 'center', justifyContent: "center",
          position: "relative", top: "-5vh"
        }} gap={15}>

          {/* Box que armeza o botão de papel*/}
          <Box borderRadius={"50%"} height={"170px"} width={"170px"} sx={{
            display: "flex",
            justifyContent: "center", alignItems: "center", background: "hsl(230, 89%, 62%)",
            borderBottom: "10px solid hsl(229, 64%, 46%)"
          }}>

            <Button variant="contaide" sx={{
              height: "130px", width: "130px", boxShadow: "none",
              background: "hsl(205 12% 88%)", borderRadius: "50%", borderTop: "10px solid grey",
              ":hover": { boxShadow: "none", background: "white" }
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
              background: "hsl(205 12% 88%)", borderRadius: "50%", borderTop: "10px solid grey",
              ":hover": { boxShadow: "none", background: "white" }
            }}
              onClick={() => handleChoice("scissors")}
            >
              <img src="/icon-scissors.svg" style={{ height: "70%", width: "70%" }} />
            </Button>
          </Box>

        </Box  >

        {/* Box que armazena botão de pedra */}
        <Box sx={{ position: "relative", top: "-110px" }}>
          <Box borderRadius={"50%"} height={"170px"} width={"170px"} sx={{
            display: "flex",
            justifyContent: "center", alignItems: "center", background: "hsl(349, 71%, 52%)",
            borderBottom: "10px solid hsl(347, 75%, 35%)",
          }}>
            <Button
              sx={{
                height: "130px", width: "130px", boxShadow: "none",
                background: "hsl(205 12% 88%)", borderRadius: "50%", borderTop: "10px solid grey",
                ":hover": { boxShadow: "none", background: "white" }
              }}
              onClick={() => handleChoice("rock")}
            >
              <img src="/icon-rock.svg" style={{ height: "60%", width: "60%" }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )

}
