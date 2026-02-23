import { Button, Dialog, DialogContentText, DialogTitle, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Rules(props) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant={"contained"} onClick={() => setOpen(true)}
        sx={{ cursor: "help" }}
      >
        Regras
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h5">
              Rules
            </Typography>
            <Button size={"small"} variant="contained" sx={{ position: "relative" }}>
              x
            </Button>
          </Stack>

        </DialogTitle>
        <DialogContentText>
          <img src="/image-rules.svg" />
        </DialogContentText>
      </Dialog>
    </>
  )
}
