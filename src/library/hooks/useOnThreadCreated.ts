import { useSubscription } from "@apollo/client";
import {
  OnThreadCreatedDocument,
  OnThreadCreatedSubscriptionVariables,
} from "../../gql/graphql";
import updateThreadQuery from "../cache/updateThreadQuery";

const useOnThreadCreated = (
  variables: OnThreadCreatedSubscriptionVariables
) => {
  return useSubscription(OnThreadCreatedDocument, {
    variables,
    onData: ({ client, data }) => {
      // update 'threads'(getThreads) query data
      // if there's a new thread from subscription
      if (data.data) updateThreadQuery(client.cache, data.data.onThreadCreated);
    },
  });
};

export default useOnThreadCreated;
