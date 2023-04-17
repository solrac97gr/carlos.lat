import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useState } from "react";
import { decode } from "html-entities";
import {
  NewsletterFormContainer,
  NewsletterFormTitle,
  NewsletterFormStyle,
  NewsletterFormInput,
  NewsLetterFormButton,
  NewsletterFormSpan,
} from "./index.style";
import { logEvent } from "../../lib/analytics";
import { getDomain } from "../../lib/helpers";

export const NewsletterSubscribe = () => {
  const MAILCHIMP_URL =
    "https://lat.us21.list-manage.com/subscribe/post?u=fe5015708e7ea4109f7b1d66a&amp;id=87e607df01&amp;f_id=004fbae1f0";

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Ingresa un correo electrónico válido.");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    logEvent("button", "subscribe_newsletter", "post_form",getDomain(email));
    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <NewsletterFormContainer>
      <NewsletterFormTitle>Conviértete en un Go Ninja 🥷.</NewsletterFormTitle>
      <NewsletterFormSpan>
        Suscríbete a mi newsletter y recibe las últimas novedades en Go.
      </NewsletterFormSpan>
      <NewsletterFormStyle className="d-flex newsletter-input-fields">
        <div className="mc-field-group">
          <NewsletterFormInput
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="mr-2"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <NewsLetterFormButton
            className="wp-block-button__link"
            onClick={handleFormSubmit}
          >
            Suscríbete
          </NewsLetterFormButton>
        </div>
      </NewsletterFormStyle>
      <div className="newsletter-form-info">
        {status === "sending" && <div>Enviando...</div>}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {status === "success" && status !== "error" && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </NewsletterFormContainer>
  );
};
