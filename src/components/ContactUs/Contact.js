import React, { useState } from "react";
import Lottie from "lottie-react";
import ContactSupport from "../../animations/striper4.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    let temp = {};

    temp.username = contact.username.trim() ? "" : "Name is Required";
    temp.email = /\S+@\S+\.\S+/.test(contact.email) ? "" : "Invalid email format";
    temp.subject = contact.subject.trim() ? "" : "Subject is Required";
    temp.message = contact.message.trim() ? "" : "Message is Required";

    setErrors({ ...temp });

    return Object.values(temp).every((value) => value === "");
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: value.trim() ? "" : `${name.charAt(0).toUpperCase() + name.slice(1)} is Required`,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (validate()) {
      try {
        // Simulate API call
        setTimeout(() => {
          setContact({ username: "", email: "", subject: "", message: "" });
          toast.success("Message sent successfully");
          setIsLoading(false);
        }, 2000); // Simulating 2 seconds delay for API call
      } catch (error) {
        toast.error("Something went wrong :( ");
        setIsLoading(false);
      }
    } else {
      toast.error("Please fill out all the fields correctly");
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-us-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="row">
              <div className="contact-left-side col-12 col-lg-5">
                <h1 className="main-heading fw-bold">Contact Me</h1>
                <figure>
                  <Lottie
                    loop={true}
                    animationData={ContactSupport}
                    className="lottie-animation"
                  />
                </figure>
              </div>
              <div className="contact contact-right-side col-12 col-lg-7">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        name="username"
                        autoComplete="off"
                        value={contact.username}
                        onChange={handleInput}
                        disabled={isLoading}
                      />
                      {errors.username && (
                        <div className="text-danger">{errors.username}</div>
                      )}
                    </div>
                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        name="email"
                        autoComplete="off"
                        value={contact.email}
                        onChange={handleInput}
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 contact-input-field">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                        name="subject"
                        autoComplete="off"
                        value={contact.subject}
                        onChange={handleInput}
                        disabled={isLoading}
                      />
                      {errors.subject && (
                        <div className="text-danger">{errors.subject}</div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 contact-input-field">
                      <textarea
                        placeholder="Message"
                        className="form-control"
                        name="message"
                        value={contact.message}
                        onChange={handleInput}
                        disabled={isLoading}
                      ></textarea>
                      {errors.message && (
                        <div className="text-danger">{errors.message}</div>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="my-btn w-100"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
