import Image from "next/image";

type Props = {
  className?: string;
  alt: string;
  label: string;
  html: string;
};

const SkillCard = ({ className, alt, label, html }: Props) => {
  return (
    <div className="relative my-5 w-[100px] h-[100px]">
      <Image className={className} src={html} fill alt={alt} />
      <span className="absolute w-full top-full left-0 text-center">
        {label}
      </span>
    </div>
  );
};

export default SkillCard;
