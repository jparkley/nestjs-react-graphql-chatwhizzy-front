import { useMutation } from "@apollo/client";
import { CreateThreadDocument } from "../graphql/gql.documents";
import { ThreadFragment } from "../graphql/fragments";

const useCreateThread = () => {
  return useMutation(CreateThreadDocument, {
    update(cache, { data }) {
      // data: response data from createThread
      cache.modify({
        fields: {
          threads(existingThreadsRef = []) {
            const newThreadRef = cache.writeFragment({
              data: data?.createThread,
              fragment: ThreadFragment,
            });
            return [...existingThreadsRef, newThreadRef];
          },
        },
      });
    },
  });
};

export default useCreateThread;
