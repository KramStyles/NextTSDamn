import { request, gql } from "graphql-request";
const graphqlAPI = process.env["NEXT_PUBLIC_GRAPH_CMS_ENDPOINT"]
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            category {
              name
              slug
            }
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const results = await request(graphqlAPI, query)

  return results.postsConnection.edges;
};
