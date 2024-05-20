import { useSubscription } from "@apollo/client";
import {
  OnThreadCreatedDocument,
  OnThreadCreatedSubscriptionVariables,
} from "../../gql/graphql";

const useOnThreadCreated = (
  variables: OnThreadCreatedSubscriptionVariables
) => {
  return useSubscription(OnThreadCreatedDocument, { variables });
};
