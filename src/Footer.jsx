import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Typography variant="body1" fontWeight={"bold"} sx={{ color: "#FFF" }}>
        Challenge by
        {<a href="https://www.frontendmentor.io/?ref=challenge" style={{ color: "white" }}> Frontend Mentor</a>}
        . Coded by
        {<a href="https://github.com/dede-ugolini" style={{ color: "white" }}> André Ugolini.</a>}
      </Typography>
    </>
  )
}
