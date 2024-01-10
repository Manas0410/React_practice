import "./contactForm.css";
const ContactForm = () => {
  return (
    <div>
      <form
        action="https://formspree.io/f/xpzvwzwl"
        method="POST"
        className="contact-inputs"
      >
        <input
          type="text"
          name="username"
          placeholder="username"
          autoComplete="off"
          required
          className="input-field"
        />

        <input
          type="email"
          name="Email"
          placeholder="Email"
          autoComplete="off"
          required
          className="input-field"
        />

        <textarea
          name="message"
          cols="30"
          rows="6"
          autoComplete="off"
          required
          className="input-textArea"
          placeholder="enter your message"
        ></textarea>

        <input type="submit" value="send" className="submitbutton" />
      </form>
    </div>
  );
};
export default ContactForm;
