import { forwardRef, useState } from "react";
import { Stack } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useReactiveVar } from "@apollo/client";
import { snackVar } from "../../library/reactive-vars/snack.var";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert ref={ref} elevation={6} variant="filled" {...props} />;
});

const CustomSnackBar = () => {
  const snack = useReactiveVar(snackVar);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    snackVar(undefined);
  };

  return (
    <>
      {snack && (
        <Stack>
          <Snackbar
            open={!!snack}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity={snack?.type}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {snack.message}
            </Alert>
          </Snackbar>
        </Stack>
      )}
    </>
  );
};
export default CustomSnackBar;
