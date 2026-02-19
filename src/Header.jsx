import { Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";

export default function Header() {

  let playerScore = localStorage.getItem("playerScore");
  let computerScore = localStorage.getItem("computerScore");

  return (
    <>
      <Stack width={"60%"} direction={"row"} px={5} py={2} sx={{ justifyContent: "space-between", border: "3px solid hsl(246, 11%, 37%)", borderRadius: "12px" }}>
        <Stack width={"30%"}>
          <img src="/logo.svg" alt="" />
        </Stack>

        <Stack direction={"row-reverse"} spacing={2} width={"70%"}>
          <Card sx={{ Width: "30%", textAlign: "center" }}>
            <CardHeader title="Computer Score">
            </CardHeader>
            <CardContent>
              <Typography variant="h2" fontWeight={"bold"}>
                {computerScore}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: "30%", textAlign: "center" }}>
            <CardHeader title="Player Score">
            </CardHeader>
            <CardContent>
              <Typography variant="h2" fontWeight={"bold"}>
                {playerScore}
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </>

  )
}


