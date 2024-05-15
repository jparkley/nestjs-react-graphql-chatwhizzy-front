import { useMutation } from "@apollo/client";
import { CreateChatDocument } from "../graphql/gql.documents";
import { ChatFragment } from "../graphql/fragments";

const useCreateChat = () => {
  return useMutation(CreateChatDocument, {
    update(cache, { data }) {
      // data: response data from createChat
      cache.modify({
        fields: {
          chats(existingChatsRef = []) {
            const newChatRef = cache.writeFragment({
              data: data?.createChat,
              fragment: ChatFragment,
            });
            return [...existingChatsRef, newChatRef];
          },
        },
      });
    },
  });
};

export default useCreateChat;
