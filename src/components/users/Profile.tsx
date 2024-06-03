import { Avatar, Button, Stack, Typography } from "@mui/material";
import useGetCurrentUser from "../../library/hooks/useGetCurrentUser";
import { UploadFile } from "@mui/icons-material";
import { snackVar } from "../../library/reactive-vars/snackVar";

const Profile = () => {
  const user = useGetCurrentUser();

  const uploadFile = async (e: any) => {
    try {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/image`, {
        method: "POST",
        body: formData,
      });
      console.log("====:", res);
      if (!res.ok) {
        throw new Error("Upload failed");
      }
      snackVar({ message: "Profile image uploaded", type: "success" });
    } catch (error) {
      snackVar({ message: "Upload error", type: "error" });
    }
  };
  return (
    <Stack
      spacing={6}
      sx={{ marginTop: "3rem", alignItems: "ceNter", justifyContent: "center" }}
    >
      <Typography variant="h3">{user?.data?.currentUser.username}</Typography>
      <Avatar
        sx={{ width: 200, height: 200 }}
        src={user?.data?.currentUser.imageUrl}
      />
      <Button
        component="label"
        size="medium"
        variant="contained"
        startIcon={<UploadFile />}
      >
        Upload Profile Image
        <input type="file" hidden onChange={uploadFile} />
      </Button>
    </Stack>
  );
};

export default Profile;
