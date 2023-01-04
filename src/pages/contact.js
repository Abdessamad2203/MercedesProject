import React from 'react'
import Layout from '../components/Layout'
import{form} from "./Style/contact.module.css"

const contact = () => {
  return (
    <Layout>
    <div className='indexform'>

<h1>If you have any questions, I would like to hear from you!</h1>
      <section className={form}>
        <form name="contact" method="POST" data-netlify="true">
            <label>Your Name:</label>
            <input type="text" name="name" required={true} />
            <label>Your Email:</label>
            <input type="email" name="email" required={true} />
            <label>Message:</label>
            <textarea name="message" required={true}></textarea>
            <input type="hidden" name="form-name" value="contact" />
            <button type="submit">Send</button>
        </form>
      </section>






    </div>
    </Layout>
  )
}

export default contact