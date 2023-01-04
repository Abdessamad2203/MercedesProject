import * as React from "react"
import Layout from "../components/Layout"
import {mainindex,indextitle , picturemain, button2, button} from "../pages/Style/index.css"
import { Link , graphql} from "gatsby"

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MercedesPage from "./mercedes/{wpMercedes.slug}"


  


const IndexPage = ({ data: { wpPage: { homeFields } },}) => {
  const image = getImage(homeFields.picture.localFile)

  return (
    <Layout>
      <div className="mainindex">
      <p>------------------------------------------------------------------------------------------------------------------------------</p>
        <h1 className="indextitle">{homeFields.title}</h1>
        <GatsbyImage image = {image}></GatsbyImage>
        
        {
          homeFields.feauturedProducts.map((item) => {
            const mercedes = item.mercedes
            const slug = item.slug
            const image = getImage(mercedes.picture.localFile)

            return <div> 
            <Link to = {`/mercedes/${slug}`} >
              <GatsbyImage
                image={image}
                
                
              />
              <p key={item.id}  style={{fontSize:"23px"}}><b>{mercedes.title}</b></p>
              <p >{mercedes.description}</p>
              </Link>
            </div>
          })
        }

        
        
        
        <br></br>
        <a href="/mercedes">        
        <button class="button button2" >Click here to check out my Favorite Mercedes Cars!</button>
        </a>
        <p>------------------------------------------------------------------------------------------------------------------------------</p>
      </div>
      </Layout>
  )
}


export const query = graphql`

query  {
  wpPage(slug: {eq: "home"}) {
    homeFields {
      description
      title
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      feauturedProducts {
        ... on WpMercedes {
          id
          slug
          mercedes {
            title
            description
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
