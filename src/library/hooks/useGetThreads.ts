import { useQuery } from "@apollo/client";
import {
  GetThreadsDocument,
  GetThreadsQueryVariables,
} from "../../gql/graphql";

const useGetThreads = (variables: GetThreadsQueryVariables) => {
  return useQuery(GetThreadsDocument, { variables });
};

export default useGetThreads;
