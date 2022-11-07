import React, { useState } from "react";
// import { useForm, ValidationError } from "@formspree/react";
import axios from "axios";
import "./SubmitForm.css";

const SubmitForm = () => {
  // const [state, handleSubmit] = useForm("xyyvlzkd");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    resource: "",
    category: "",
    link: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });

      setInputs({
        email: "",
        resource: "",
        category: "",
        link: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xyyvlzkd",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          response,
          "Thank you! your submission was successful.",
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <>
      <div className="form-text">
        <h2 id="heading" className="title">
          Submit a new resource
        </h2>
        <p>
          Your submission should be FREE and not already listed in this website.
        </p>
      </div>
      <div className="form-container">
        <h3 className="subtitle">Thank you as you contribute!</h3>

        <form
          className="form resources-form"
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xyyvlzkd"
          method="POST"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email-address"
            name="email"
            onChange={handleOnChange}
            value={inputs.email}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="name">Resource Name</label>
          <input
            type="text"
            id="resource"
            name="resource"
            onChange={handleOnChange}
            value={inputs.resource}
            required
          />

          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleOnChange}
            value={inputs.category}
            required
          />

          <label htmlFor="link">Link</label>
          <input
            type="text"
            id="link"
            name="link"
            onChange={handleOnChange}
            value={inputs.link}
            required
          />

          {/* <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="submit-btn"
            disabled={state.submitting}
          >
            Submit
          </button> */}

          <button
            type="submit"
            className="submit-btn"
            disabled={status.submitting}
          >
            {!status.submitting
              ? !status.submitted
                ? "Submit"
                : "Submitted"
              : "Submitting..."}
          </button>
        </form>

        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </div>
    </>
  );
};

export default SubmitForm;
