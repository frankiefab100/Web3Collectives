import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";

const NewsletterMailchimp = () => {
  // const subscriptionUrl = `https://app.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}&f_id=${process.env.REACT_APP_MAILCHIMP_FID}`;

  return (
    <MailchimpSubscribe
      // url={subscriptionUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default NewsletterMailchimp;
