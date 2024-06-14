// Menu
import { menu } from "@/const/menu";

// Component
import CustomLink from "../CustomLink";

// Tyoe
type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ToggleMenu = ({ setIsOpen }: Props) => {
  const style =
    "toggle-item p-2 cursor-pointer duration-300 flex justify-center items-center hover:bg-main-color hover:text-background";
  return (
    <div
      className="absolute top-0 right-0 w-screen h-screen p-2"
      onClick={() =>
        setIsOpen((prev) => {
          return !prev;
        })
      }
    >
      <div className="bg-black text-main-color absolute top-[55px] right-0 w-[200px] flex flex-col">
        {menu.map((item) => (
          <CustomLink
            key={item.hash}
            hash={item.hash}
            label={item.label}
            style={style}
          />
        ))}
      </div>
    </div>
  );
};

export default ToggleMenu;
