// Template for email which is sent from contact form
type Props = {
  email: string;
  subject: string;
  message: string;
};

const EmailTemplate = ({ email, subject, message }: Props) => (
  <div>
    <p>メールアドレス: {email}</p>
    <p>件名: {subject}</p>
    <p>
      メッセージ: <br />
      {message}
    </p>
  </div>
);

export default EmailTemplate;
