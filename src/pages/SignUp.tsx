import { Link } from "react-router-dom";
import { Google, Logo } from "../components/icons";
import { useEffect, useRef, useState } from "react";
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
  const card1: any = useRef();
  const card2: any = useRef();
  const card3: any = useRef();
  let radio1: any = useRef();
  let radio2: any = useRef();
  let radio3: any = useRef();
  let previousnumber: number = 0;
  let loop = 1;
  const [radio1n2, updateradio1] = useState<any>(0);
  const [radio2n2, updateradio2] = useState<any>(0);
  const [radio3n2, updateradio3] = useState<any>(0);

  useEffect(() => {
    if (radio1.current) {
      updateradio1(radio1.current);
    }
    if (radio2.current) {
      updateradio2(radio2.current);
    }
    if (radio3.current) {
      updateradio3(radio3.current);
    }
  }, []);

  function ButtonsignUp(e: any) {
    let id: number = e.target.id;

    let card1main: any = card1.current;
    let card2main: any = card2.current;
    let card3main: any = card3.current;

    if (id == 1) {
      card1main.style.backgroundImage = `url(${img1})`;
      card2main.style.backgroundImage = `url(${img2})`;
      card3main.style.backgroundImage = `url(${img3})`;
      return (loop = 2);
    } else {
    }

    if (id == 2) {
      card1main.style.backgroundImage = `url(${img4})`;
      card2main.style.backgroundImage = `url(${img5})`;
      card3main.style.backgroundImage = `url(${img6})`;
      return (loop = 3);
    } else {
    }

    if (id == 3) {
      card1main.style.backgroundImage = `url(${img7})`;
      card2main.style.backgroundImage = `url(${img8})`;
      card3main.style.backgroundImage = `url(${img9})`;
      return (loop = 1);
    } else {
    }
  }

  function arrowSwitch(type: string) {
    let card1main: any = card1.current;
    let card2main: any = card2.current;
    let card3main: any = card3.current;

    let radio1main = radio1n2;
    let radio2main = radio2n2;
    let radio3main = radio3n2;

    if (radio1main && radio2main && radio3main !== 0) {
      if (loop < 4) {
        if (loop === 1) {
          setTimeout(() => {
            card1main.style.backgroundImage = `url("${img1}")`;
            card2main.style.backgroundImage = `url("${img2}")`;
            card3main.style.backgroundImage = `url("${img3}")`;
            radio1main.checked = true;

            if (type == "increase") {
              return (loop = 2);
            } else {
              return (loop = 3);
            }
          }, 1000);
        }

        if (loop === 2) {
          setTimeout(() => {
            card1main.style.backgroundImage = `url("${img4}")`;
            card2main.style.backgroundImage = `url("${img5}")`;
            card3main.style.backgroundImage = `url("${img6}")`;
            radio2main.checked = true;

            if (type === "increase") {
              return (loop = 3);
            }
            if (type === "decrease") {
              return (loop = 1);
            }
          }, 1000);
        }

        if (loop === 3) {
          setTimeout(() => {
            card1main.style.backgroundImage = `url("${img7}")`;
            card2main.style.backgroundImage = `url("${img8}")`;
            card3main.style.backgroundImage = `url("${img9}")`;
            radio3main.checked = true;

            if (type === "increase") {
              return (loop = 1);
            }
            if (type === "decrease") {
              return (loop = 2);
            }
          }, 1000);
        }
      }
    }
  }

  setInterval(() => {
    console.log("i ran");

    arrowSwitch("increase");
  }, 5000);

  const Right = () => {
    return (
      <>
        <div className="rightcontainer">
          <span id="span1">
            <div className="card" ref={card1} id="card-1"></div>
            <div className="card 2" ref={card2} id="card-2"></div>
            <div className="card" ref={card3} id="card-3"></div>
          </span>
          <h6 id="h61">Lorem ipsum</h6>
          <p id="p1">Get new fashioned clothes with 50% sale every weekend</p>
          <span id="span2">
            <button
              className="arrows-signup2"
              onClick={(e) => {
                arrowSwitch("decrease");
              }}
              id="decrease"
            ></button>

            <label className="b-contain">
              <input
                name="radio"
                className="none"
                id="1"
                type="radio"
                ref={radio1}
                onClick={(e) => {
                  ButtonsignUp(e);
                }}
              />
              <div className="b-input"></div>
            </label>
            <label className="b-contain">
              <input
                name="radio"
                className="none"
                id="2"
                type="radio"
                ref={radio2}
                onClick={(e) => {
                  ButtonsignUp(e);
                }}
              />
              <div className="b-input"></div>
            </label>
            <label className="b-contain">
              <input
                name="radio"
                className="none"
                id="3"
                type="radio"
                ref={radio3}
                onClick={(e) => {
                  ButtonsignUp(e);
                }}
              />
              <div className="b-input"></div>
            </label>

            <button
              className="arrows-signup2 two"
              onClick={() => {
                arrowSwitch("increase");
              }}
              id="inecrease"
            ></button>
          </span>
        </div>
      </>
    );
  };

  const Left = () => {
    return (
      <>
        <div className="left">
          <div className="contanierleft">
            <span className="span9">
              <Logo />
            </span>
            <h6 id="signUp">Sign up</h6>
            <h6 id="sign-mini">Welcome, please enter your details</h6>
            {/*  */}
            <h6 className="headers-sign">First name</h6>
            <input
              type="text"
              name=""
              placeholder="Enter your firstname"
              id=""
              className="input-sign"
            />
            <h6 className="headers-sign">Last name</h6>
            <input
              type="text"
              placeholder="Enter your lastname"
              name=""
              id=""
              className="input-sign"
            />
            <h6 className="headers-sign">Email</h6>
            <input
              type="text"
              name=""
              placeholder="Enter your email"
              id=""
              className="input-sign"
            />
            <h6 className="headers-sign">Password</h6>
            <input
              type="text"
              name=""
              placeholder="Enter your password"
              id=""
              className="input-sign"
            />
            <button className="signup-multicolor">Sign up</button>
            <button className="signup-Google">
              <span id="signupgoogle-1">
                <div>
                  <Google />
                </div>{" "}
                Sign up with Google
              </span>
            </button>
            <p id="bottom-par">
              Already have signed up?{" "}
              <span id="bottom-span">
                <Link to="">Click here </Link>
              </span>
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Left />
      <Right />
    </>
  );
};

export default SignUpPage;
