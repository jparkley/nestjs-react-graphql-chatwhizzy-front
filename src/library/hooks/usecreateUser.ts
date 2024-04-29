import { useMutation } from "@apollo/client";
import { CREATE_USER, CreateUserInput } from "../gql";
import { User } from "../models/User";

const useCreateUser = () => {
  return useMutation<User, CreateUserInput>(CREATE_USER);
};

export default useCreateUser;
