import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../../components/Layout"


const indexmercedes = ({data:{allWpMercedes:{edges}}}) => {

    
  return (
    <Layout>
        
        
        {edges.map(({node:{id, slug, mercedes}}) => {
            return(

                <Link to = {`/mercedes/${slug}`} key = {id}>
                {mercedes.title}
                </Link>

                



)})}
        
        
        
        </Layout>
  )
}


export const query = graphql`

query  {
    allWpMercedes {
        edges {
          node {
            slug
            id
            mercedes {
                title
              picture {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
                altText
              }
            }
          }
        }
      }
    }
    `
    
  

export default indexmercedes