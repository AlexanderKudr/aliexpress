import { Link } from "react-router-dom";
import { Google, Logo } from "../components/icons";
import { useEffect, useRef } from "react";
import img1 from "../assets/images/signup-pic-1-2.jpg";
import img2 from "../assets/images/sigup-picture-1-1.jpg";
import img3 from "../assets/images/signup-pic-1-3.jpg";
import img4 from "../assets/images/signup-pic-2-1.jpg";
import img5 from "../assets/images/signup-pic-2-2.jpg";
import img6 from "../assets/images/signup-pic-2-3.jpg";
import img7 from "../assets/images/car1.jpg";
import img8 from "../assets/images/car2.jpg";
import img9 from "../assets/images/car3.jpg";

const SignUpPage = () => {
  //-----------------------------

  const card1: any = useRef();
  const card2: any = useRef();
  const card3: any = useRef();

  function ButtonsignUp(e: any) {
    let id: number = e.target.id;

    let card1main: any = card1.current;
    let card2main: any = card2.current;
    let card3main: any = card3.current;

    if (id == 1) {
      card1main.style.backgroundImage = `url(${img1})`;
      card2main.style.backgroundImage = `url(${img2})`;
      card3main.style.backgroundImage = `url(${img3})`;
    } else {
    }

    if (id == 2) {
      card1main.style.backgroundImage = `url(${img4})`;
      card2main.style.backgroundImage = `url(${img5})`;
      card3main.style.backgroundImage = `url(${img6})`;
    } else {
    }

    if (id == 3) {
      card1main.style.backgroundImage = `url(${img7})`;
      card2main.style.backgroundImage = `url(${img8})`;
      card3main.style.backgroundImage = `url(${img9})`;
    } else {
    }
  }

  let radio1 = useRef();
  let radio2 = useRef();
  let radio3 = useRef();

  let previousnumber: number = 0;

  function arrowSwitch(e: any) {
    let card1main: any = card1.current;
    let card2main: any = card2.current;
    let card3main: any = card3.current;

    let radio1main = radio1.current;
    let radio2main = radio2.current;
    let radio3main = radio3.current;

    let currentnumber: number = previousnumber + 1;
    let radiocheck = currentnumber;

    if (previousnumber < 3) {
      previousnumber = currentnumber;
    } else {
      radio2main.checked = true;
      radio2main.click();
      previousnumber = 0;
    }

    if (radiocheck == 1) {
      radio2main.checked = true;
      radio2main.click();
    }

    if (radiocheck == 2) {
      radio3main.checked = true;
      radio3main.click();
    }

    if (radiocheck == 3) {
      radio1main.checked = true;
      radio1main.click();
    }
  }

  let prevousloop: number = 2;

  setInterval(() => {
    if (prevousloop > 0) {
      setTimeout((i: number) => {
        console.log("this is i", prevousloop);

        if (prevousloop == 2) {
          prevousloop = 2;
        }

        arrowSwitch(radio1.current);
        return;
      }, 5000);
    }
  }, 2000);

  return (
    <>
      <div id="border-picture">
        {/* -------------------- */}
        <div id="flex-signup-1">
          <div className="card" ref={card1} id="card-1"></div>
          <div className="card 2" ref={card2} id="card-2"></div>
          <div className="card" ref={card3} id="card-3"></div>
        </div>
        {/* -------------------- */}
        <h6 id="h6">Lorem ipsum</h6>
        <p id="p">Get new fashioned clothes with 50% sale every weekend</p>
        <div className="carosell-containner">
          {/* ------------------------ */}
          <button
            className="arrows-signup"
            onClick={(e) => {
              arrowSwitch(e);
            }}
            id="decrease"
          ></button>

          <label className="control control-radio">
            <input
              type="radio"
              id="1"
              ref={radio1}
              onClick={(e) => {
                ButtonsignUp(e);
              }}
              className="img-butt-signup"
              name="imges-signup"
            />
            <div className="control_indicator"></div>
          </label>

          <label className="control control-radio">
            <input
              type="radio"
              id="2"
              ref={radio2}
              onClick={(e) => {
                ButtonsignUp(e);
              }}
              className="img-butt-signup"
              name="imges-signup"
            />
            <div className="control_indicator"></div>
          </label>

          <label className="control control-radio">
            <input
              type="radio"
              id="3"
              ref={radio3}
              onClick={(e) => {
                ButtonsignUp(e);
              }}
              className="img-butt-signup"
              name="imges-signup"
            />
            <div className="control_indicator"></div>
          </label>

          <button
            className="arrows-signup"
            onClick={(e) => {
              arrowSwitch(e);
            }}
            id="inecrease"
          ></button>
        </div>
      </div>
      {/* --------------------------------- */}
      <div className="signup-container">
        <div className="container-signup-left t">
          <div>
            <Logo />
            <h6 id="h62">Sign Up</h6>
            <h6 id="small">Welcome, please enter your details</h6>
          </div>
          <span id="span">
            <h6 className="labels-signup pad">First Name</h6>
            <input
              type="text"
              className="pad pad-input"
              placeholder="Enter your first name"
              name=""
              id="1"
            />
            <h6 className="labels-signup pad">Last Name</h6>
            <input
              type="text"
              className="pad pad-input"
              placeholder="Enter your last name"
              name=""
              id="2"
            />
            <h6 className="labels-signup pad">Email</h6>
            <input
              type="text"
              className="pad pad-input"
              placeholder="Enter your email"
              name=""
              id=""
            />
            <h6 className="labels-signup pad">Password</h6>
            <input
              type="text"
              className="pad pad-input"
              placeholder="Enter your password"
              name=""
              id="3"
            />
          </span>
          {/* --------------------- */}
          <span className="buttons-and-errordiv-signup">
            <div className="error-signup"></div>
            <button className="signup">Sign Up</button>
            <br />
            <button className="google-signup">
              <span id="Google-icon-Signup">
                <Google />
              </span>{" "}
              <p> Sign Up with Google</p>
            </button>
            <p className="already">
              Already Signed Up? <Link to="/user/login">Click Here!</Link>
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
