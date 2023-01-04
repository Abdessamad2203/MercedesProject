import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {picturemain} from "/src/pages/mercedes/Style/mercedes.module.css"
import{Picmercedespage , Namemercedespage, detailmercedes, detailtitle, gobackbutton} from "/src/pages/mercedes/Style/index.css"
  

const MercedesPage = ({
    data:{
        wpMercedes: {mercedes},
    },

    }) => {

const Image = getImage(mercedes.picture.localFile)



    return (
      <Layout pageTitle="Mercedes Template">
        <div className='detailmercedes'>
          <h3 className='detailtitle'>{mercedes.title}</h3>

          <GatsbyImage className={picturemain} image = {Image} alt = {mercedes.picture.altText}></GatsbyImage>
 
          <div className='descriptiondetailmercedes' dangerouslySetInnerHTML={{__html: mercedes.description}} />
          <p className='textdetailscars'>category : {mercedes.category}</p>
          <p className='textdetailscars'>model : {mercedes.model}</p>
          <p className='textdetailscars'>Field GroupName : {mercedes.fieldGroupName}</p>
          <p className='textdetailscars'>horsepower : {mercedes.horsepower}</p>
          <p className='textdetailscars'>material : {mercedes.material}</p>
          <p className='textdetailscars'>options : {mercedes.options}</p>
          <p className='textdetailscars'>Year Of Manufacturing : {mercedes.yearOfManufacturing}</p>
          <p className='textdetailscars'>price : {mercedes.price}</p>
          </div>
          <Link to='/mercedes' className='gobackbttn'>Go back</Link>
          
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