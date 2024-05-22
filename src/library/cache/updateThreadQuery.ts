import { ApolloCache } from "@apollo/client";
import { GetThreadsDocument, Thread } from "../../gql/graphql";

const updateThreadQuery = (cache: ApolloCache<any>, newThread: Thread) => {
  const threadsQueryOptions = {
    query: GetThreadsDocument,
    variables: { chatId: newThread.chatId },
  };

  // fetch exact thread data with the selected chatId
  const threads = cache.readQuery({ ...threadsQueryOptions });

  cache.writeQuery({
    ...threadsQueryOptions,
    data: {
      threads: (threads?.threads || []).concat(newThread),
    },
  });
};

export default updateThreadQuery;
