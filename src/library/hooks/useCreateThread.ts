import { useMutation } from "@apollo/client";
import { CreateThreadDocument } from "../graphql/gql.documents";

const useCreateThread = () => {
  return useMutation(CreateThreadDocument);
};

export default useCreateThread;
