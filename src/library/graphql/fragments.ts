import { graphql } from "../../gql";

export const ChatFragment = graphql(`
  fragment ChatFragment on Chat {
    _id
    chatName
    latestThread {
      ...ThreadFragment
    }
  }
`);

export const ThreadFragment = graphql(`
  fragment ThreadFragment on Thread {
    _id
    content
    createdAt
    chatId
    user {
      _id
      email
      username
    }
  }
`);
