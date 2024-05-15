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

export { CreateUserDocument, GetCurrentUserDocument, CreateChatDocument };
