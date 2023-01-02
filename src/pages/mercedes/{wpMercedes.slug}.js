import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

  

const MercedesPage = ({data: {wpMercedes: {mercedes}}}) => {
    return (
      <Layout pageTitle="Mercedes Template">
        <div>
          <h3>{mercedes.title}</h3>
  
          <div dangerouslySetInnerHTML={{__html: mercedes.description}} />
          <p>category : {mercedes.category}</p>
          <p>model : {mercedes.model}</p>
          <p>fieldGroupName : {mercedes.fieldGroupName}</p>
          <p>horsepower : {mercedes.horsepower}</p>
          <p>material : {mercedes.material}</p>
          </div>
          <Link to='/mercedes'>Go back</Link>
      </Layout>
    )
  }









export const query = graphql`

query ($id: String){
    wpMercedes(id: {eq: $id}) {
      slug
      id
      mercedes {
        category
        description
        fieldGroupName
        horsepower
        material
        model
        options
        picture {
          localFile {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
        price
        title
        yearOfManufacturing
      }
    }
  }  `
  export default MercedesPage