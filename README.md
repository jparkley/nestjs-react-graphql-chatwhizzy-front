# ChatWhizzy Front-end

## Frontend: React, TypeScript, GraphQL, Apollo, Material UI

- Routing: react-router-dom
- JWT route protection
- Custom hooks
- [Apollo Client **Reactive variables**](https://www.apollographql.com/docs/react/local-state/reactive-variables/): handle loggedIn/loggedOut state globally
- [Apollo **cache.modify**](https://www.apollographql.com/docs/react/caching/cache-interaction/#using-cachemodify) updates cached query data without queryig server (ex: adding a new chat room)
- [GraphQL **fragments**](https://graphql.org/learn/queries/#fragments): leverage fragments for reusable units
- [Appllo **codegen**](https://www.apollographql.com/tutorials/lift-off-part1/09-codegen): auto-generate the TypeScript types to represent all of the GraphQL types in the backend schema

- To create updated GQL types, run 'yarn codegen'. For convenience, this can be added to packages.json start script with 'concurrently' library installed ("concurrently \"react-scripts start\" \"yarn codegen --watch\"" )

## [Backend: Nest.js, TypeScript, GraphQL, Apollo, Passport, JWT, MongoDB](https://github.com/jparkley/nestjs-react-graphql-chatwhizzy-back)

## TODO

-
