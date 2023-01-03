import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../../components/Layout"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {Picmercedespage, Namemercedespage} from "./Style/index.css"


const indexmercedes = ({data:{allWpMercedes:{edges}}}) => {

    
  return (
    <Layout>
        
        
        {edges.map(({node:{id, slug, mercedes}}) => {


            const Image = getImage(mercedes.picture.localFile)
            
return(
  
<div>
    <div className= "Namemercedespage">
                <Link to = {`/mercedes/${slug}`} key = {id}>
                {mercedes.title} 
                </Link>
                </div>
                <div  className="Picmercedespage">
                <GatsbyImage style={{width: '150px'}} image={Image}></GatsbyImage>
    </div>
    </div>
    
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