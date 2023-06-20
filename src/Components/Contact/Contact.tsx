import { FC , useRef } from 'react';
import 'Components/Contact/Contact.css';
import { Contact as ContactProps } from 'modals/configuration';
import emailjs from '@emailjs/browser';
import DynamicIcon from 'Common/DynamicIcon';

type Props = {
  contactObj: ContactProps;
};

const Contact: FC<Props> = (props) => {
  const { id, header, title, contactCards, mailSubject, emailKey, contactForm, submitBtn } =
    props.contactObj;

  const form = useRef();

  const sendEmail =  (e: any)  => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_fncp9fz', form.current! , 'RAxgtNT3W2vzfEOhD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id={id}>
      <h5>{header}</h5>
      <h2>{title}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contactCards.map((contactCard, i) => (
            <article className="contact__option" key={`Contact_${i}`}>
              <DynamicIcon iconName={contactCard.iconName} />
              <h4>{contactCard.title}</h4>
              <h5>{contactCard.description}</h5>
              <a href={contactCard.link.url} rel="noreferrer" target="_blank">
                {contactCard.link.title}
              </a>
            </article>
          ))}
        </div>
        <form  onSubmit={sendEmail} ref={form.current}>
          {contactForm.map((contactFormItem, i) =>
            contactFormItem.type === 'textarea' ? (
              <textarea
                key={`ContactForm_${i}`}
                name="message"
                rows={7}
                placeholder={contactFormItem.placeholder}
              ></textarea>
            ) : (
              <input
                key={`ContactForm_${i}`}
                type="text"
                name="name"
                placeholder={contactFormItem.placeholder}
                required
              />
            )
          )}
          <button type="submit" className="btn btn-primary" value='Send'>
            {submitBtn}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
