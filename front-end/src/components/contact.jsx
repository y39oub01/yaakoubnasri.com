import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact({ darkmode }) {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    msg: ""
  });
  const [error, seterror] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const validate = () => {
    const newerror = {};
    if (!formdata.name.trim()) {
      newerror.name = "Name is required";
    } else if (formdata.name.length < 4) {
      newerror.name = "Name must be at least 4 characters long";
    } else if (!isNaN(formdata.name)) {
      newerror.name = "Name must be a string";
    }

    if (!formdata.email.trim()) {
      newerror.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formdata.email)) {
      newerror.email = "Email must include @";
    }

    if (!formdata.msg.trim()) {
      newerror.msg = "Message is required";
    } else if (formdata.msg.length < 5) {
      newerror.msg = "Message must be at least 5 characters long";
    }

    return newerror;
  };

  const handlereset = () => {
    setformdata({ name: "", email: "", msg: "" });
    seterror({});
    setSubmitted(false);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const validationerrors = validate();
    if (Object.keys(validationerrors).length > 0) {
      seterror(validationerrors);
      return;
    }

    // Send data to Formspree
    try {
      const response = await fetch("https://formspree.io/f/mvgqqgrg", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Ac!cept': 'application/json'
        },
        body: JSON.stringify({
          name: formdata.name,
          email: formdata.email,
          message: formdata.msg
        })
      });

      if (response.ok) {
        setSubmitted(true);
        handlereset();
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className={darkmode ? 'dark-section-contact' : 'light-section-contact'}>
      <div className='contact-container'>
        <div className='contact-info'>
          <div className='contact-item'><i className='fas fa-envelope'></i></div>
          <div className='contact-txt'><h4>Email</h4><a href="mailto:yaakoubnasri01@gmail.com">yaakoubnasri01@gmail.com</a></div>
          <div className='contact-item'><i className='fas fa-phone'></i></div>
          <div className='contact-txt'><h4>Phone</h4><span>+216 92 683 417</span></div>
          <div className='contact-item'><i className='fas fa-location-arrow'></i></div>
          <div className='contact-txt'><h4>Location</h4><span>Tunisia</span></div>
        </div>

        <div className='contact-form'>
          <form onSubmit={handlesubmit} className='form-forcontact'>
            <label htmlFor="name">
              <input
                type="text"
                placeholder='Name ....'
                name='name'
                required
                value={formdata.name}
                onChange={handlechange}
                autoFocus
              />
              {error.name && <span className="error">{error.name}</span>}
            </label><br /><br />

            <label htmlFor="email">
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handlechange}
                required
                placeholder='your email...'
              />
              {error.email && <span className="error">{error.email}</span>}
            </label><br /><br />

            <label htmlFor="msg">
              <textarea
                rows={8}
                placeholder='Your message'
                required
                name='msg'
                value={formdata.msg}
                onChange={handlechange}
              ></textarea>
              {error.msg && <span className="error">{error.msg}</span>}
            </label>

            <button type="submit">Submit</button>
            <button type="reset" onClick={handlereset}>Reset</button>
            {submitted && <p className="success-message">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
