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
      username
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
      ...ThreadFragment
    }
  }
`);

const GetThreadsDocument = graphql(`
  query GetThreads($chatId: String!) {
    threads(chatId: $chatId) {
      ...ThreadFragment
    }
  }
`);

const OnThreadCreatedDocument = graphql(`
  subscription onThreadCreated($chatIds: [String!]!) {
    onThreadCreated(chatIds: $chatIds) {
      ...ThreadFragment
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
  GetThreadsDocument,
  OnThreadCreatedDocument,
};
