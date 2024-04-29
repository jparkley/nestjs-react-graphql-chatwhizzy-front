import { gql } from "@apollo/client";

export interface CreateUserInput {
  createUserInput: {
    email: string;
    password: string;
  };
}

const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`;

export { CREATE_USER };
