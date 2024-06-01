import { Stack, Typography } from "@mui/material";
import useGetCurrentUser from "../../library/hooks/useGetCurrentUser";

const Profile = () => {
  const user = useGetCurrentUser();

  return (
    <Stack
      spacing={6}
      sx={{ marginTop: "2rem", alignItems: "cneter", justifyContent: "center" }}
    >
      <Typography variant="h3">{user?.data?.currentUser.username}</Typography>
    </Stack>
  );
};

export default Profile;
