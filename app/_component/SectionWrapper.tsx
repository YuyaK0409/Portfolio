// Type
type Props = { children: React.ReactNode };

const SectionWrapper = ({ children }: Props) => {
  return (
    <div className="w-screen max-w-container flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default SectionWrapper;
