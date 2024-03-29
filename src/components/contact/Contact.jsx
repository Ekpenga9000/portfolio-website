import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleFormChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formValue;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setMessage("Please fill all fields.");
      return;
    }
    try {
      const emailReq = {
        serviceId: "service_vq5mtvh",
        templateId: "template_dorbspq",
        publicKey: "--pjnmFyvLMKxalHz",
      };
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "Omogbare",
        message,
      };
      const initialState = {
        name: "",
        email: "",
        message: "",
      };
      await emailjs.send(
        emailReq.serviceId,
        emailReq.templateId,
        templateParams,
        emailReq.publicKey
      );
      setMessage("Message sent!");
      setFormValue({ ...initialState });
    } catch (err) {
        console.log(err)
      setMessage("Error sending message.");
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="contact__container container">
        <h2 className="contact__header">Contact Me</h2>
        <span className="contact__sub-header">Say Hello</span>
        <form onSubmit={handleSubmit} className="contact__form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="contact__input"
            value={formValue.name}
            onChange={handleFormChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="contact__input"
            value={formValue.email}
            onChange={handleFormChange}
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="contact__txt-area"
            value={formValue.message}
            onChange={handleFormChange}
          ></textarea>
          <div className="contact__btn-div">
            <span className="contact__span">{message}</span>
            <button className="contact__btn">
              Send message <i className="uil uil-message contact__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
