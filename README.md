# ChatWhizzy Front-end

## Frontend: React, TypeScript, GraphQL, Apollo, Material UI

- Routing: react-router-dom
- JWT route protection
- Custom hooks
- [Apollo Client **Reactive variables**](https://www.apollographql.com/docs/react/local-state/reactive-variables/): to handle loggedIn/loggedOut state globally
- [Apollo **cache.modify**](https://www.apollographql.com/docs/react/caching/cache-interaction/#using-cachemodify) to update cached query data without querying server after mutation (ex: adding a new chat room)
- [GraphQL **fragments**](https://graphql.org/learn/queries/#fragments): to leverage fragments for reusable units
- [Apollo GraphQL **subscription**](https://www.apollographql.com/docs/react/data/subscriptions/): to maintain active connection to GraphQL server (most commonly via WebSocket), enabling server to push updates.
- [Apollo GraphQL **subscription, PubSub class**](https://www.apollographql.com/docs/apollo-server/data/subscriptions/#the-pubsub-class): to use the publish-subscribe (pub/sub) model to track events that update active subscriptions.
- [Apollo GraphQL **subscription with Nest.js**](https://docs.nestjs.com/graphql/subscriptions)
- [Apollo **codegen**](https://www.apollographql.com/tutorials/lift-off-part1/09-codegen): auto-generate the TypeScript types to represent all of the GraphQL types in the backend schema

- To create updated GQL types, run 'yarn codegen'. For convenience, this can be added to packages.json start script with 'concurrently' library installed ("concurrently \"react-scripts start\" \"yarn codegen --watch\"" )

## [Backend: Nest.js, TypeScript, GraphQL, Apollo, Passport, JWT, MongoDB](https://github.com/jparkley/nestjs-react-graphql-chatwhizzy-back)

## TODO

-
