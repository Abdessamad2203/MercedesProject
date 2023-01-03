import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {mercedesimage} from "/src/pages/mercedes/Style/mercedes.module.css"
  

const MercedesPage = ({
    data:{
        wpMercedes: {mercedes},
    },

    }) => {

const Image = getImage(mercedes.picture.localFile)



    return (
      <Layout pageTitle="Mercedes Template">
        <div>
          <h3>{mercedes.title}</h3>

          <GatsbyImage className={mercedesimage} image = {Image} alt = {mercedes.picture.altText}></GatsbyImage>
 
          <div dangerouslySetInnerHTML={{__html: mercedes.description}} />
          <p>category : {mercedes.category}</p>
          <p>model : {mercedes.model}</p>
          <p>fieldGroupName : {mercedes.fieldGroupName}</p>
          <p>horsepower : {mercedes.horsepower}</p>
          <p>material : {mercedes.material}</p>
          <p>options : {mercedes.options}</p>
          <p>yearOfManufacturing : {mercedes.yearOfManufacturing}</p>
          <p>price : {mercedes.price}</p>
          </div>
          <Link to='/mercedes'>Go back</Link>
      </Layout>
    )
  }









export const query = graphql`

query MyQuery($slug: String) {
    wpMercedes(slug: {eq: $slug}) {
      mercedes {
        category
        description
        fieldGroupName
        horsepower
        material
        model
        options
        price
        title
        yearOfManufacturing
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
    `
  export default MercedesPage