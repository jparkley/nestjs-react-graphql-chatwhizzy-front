import { useMutation } from "@apollo/client";
import { CreateChatDocument } from "../graphql/gql.documents";

const useCreateChat = () => {
  return useMutation(CreateChatDocument);
};

export default useCreateChat;
