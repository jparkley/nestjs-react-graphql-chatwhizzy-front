import { useQuery } from "@apollo/client";
import { GetCurrentUserDocument } from "../graphql/gql.documents";

const useGetCurrentUser = () => {
  return useQuery(GetCurrentUserDocument);
};
export default useGetCurrentUser;
