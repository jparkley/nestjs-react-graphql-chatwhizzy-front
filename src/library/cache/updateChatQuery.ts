import { ApolloCache } from "@apollo/client";
import { GetChatsDocument, Thread } from "../../gql/graphql";

const updateChatQuery = (cache: ApolloCache<any>, newThread: Thread) => {
  const chatQueryOptions = {
    query: GetChatsDocument,
  };

  const data = cache.readQuery({ ...chatQueryOptions });
  const chats = [...(data?.chats || [])]; // need a new array (can't mutate apollo cache array)

  // find chat (index) which new thread belongs to
  const idx = chats.findIndex((chat) => chat._id === newThread.chatId);
  if (idx === -1) return;

  const newChat = { ...chats[idx], latestThread: newThread };
  chats[idx] = newChat;

  cache.writeQuery({
    ...chatQueryOptions,
    data: { chats },
  });
};

export default updateChatQuery;
