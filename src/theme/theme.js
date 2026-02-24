import { createTheme } from "@mui/material";

const theme = createTheme();

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "hsl(349, 71%, 52%)"
    }
  },
  typography: {
    h2: {
      [theme.breakpoints.up('xs')]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.up('md')]: {
        fontSize: "3.0rem",
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: "3.5rem",
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "5rem",
      },
    },
    h3: {
      [theme.breakpoints.up('xs')]: {
        fontSize: "0.6rem",
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: "2.5rem",
      },
    },
    h5: {
      [theme.breakpoints.up('xs')]: {
        fontSize: "0.6rem",
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: "1.5rem",
      },
    },
  }
})
