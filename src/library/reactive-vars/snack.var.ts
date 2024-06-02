import { makeVar } from "@apollo/client";
import { AlertColor } from "@mui/material";

export const snackVar = makeVar<
  { message: string; type: AlertColor } | undefined
>(undefined);
