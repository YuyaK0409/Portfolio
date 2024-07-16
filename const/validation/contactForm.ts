import { z } from "zod";

// Contact Form validation
export const ContactSchema = z
  .object({
    email: z.string().email("メールアドレスを入力してください"),
    subject: z.string().min(5, "5文字以上入力してください。"),
    message: z.string().min(10, "10文字以上入力してください。"),
  })
  .required();

export type ContactType = z.infer<typeof ContactSchema>;
