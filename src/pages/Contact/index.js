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
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
        </div>
        </section>
  )
}

export default Contact