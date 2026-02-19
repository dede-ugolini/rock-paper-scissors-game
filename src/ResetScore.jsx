import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function ResetScore() {

  const [open, setOpen] = useState(false);

  const handleReset = () => {
    localStorage.setItem("playerScore", 0);
    localStorage.setItem("computerScore", 0);
    setOpen(false);
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Resetar placar
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>
          <Stack direction={"row"} justifyContent={"space-between"}>
            Reset Score
            <Button variant="contained" onClick={() => setOpen(false)}>
              x
            </Button>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Seu placar é salvo mesmo quando você fecha o site. Tem certeza que deseja resetar o placar? Essa ação não pode ser desfeita.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleReset}>
            Entendi
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
