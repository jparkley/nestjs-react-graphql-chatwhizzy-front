const handleGraphQLErrors = (error: any) => {
  const originalError =
    error.graphQLErrors[0]?.extensions?.originalError?.message;
  return originalError || error.message;
};
export { handleGraphQLErrors };
