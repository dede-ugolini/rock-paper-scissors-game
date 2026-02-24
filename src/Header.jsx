import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

export default function Header({ playerScore, computerScore }) {

  return (
    <>
      <Stack width={{ xs: "90%", md: "60%" }} height={{ xs: "12vh", md: "20vh" }} direction={"row"} px={{ xs: 1, lg: 5 }} py={2}
        sx={{ justifyContent: "space-between", border: "3px solid hsl(246, 11%, 37%)", borderRadius: "12px" }}>
        <Stack py={2} width={{ xs: "20%", md: "15%" }}>
          <Box component={"img"} src="/logo.svg" height={{ xs: "10vh", md: "12vh" }}></Box>
        </Stack>

        <Stack direction={"row-reverse"} spacing={{ xs: 1, lg: 2 }} width={"70%"} >
          {/* Computer Score */}
          <Card sx={{ width: "30%", textAlign: "center" }}>
            <CardMedia sx={{ paddingLeft: 1, paddingRight: 1, paddingTop: 1 }}>
              <Typography variant="h5" fontWeight={"bold"} sx={{ color: "hsl(229, 64%, 46%)", letterSpacing: 1 }}  >
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
            <CardMedia sx={{ paddingLeft: 1, paddingRight: 1, paddingTop: 1 }}>
              <Typography variant={"h5"} fontWeight={"bold"} sx={{ color: "hsl(229, 64%, 46%)", letterSpacing: 1 }}  >
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


