// Type
type Props = { children: React.ReactNode };

const TwoSectionWrapper = ({ children }: Props) => {
  return (
    <div className="w-screen pt-10 max-w-container flex-1 flex flex-col gap-10 justify-center items-center lg:flex-row-reverse">
      {children}
    </div>
  );
};

export default TwoSectionWrapper;
