import { useMutation } from "@apollo/client";
import { CreateUserDocument } from "../gql.documents";

const useCreateUser = () => {
  return useMutation(CreateUserDocument);
};

export default useCreateUser;
