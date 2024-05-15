import { graphql } from "../gql/gql";

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
      _id
      creatorId
      isPrivate
      memberIds
      chatName
    }
  }
`);

export { CreateUserDocument, GetCurrentUserDocument, CreateChatDocument };
