// Util
import { motion } from "framer-motion";

type Props = {
  objKey: string;
  label: string;
  errors: any;
  children: React.ReactNode;
};

const ContactFormElement = ({ objKey, label, errors, children }: Props) => {
  return (
    <div className="relative p-2 flex flex-col  lg:flex-col flex-wrap">
      <label className="w-[90px]">{label}</label>
      <div className="relative flex-1 flex">
        <motion.span
          initial={{ opacity: 0.5 }}
          whileInView={{ width: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="absolute top-0 left-0 bg-red-100 w-full h-full"
        ></motion.span>
        {children}
      </div>
      {errors[objKey] && (
        <div className="text-red-400 text-sm w-full mt-2 md:pl-[100px]">
          <li>{errors[objKey].message}</li>
        </div>
      )}
    </div>
  );
};

export default ContactFormElement;
