import { Button, Box, Stack } from "@mui/material"

export default function Winner({ handleCheck, handleChoice }) {
  return (
    <>
      <Stack direction={"row"} spacing={2}>
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

        <Button onClick={handleCheck}>
          You lose
        </Button>

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
      </Stack>
    </>
  )
}

