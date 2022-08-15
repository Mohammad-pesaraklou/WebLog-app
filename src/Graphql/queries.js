import { gql } from '@apollo/client'

const Get_BLOGS_INFO = gql`
query {
  posts {
    coverPhoto {
      url
    }
    slug
    title
    id
  }
  authors {
    name
    slug
    avatar {
      url
    }
  }
}
`

const GET_AUTHOR_INF = gql`
query{
  authors {
    avatar {
      url
    }
    name
    slug
    id
  }
}
`




export { Get_BLOGS_INFO, GET_AUTHOR_INF }