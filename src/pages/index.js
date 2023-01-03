import * as React from "react"
import Layout from "../components/Layout"
import {mainindex,indextitle , picturemain, button2, button} from "../pages/Style/index.css"
  

const IndexPage = () => {
  return (
    <Layout>
      <div className="mainindex">
      <p>------------------------------------------------------------------------------------------------------------------------------</p>
        <h1 className="indextitle">Welcome to my Mercedes Salon</h1>
        <img className="picturemain" src="https://www.pngmart.com/files/2/Mercedes-Logo-PNG-Image.png" alt="Mercedes Image" /> <br></br>
        <a href="/mercedes">        
        <button class="button button2" >Click here to check out my Favorite Mercedes Cars!</button>
        </a>
        <p>------------------------------------------------------------------------------------------------------------------------------</p>
      </div>
      </Layout>
  )
}

export default IndexPage
