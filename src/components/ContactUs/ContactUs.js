import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
 
  .common-heading{
    margin:5px;
    margin-top:5rem;
    color: green;
    font-size: 40px;

  }
  .container {
    margin-top: 2rem;
    text-align: center;
  }

  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;

    input[type='text'],
    input[type='email'],
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    textarea {
      resize: vertical;
      min-height: 150px;
    }

    input[type='submit'] {
      background-color: #4caf50;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #45a049;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      margin-top: 3rem;
    }

    .contact-form {
      padding: 0 10px;
    }
  }
`;

const ContactUs = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <hr/>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6911638804895!2d77.3016453!3d23.1814693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c5c3c7b0aa7e1%3A0xf4798e9656dfb029!2z4KS44KS-4KSX4KSwIOCkteCkv-CknOCljeCknuCkvuCkqCwg4KSq4KWN4KSw4KWM4KSm4KWN4KSv4KWL4KSX4KS_4KSV4KWAIOCklOCksCDgpIXgpKjgpYHgpLjgpILgpKfgpL7gpKgg4KS44KSC4KS44KWN4KSl4KS-4KSoLCDgpLDgpL7gpKTgpYDgpKzgpZw!5e0!3m2!1shi!2sin!4v1711520599561!5m2!1shi!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="#" method="POST">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              cols="30"
              row="6"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactUs;
