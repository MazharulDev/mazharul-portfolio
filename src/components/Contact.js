import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// import contact data
import { contact } from '../data';
import { toast } from 'react-toastify';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yy7xgz7', 'template_dvji39l', form.current, 'yR9UzGajwLDd5rEFO')
      .then((result) => {
        toast("Send your Email successfully");
      }, (error) => {
        console.log(error.message);
      });
    e.target.reset();
  };
  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle'>
            To contact me, fill out this form and click on Send Message
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form ref={form} onSubmit={sendEmail}
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input name='clientName' className='input' type='text' placeholder='Your name' required />
              <input name='clientEmail' className='input' type='email' placeholder='Your email' required />
            </div>
            <input name='subject' className='input' type='text' placeholder='Subject' required />
            <textarea name='message' required
              className='textarea'
              placeholder='Your message'
            ></textarea>
            <input type='submit' value='Send message' className='btn text-white bg-accent hover:bg-secondary-hover cursor-pointer'>

            </input>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
