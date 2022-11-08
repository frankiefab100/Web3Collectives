import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./SubmitForm.css";

const SubmitForm = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_APP_FORMSPREE_ID);
  if (state.succeeded) {
    return <p>Thanks for your contribution!</p>;
  }

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
          {/* <label htmlFor="email">Email</label>
          <input type="email" id="email-address" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} /> */}

          <label htmlFor="name">Resource Name</label>
          <input type="text" id="resource" name="resource" required />
          <ValidationError
            prefix="Resources"
            field="resources"
            errors={state.errors}
          />

          <label htmlFor="category">Category</label>
          <input type="text" id="category" name="category" required />
          <ValidationError
            prefix="Category"
            field="category"
            errors={state.errors}
          />

          <label htmlFor="link">Link</label>
          <input type="text" id="link" name="link" required />
          <ValidationError prefix="Link" field="link" errors={state.errors} />

          <button
            type="submit"
            className="submit-btn"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
        <ValidationError errors={state.errors} />
      </div>
    </>
  );
};

export default SubmitForm;
