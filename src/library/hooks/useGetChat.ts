import { useQuery } from "@apollo/client";
import { GetChatQueryVariables } from "../../gql/graphql";
import { GetChatDocument } from "../graphql/gql.documents";

const useGetChat = (variables: GetChatQueryVariables) => {
  return useQuery(GetChatDocument, { variables });
};

export default useGetChat;
