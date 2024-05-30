/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment ChatFragment on Chat {\n    _id\n    chatName\n    latestThread {\n      ...ThreadFragment\n    }\n  }\n": types.ChatFragmentFragmentDoc,
    "\n  fragment ThreadFragment on Thread {\n    _id\n    content\n    createdAt\n    chatId\n    user {\n      _id\n      email\n    }\n  }\n": types.ThreadFragmentFragmentDoc,
    "\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n      email\n    }\n  }\n": types.CreateUserDocument,
    "\n  query GetCurrentUser {\n    currentUser {\n      _id\n      email\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  mutation CreateChat($createChatInput: CreateChatInput!) {\n    createChat(createChatInput: $createChatInput) {\n      ...ChatFragment\n    }\n  }\n": types.CreateChatDocument,
    "\n  query GetChats {\n    chats {\n      ...ChatFragment\n    }\n  }\n": types.GetChatsDocument,
    "\n  query GetChat($_id: String!) {\n    chat(_id: $_id) {\n      ...ChatFragment\n    }\n  }\n": types.GetChatDocument,
    "\n  mutation CreateThread($createThreadInput: CreateThreadInput!) {\n    createThread(createThreadInput: $createThreadInput) {\n      ...ThreadFragment\n    }\n  }\n": types.CreateThreadDocument,
    "\n  query GetThreads($chatId: String!) {\n    threads(chatId: $chatId) {\n      ...ThreadFragment\n    }\n  }\n": types.GetThreadsDocument,
    "\n  subscription onThreadCreated($chatId: String!) {\n    onThreadCreated(chatId: $chatId) {\n      ...ThreadFragment\n    }\n  }\n": types.OnThreadCreatedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ChatFragment on Chat {\n    _id\n    chatName\n    latestThread {\n      ...ThreadFragment\n    }\n  }\n"): (typeof documents)["\n  fragment ChatFragment on Chat {\n    _id\n    chatName\n    latestThread {\n      ...ThreadFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ThreadFragment on Thread {\n    _id\n    content\n    createdAt\n    chatId\n    user {\n      _id\n      email\n    }\n  }\n"): (typeof documents)["\n  fragment ThreadFragment on Thread {\n    _id\n    content\n    createdAt\n    chatId\n    user {\n      _id\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n      email\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCurrentUser {\n    currentUser {\n      _id\n      email\n    }\n  }\n"): (typeof documents)["\n  query GetCurrentUser {\n    currentUser {\n      _id\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateChat($createChatInput: CreateChatInput!) {\n    createChat(createChatInput: $createChatInput) {\n      ...ChatFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChat($createChatInput: CreateChatInput!) {\n    createChat(createChatInput: $createChatInput) {\n      ...ChatFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChats {\n    chats {\n      ...ChatFragment\n    }\n  }\n"): (typeof documents)["\n  query GetChats {\n    chats {\n      ...ChatFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChat($_id: String!) {\n    chat(_id: $_id) {\n      ...ChatFragment\n    }\n  }\n"): (typeof documents)["\n  query GetChat($_id: String!) {\n    chat(_id: $_id) {\n      ...ChatFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateThread($createThreadInput: CreateThreadInput!) {\n    createThread(createThreadInput: $createThreadInput) {\n      ...ThreadFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateThread($createThreadInput: CreateThreadInput!) {\n    createThread(createThreadInput: $createThreadInput) {\n      ...ThreadFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetThreads($chatId: String!) {\n    threads(chatId: $chatId) {\n      ...ThreadFragment\n    }\n  }\n"): (typeof documents)["\n  query GetThreads($chatId: String!) {\n    threads(chatId: $chatId) {\n      ...ThreadFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription onThreadCreated($chatId: String!) {\n    onThreadCreated(chatId: $chatId) {\n      ...ThreadFragment\n    }\n  }\n"): (typeof documents)["\n  subscription onThreadCreated($chatId: String!) {\n    onThreadCreated(chatId: $chatId) {\n      ...ThreadFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;