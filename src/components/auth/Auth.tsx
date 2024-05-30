import { Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetCurrentUser from "../../library/hooks/useGetCurrentUser";

interface AuthProps {
  submitLabel: string;
  onSubmit: (credentials: { email: string; password: string }) => Promise<void>;
  children: React.ReactNode;
  extraFields?: React.ReactNode[];
  error?: string;
  loading?: boolean;
}

const Auth = ({
  submitLabel,
  onSubmit,
  children,
  error,
  loading,
  extraFields,
}: AuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data } = useGetCurrentUser();
  const navigate = useNavigate();

  // Redirect users when they're logged in
  useEffect(() => {
    if (data) {
      navigate("/chat");
    }
  }, [data, navigate]);

  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "70%",
          md: "40%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      {extraFields}
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        name="email"
        value={email}
        error={!!error}
        helperText={error}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        error={!!error}
        helperText={error}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        disabled={loading}
        onClick={() => onSubmit({ email, password })}
      >
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;
