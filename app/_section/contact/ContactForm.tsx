"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

// Const
import { animateionDelay, animateionDuration } from "@/app/const";

// Component
import ContactFormElement from "@/app/_component/ContactFormElement";

// Validation
import { ContactSchema, ContactType } from "@/const/validation/contactForm";

// Action
import { sendEmail } from "@/app/serverAction/email";
import { BaseSyntheticEvent, FormEvent } from "react";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ContactType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactType> = async (
    data: ContactType,
    e: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    e?.preventDefault();
    const res = await sendEmail(data);

    if (res.status == 200) {
      toast.success(res.message);
      reset();
    } else {
      toast.error(res.message);
    }
  };

  return (
    <form
      className="relative w-full md:w-4/5 flex flex-col flex-wrap md:gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex-1">
        <div>
          <ContactFormElement
            objKey={"email"}
            label={"Eメール"}
            errors={errors}
          >
            <input
              className="p-2 flex-1 bg-transparent border border-main-color outline-none focus:border-red-main-color focus:bg-white/10"
              {...register("email")}
            />
          </ContactFormElement>
        </div>
        <div>
          <ContactFormElement objKey={"subject"} label={"件名"} errors={errors}>
            <input
              className="p-2 flex-1 bg-transparent border border-main-color outline-none focus:border-red-main-color focus:bg-white/10"
              {...register("subject")}
            />
          </ContactFormElement>
        </div>
      </div>
      <div className="flex-1">
        <ContactFormElement
          objKey={"message"}
          label={"メッセージ"}
          errors={errors}
        >
          <textarea
            className="p-2 flex-1 bg-transparent border border-main-color outline-none focus:border-red-main-color focus:bg-white/10"
            {...register("message")}
            rows={10}
          ></textarea>
        </ContactFormElement>
      </div>
      <p className="p-2 w-full flex justify-end">
        <button
          className="relative p-2 w-full md:w-[200px] rounded-lg bg-red-300/50 hover:bg-red-300/80 duration-300"
          type="submit"
        >
          <motion.span
            whileInView={{ width: 0 }}
            transition={{
              delay: animateionDelay,
              duration: animateionDuration,
            }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 bg-red-300/50 z-30 w-full h-full"
          ></motion.span>
          送信
        </button>
      </p>
    </form>
  );
};

export default ContactForm;
