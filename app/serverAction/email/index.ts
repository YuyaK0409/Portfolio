"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Template
import EmailTemplate from "@/components/template/EmailTemplate";

// Type
import { ContactFormType } from "@/type/contactForm.type";

export const sendEmail = async (body: ContactFormType) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Yuya Portfolio <ky1998040@yuya-portfolio.com>",
      to: ["ykawamoto.webdev@gmail.com"],
      subject: body.subject,
      react: EmailTemplate({
        email: body.email,
        subject: body.subject,
        message: body.message,
      }),
      // text: "it works!",
      // attachments: [
      //   {
      //     filename: 'invoice.pdf',
      //     content: invoiceBuffer,
      //   },
      // ],
      // headers: {
      //   "X-Entity-Ref-ID": "123456789",
      // },
      // tags: [
      //   {
      //     name: "category",
      //     value: "Contact",
      //   },
      // ],
    });

    if (error) {
      console.log(error);
      return { message: "メッセージ送信失敗しました", status: 500 };
    }

    return { message: "メッセージ送信成功しました", status: 200 };
  } catch (error) {
    console.log(error);
    return { message: "メッセージ送信失敗しました", status: 500 };
  }
};
