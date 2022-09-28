import React from "react";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./SubmitForm.css";

const SubmitForm = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-text">
          <h2 id="heading" className="title">
            Submit a new resource
          </h2>
          <h3 className="subtitle">Thank you as you contribute!</h3>
          <p className="form-text">
            Fill the form to submit a resource. Your submission should meet our
            requirements - It must be FREE and not already listed in this
            website.
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

          <button className="submit-btn">Submit</button>
        </form>
        You can also find our codebase on Github and make your contributions
      </div>

      <Featured />
      <Newsletter />
      <Footer />
    </>
  );
};

export default SubmitForm;
