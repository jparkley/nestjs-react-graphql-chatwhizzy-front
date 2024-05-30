import { useMutation } from "@apollo/client";
import { CreateThreadDocument } from "../graphql/gql.documents";
import updateThreadQuery from "../cache/updateThreadQuery";
import updateChatQuery from "../cache/updateChatQuery";

const useCreateThread = (chatId: string) => {
  return useMutation(CreateThreadDocument, {
    update(cache, { data }) {
      if (data?.createThread) {
        updateThreadQuery(cache, data.createThread);
        updateChatQuery(cache, data.createThread);
      }
    },
  });
};

export default useCreateThread;
