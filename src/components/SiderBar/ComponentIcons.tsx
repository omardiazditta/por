import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineAtSymbol } from "react-icons/hi";

export const ComponentIcons = () => {
  return (
    <>
      <div className="itemSideBar info">
        <span className="containedIcon">
          <span className="redCircle">
            <HiOutlineAtSymbol />
          </span>
          <p className="date">omardiazditta@hotmail.com</p>
        </span>

        <span className="containedIcon">
          <span className="redCircle">
            <FaPhoneAlt />
          </span>
          <p className="date">3216607056</p>
        </span>

        <span className="containedIcon">
          <span className="redCircle">
            <FaLocationDot />
          </span>
          <p className="date">CL 5A 10-9, Chiriguaná</p>
        </span>
      </div>
    </>
  );
};
