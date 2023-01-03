import * as React from "react"
import Layout from "../components/Layout"
import {mainindex,indextitle , picturemain} from "../pages/Style/index.css"
  

const IndexPage = () => {
  return (
    <Layout>
      <div className="mainindex">
        <h1 className="indextitle">Welcome to my Mercedes Salon</h1>
        <img className="picturemain" src="https://www.pngmart.com/files/2/Mercedes-Logo-PNG-Image.png" alt="React Image" />
      </div>
      </Layout>
  )
}

export default IndexPage
