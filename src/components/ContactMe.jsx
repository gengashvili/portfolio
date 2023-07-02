import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import styled from "styled-components";

const ContactMe = ({ darkMode }) => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_USER_ID
      )
      .then((result) => {
        console.log(result);
        form.current.reset();
        setEmailSent(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledForm ref={form} onSubmit={sendEmail} darkMode={darkMode}>
      <h2>Contact me</h2>
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Your Email</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Type Message</label>
      <textarea name="message" id="message" rows="5" required />
      <button type="submit" className="btn">
        Submit
      </button>
      {emailSent && <p style={{ color: "green" }}>Email sent successfully!</p>}
      {error && <p style={{ color: "red" }}>something went wrong. try again</p>}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  background-color: ${({ darkMode }) => (darkMode ? "#171F26" : "#FFFFFF")};
  color: ${({ darkMode }) => (darkMode ? "#A3ABB2" : "#575757")};
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 50px auto;
  border-radius: 10px;
  padding: 16px;
  h2 {
    margin-bottom: 20px;
  }
  label {
    cursor: pointer;
  }
  input,
  textarea {
    padding: 10px;
    margin: 10px 0;
    background-color: ${({ darkMode }) => (darkMode ? "#043449" : "")};
    border-radius: 10px;
    ${({ darkMode }) => darkMode ? 'border: none;' : 'border: 1px solid #575757;'}; 
  }
  button {
    width: 50%;
    margin: 10px auto;
    font-size: 1.6rem;
  }
  @media (min-width: 540px) {
    width: 450px;
    button {
      font-size: 1.8rem;
    }
  }
  @media (min-width: 740px) {
    width: 640px;
    button {
      font-size: 2rem;
    }
  }
  @media (min-width: 1040px) {
    width: 840px;
    button {
      font-size: 2.2rem;
    }
  }
  @media (min-width: 1240px) {
    button {
      font-size: 2.4rem;
    }
  }
`;

export default ContactMe;
