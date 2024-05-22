import { useMutation } from "@apollo/client";
import { CreateThreadDocument } from "../graphql/gql.documents";
import updateThreadQuery from "../cache/updateThreadQuery";

const useCreateThread = (chatId: string) => {
  return useMutation(CreateThreadDocument, {
    update(cache, { data }) {
      if (data?.createThread) {
        updateThreadQuery(cache, data.createThread);
      }
    },
  });
};

export default useCreateThread;
