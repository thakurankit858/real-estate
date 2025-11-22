import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "68c1af3e-fe15-4ad8-83df-33e6047bd9f1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      alert("There was an error submitting the form " + data.message);
      setResult("");
    }
  };

  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contect'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Together</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>

          <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input type='text' name='Name' placeholder='Enter your name' className='border border-gray-300 rounded py-3 px-4 mt-2 w-full mb-4' required />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input type='email' name='Emale' placeholder='Enter your email' className='border border-gray-300 rounded py-3 px-4 mt-2 w-full mb-4' required />
          </div>

        </div>

        <div className='my-6 text-left'>
          Message
          <textarea name='Message' placeholder='Type your message here' className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' required></textarea>
        </div>

        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : "Send Message"}</button>

      </form>

    </div>
  )
}

export default Contact
