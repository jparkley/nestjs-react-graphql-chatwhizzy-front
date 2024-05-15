import { graphql } from "../../gql";

graphql(`
  fragment ChatFragment on Chat {
    _id
    creatorId
    isPrivate
    memberIds
    chatName
  }
`);
