import { useQuery } from "@apollo/client";
import { GetChatsDocument } from "../../gql/graphql";

const useGetChats = () => {
  return useQuery(GetChatsDocument);
};

export default useGetChats;
