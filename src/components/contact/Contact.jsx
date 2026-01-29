import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 📨 Replace with your Formspree endpoint here:
  const FORMSPREE_URL = "https://formspree.io/f/mzzjkael";

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      return toast.error("Please complete the form above");
    }

    setLoading(true);

    const formData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Successfully sent message!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don’t like forms? Send me an email. 👋
          </p>
        </div>

        <form onSubmit={submitHandler} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <ToastContainer position="bottom-right" theme={props.theme} />
      </div>
    </section>
  );
};

export default Contact;
