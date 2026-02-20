import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

export default function Header({ playerScore, computerScore }) {

  return (
    <>
      <Stack width={"60%"} direction={"row"} px={5} py={2} sx={{ justifyContent: "space-between", border: "3px solid hsl(246, 11%, 37%)", borderRadius: "12px" }}>
        <Stack width={"30%"}>
          <img src="/logo.svg" alt="" />
        </Stack>

        <Stack direction={"row-reverse"} spacing={2} width={"70%"}>
          {/* Computer Score */}
          <Card sx={{ width: "30%", textAlign: "center" }}>
            <CardMedia sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 2 }}>
              <Typography variant="h5" fontWeight={"bold"} sx={{ color: "hsl(229, 64%, 46%)", letterSpacing: 2 }}  >
                COMPUTER
              </Typography>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" fontWeight={"bold"} sx={{ color: "hsl(229, 25%, 31%)" }}>
                {parseInt(computerScore)}
              </Typography>
            </CardContent>
          </Card>

          {/* Player Score*/}
          <Card sx={{ width: "30%", textAlign: "center" }}>
            <CardMedia sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 2 }}>
              <Typography variant="h5" fontWeight={"bold"} sx={{ color: "hsl(229, 64%, 46%)", letterSpacing: 2 }}  >
                PLAYER
              </Typography>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" fontWeight={"bold"} sx={{ color: "hsl(229, 25%, 31%)" }}>
                {parseInt(playerScore)}
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </>

  )
}


