import { Icons } from "../components/icons";

const SignUpPage = () => {
    return ( 
        <>
        <div id="border-picture">
             {/* -------------------- */}
             <div id="flex-signup-1">
            <div className="card"></div>
            <div className="card 2"></div>
            <div className="card"></div>
            </div>
            {/* -------------------- */}
            <h6 id="h6">Lorem ipsum</h6>
            <p id="p">Get new fashioned clothes with 50% sale 
            every weekend</p>
            <div className="carosell-containner">
                {/* ------------------------ */}
                <button className="arrows-signup"></button>
                       
                <label className="control control-radio">
                        <input type="radio" className="img-butt-signup" name="imges-signup" />
                    <div className="control_indicator"></div>
                </label> 

                <label className="control control-radio">
                        <input type="radio" className="img-butt-signup" name="imges-signup" />
                    <div className="control_indicator"></div>
                </label> 

                <label className="control control-radio">
                        <input type="radio" className="img-butt-signup" name="imges-signup" />
                    <div className="control_indicator"></div>
                </label> 

            <button className="arrows-signup"></button>

            </div>
        </div>
        {/* --------------------------------- */}
        <div className="signup-container">
            <div className="container-signup-left">
                <div>
                <Icons.Logo/>
                <h6 id="h62">Sign Up</h6>
                <h6 id="small">Welcome, please enter your details</h6>
                </div>
                <span id="span">
                <h6 className="labels-signup pad">First Name</h6>
                <input type="text" className="pad pad-input" placeholder="Enter your first name" name="" id="" />
                <h6 className="labels-signup pad">Last Name</h6>
                <input type="text" className="pad pad-input" placeholder="Enter your last name" name="" id="" />
                <h6 className="labels-signup pad">Email</h6>
                <input type="text" className="pad pad-input" placeholder="Enter your email" name="" id="" />
                <h6 className="labels-signup pad">Password</h6>
                <input type="text" className="pad pad-input" placeholder="Enter your password" name="" id="" />
                </span>
            </div>
        </div>
        </>
     );
}
 
export default SignUpPage;


