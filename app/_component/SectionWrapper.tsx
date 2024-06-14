// Type
type Props = { children: React.ReactNode };

const SectionWrapper = ({ children }: Props) => {
  return (
    <div className="bg-slate-500 py-5 min-h-content-space w-screen max-w-container flex-1 flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default SectionWrapper;
