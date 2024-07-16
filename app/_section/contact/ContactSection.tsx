// Component
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="pt-10 min-h-content-space w-screen max-w-container flex-1 flex flex-col items-center justify-center">
      <h2 className="pb-8 text-3xl font-bold text-center">問い合わせ</h2>
      <div className="w-4/5 lg:w-full lg:px-10 flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
