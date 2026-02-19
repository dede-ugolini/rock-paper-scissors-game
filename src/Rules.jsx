import { Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";

export default function Rules(props) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Regras
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{ padding: 5 }}
      >
        <Typography variant="h5">
          Rules
        </Typography>
        <img src="/image-rules.svg" />
      </Dialog>
    </>
  )
}
