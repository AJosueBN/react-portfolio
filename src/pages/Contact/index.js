import React from 'react'
import "./style.css"
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xnqkdedg");
  if (state.succeeded) {
      return <p>Thanks for contacting me!</p>;
  }
  
  return (
    <section className='contact'>
        <h1>Contact</h1>
        <div>
        <form onSubmit={handleSubmit}>
      <label htmlFor="email">
  
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
       
       
      <div className='github-link'>
        <p>GitHub</p>
            <a href='https://github.com/ajosuebn' target='_blank' rel='noopener noreferrer'>
              <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='GitHub' />
            </a>
          </div>
    </form>
        </div>
        </section>
  )
}

export default Contact