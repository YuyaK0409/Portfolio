// Type
type Props = { children: React.ReactNode };

const TwoSectionWrapper = ({ children }: Props) => {
  return (
    <div className="py-10 min-h-content-space w-screen max-w-container flex-1 flex flex-col gap-10 justify-around items-center lg:flex-row-reverse lg:py-0">
      {children}
    </div>
  );
};

export default TwoSectionWrapper;
