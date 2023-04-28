import { ForM } from "./Form";
import frontImage from "../Images/frontImage.jpg";
import logo from "../Images/logo.png";

export const HomePage = () => {
  return (
    <div>
      <img src={logo} alt="brand logo" className="logo" />
      <div className="frontImageDiv">
        <img src={frontImage} alt="background" className="frontImg" />
      </div>
      <div className="formDiv">
        <ForM />
        <p className="parag">or<span className="paragSpan"> Sign In </span></p>
      </div>
    </div>
  );
};
