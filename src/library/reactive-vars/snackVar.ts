import { makeVar } from "@apollo/client";
import { AlertColor } from "@mui/material";

export interface SnackVarMessage {
  message: string;
  type: AlertColor;
}

export const snackVar = makeVar<SnackVarMessage | undefined>(undefined);
