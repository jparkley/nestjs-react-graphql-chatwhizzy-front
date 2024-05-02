import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../gql";
import { User } from "../models/User";

const useGetCurrentUser = () => {
  return useQuery<{ currentUser: User }>(GET_CURRENT_USER);
};
export default useGetCurrentUser;
