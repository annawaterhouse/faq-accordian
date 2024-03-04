import Accordion from "./Accordion";
import woman from "../images/illustration-woman-online-desktop.svg";
import box from "../images/illustration-box-desktop.svg";
import background from "../images/bg-pattern-desktop.svg";

export default function Card() {
  return (
    <div className="wrapper">
          <img
            className="woman-svg-mobile"
            src={woman}
            alt="illustration-woman-at-desktop"
          />
      <img className="box-svg" src={box} alt="illustration-box-desktop" />

      <section className="card">
        <figure className="left">
          <img
            className="woman-svg"
            src={woman}
            alt="illustration-woman-at-desktop"
          />
          <img
            className="background-svg"
            src={background}
            alt="background-patter"
          />
        </figure>
        <Accordion />
      </section>
    </div>
  );
}
