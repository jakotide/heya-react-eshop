import "./ContactForm.scss";
import { useState } from "react";
import Confetti from "react-confetti";

export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const [isSubmitted, setIsSubmittet] = useState(false);



  function handleTextInputChange(e) {
    const { name, value } = e.target;
    if (name === "first-name") {
      setFirstName(value);
    }
    if (name === "subject") {
      setSubject(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "body") {
      setBody(value);
    }
  }

  function onFormSubmit(e) {
    e.preventDefault();
    setFirstName("");
    setSubject("");
    setEmail("");
    setBody("");
    setIsSubmittet(true);
    setButtonText("Success!");
  }
  return (
    <div>
        {isSubmitted && <Confetti 
        width={`${Math.min(window.innerWidth - 100, window.innerWidth)}px`}
        recycle={false}
        gravity={0.4}/>}
    <form className="contact__form" onSubmit={onFormSubmit}>
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        name="first-name"
        value={firstName}
        onChange={handleTextInputChange}
        minLength={3}
        required
      />
      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={handleTextInputChange}
        minLength={3}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleTextInputChange}
        required
      />
      <label htmlFor="body">Message</label>
      <textarea
        type="text"
        name="body"
        value={body}
        onChange={handleTextInputChange}
        minLength={3}
        required
      />
      <button type="submit">{buttonText}</button>
    </form>
    </div>
    
  );
};
