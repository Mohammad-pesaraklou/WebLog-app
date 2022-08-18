import { gql } from '@apollo/client'

const Get_BLOGS_INFO = gql`
query {
  posts {
    title
    slug
    id
    coverPhoto {
      url
    }
    author {
      ... on Author {
        id
        name
        avatar{
          url
        }
      }
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

const GET_AUTHOR_DET = gql`
query getInfo($slug: String!){
  author(where: {slug: $slug}){
    avatar{
      url
    }
    field
    name
    description{
      html
    }
    posts {
    title
    slug
    id
    coverPhoto {
      url
    }
  }
  }
}
`

const GET_BLOG_DET = gql`
  query gerBlogDet($slug: String!){ 
    post(where: {slug: $slug}) {
      author {
      ... on Author {
        name
        avatar {
          url
        }
        field
      }
    }
    id
    slug
    title
    content {
      html
    }
    coverPhoto {
      url
    }
  }

  }  
`
const GET_COMMENTS = gql`
query{
  comments{
    text
    name
    id
  }
}
`


export { Get_BLOGS_INFO, GET_AUTHOR_INF,GET_AUTHOR_DET,GET_BLOG_DET,GET_COMMENTS }