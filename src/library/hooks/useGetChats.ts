import { useQuery } from "@apollo/client";
import { GetChatsDocument } from "../graphql/gql.documents";

const useGetChats = () => {
  return useQuery(GetChatsDocument);
};

export default useGetChats;
