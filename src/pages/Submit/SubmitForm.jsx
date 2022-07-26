import React from "react";
import "./SubmitForm.css";

const SubmitForm = () => {
  return (
    <div className="form-container">
      <div className="form-text">
        <h2 className="title">Submit a new resource</h2>
        <h4 className="subtitle">Thank you as you contribute!</h4>
        <p>
          Fill the form to submit a resource. Your submission should meet our
          requirements - It must be FREE and not already listed in this website.
        </p>
      </div>
      <form action="" method="POST">
        <label htmlFor="name">Resource Name</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="category">Category</label>
        <input type="text" name="category" id="category" />

        <label htmlFor="link">Link</label>
        <input type="text" name="link" id="link" required />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="A brief detail about this free resource"
        />

        <button className="contact-btn">Submit</button>
      </form>
    </div>
  );
};

export default SubmitForm;
