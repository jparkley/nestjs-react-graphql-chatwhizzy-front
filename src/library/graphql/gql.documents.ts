import { graphql } from "../../gql/gql";

const CreateUserDocument = graphql(`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`);

const GetCurrentUserDocument = graphql(`
  query GetCurrentUser {
    currentUser {
      _id
      email
    }
  }
`);

const CreateChatDocument = graphql(`
  mutation CreateChat($createChatInput: CreateChatInput!) {
    createChat(createChatInput: $createChatInput) {
      ...ChatFragment
    }
  }
`);

const GetChatsDocument = graphql(`
  query GetChats {
    chats {
      ...ChatFragment
    }
  }
`);

const GetChatDocument = graphql(`
  query GetChat($_id: String!) {
    chat(_id: $_id) {
      ...ChatFragment
    }
  }
`);

const CreateThreadDocument = graphql(`
  mutation CreateThread($createThreadInput: CreateThreadInput!) {
    createThread(createThreadInput: $createThreadInput) {
      _id
      content
      createdAt
    }
  }
`);

export {
  CreateUserDocument,
  GetCurrentUserDocument,
  CreateChatDocument,
  GetChatsDocument,
  GetChatDocument,
  CreateThreadDocument,
};
