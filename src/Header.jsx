import { Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";

export default function Header() {

  return (
    <>
      <Stack width={"60%"} direction={"row"} px={5} py={2} sx={{ justifyContent: "space-between", alignItems: "center", border: "3px solid hsl(246, 11%, 37%)", borderRadius: "12px" }}>
        <img src="/logo.svg" alt="" />
        <Card sx={{ minWidth: "200px", textAlign: "center" }}>
          <CardHeader title="Score">
          </CardHeader>
          <CardContent>
            <Typography variant="h2" fontWeight={"bold"}>
              12
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </>

  )
}


