import { graphql } from "../../gql";

export const ChatFragment = graphql(`
  fragment ChatFragment on Chat {
    _id
    creatorId
    isPrivate
    memberIds
    chatName
  }
`);

export const ThreadFragment = graphql(`
  fragment ThreadFragment on Thread {
    _id
    content
    createdAt
  }
`);
