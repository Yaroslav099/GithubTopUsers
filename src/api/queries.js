export const userInfoQuery = `
{
  search(query: "location:Lviv followers:>10",  type: USER, first: 10, ) {
    repositoryCount
    edges {
      node {
        ... on User {
          name,
          email,
          location,
          avatarUrl,
          url,
          repositories(first:100) {
            nodes {
              stargazers{
                totalCount
              }
            }
          }
        }
      }
    }
  }
}
`