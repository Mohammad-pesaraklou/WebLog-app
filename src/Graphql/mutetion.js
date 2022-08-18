import { gql } from "@apollo/client";

const SEND_COMMENT_INF = gql`
mutation getComment($name: String!,$email: String!,$text: String!,$slug: String!){
  createComment(
    data: {name: $name, text: $text, email: $email, post: {connect: {Post: {slug: $slug}}}}
  ) {
    id
    name
    email
  }
}

`

export {SEND_COMMENT_INF};