import { useMutation } from "@apollo/client";
import { CreateThreadDocument } from "../graphql/gql.documents";
import { ThreadFragment } from "../graphql/fragments";
import { GetThreadsDocument } from "../../gql/graphql";

const useCreateThread = (chatId: string) => {
  return useMutation(CreateThreadDocument, {
    update(cache, { data }) {
      const threadsQueryOptions = {
        query: GetThreadsDocument,
        variables: { chatId },
      };

      // fetch exact thread data with the selected chatId
      const threads = cache.readQuery({ ...threadsQueryOptions });

      if (!threads || !data?.createThread) return;

      cache.writeQuery({
        ...threadsQueryOptions,
        data: {
          threads: threads.threads.concat(data?.createThread),
        },
      });
    },
  });
};

export default useCreateThread;
