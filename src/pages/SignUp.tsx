import { Link } from "react-router-dom";
import { Icons } from "../components/icons";
import { useRef } from "react";
import img1 from '../assets/images/signup-pic-1-2.jpg'
import img2 from '../assets/images/sigup-picture-1-1.jpg'
import img3 from '../assets/images/signup-pic-1-3.jpg'
import img4 from '../assets/images/signup-pic-2-1.jpg'
import img5 from '../assets/images/signup-pic-2-2.jpg'
import img6 from '../assets/images/signup-pic-2-3.jpg'

const SignUpPage = () => {
//-----------------------------

    const card1:any = useRef()
    const card2:any = useRef()
    const card3:any = useRef()
    
    function ButtonsignUp(e:any){

        console.log(e.target,'here is e target')

        
        let id:number = e.target.id

        let card1main:any = card1.current
        let card2main:any = card2.current
        let card3main:any = card3.current

        console.log(card1main,'card 1 check')

       if(id == 1){
        card1main.style.backgroundImage = `url(${img1})`;
        card2main.style.backgroundImage = `url(${img2})`;
        card3main.style.backgroundImage = `url(${img3})`;
       }else{

       }

       if(id == 2){
        card1main.style.backgroundImage = `url(${img4})`;
        card2main.style.backgroundImage = `url(${img5})`;
        card3main.style.backgroundImage = `url(${img6})`;
       }else{

       }

       if(id == 3){
        console.log(`it works case 3 ${card1main}`)
       }else{

       }
        

    }








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
            <p id="p">Get new fashioned clothes with 50% sale 
            every weekend</p>
            <div className="carosell-containner">
                {/* ------------------------ */}
                <button className="arrows-signup"></button>
                       
                <label className="control control-radio">
                        <input type="radio" id="1" onClick={(e)=>{ButtonsignUp(e)}} className="img-butt-signup" name="imges-signup" />
                    <div className="control_indicator"></div>
                </label> 

                <label className="control control-radio">
                        <input type="radio" id="2" onClick={(e)=>{ButtonsignUp(e)}} className="img-butt-signup" name="imges-signup" />
                    <div className="control_indicator"></div>
                </label> 

                <label className="control control-radio">
                        <input type="radio" id="3" onClick={(e)=>{ButtonsignUp(e)}} className="img-butt-signup" name="imges-signup" />
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
                <input type="text" className="pad pad-input" placeholder="Enter your first name" name="" id="1" />
                <h6 className="labels-signup pad">Last Name</h6>
                <input type="text" className="pad pad-input" placeholder="Enter your last name" name="" id="2" />
                <h6 className="labels-signup pad">Email</h6>
                <input type="text" className="pad pad-input" placeholder="Enter your email" name="" id="" />
                <h6 className="labels-signup pad">Password</h6>
                <input type="text" className="pad pad-input" placeholder="Enter your password" name="" id="3" />
                </span>
                {/* --------------------- */}
                <span className="buttons-and-errordiv-signup">
                    <div className="error-signup"></div>
                    <button className="signup">Sign Up</button>
                    <br />
                    <button className="google-signup"><span id="Google-icon-Signup"><Icons.Google/></span> <p> Sign Up with Google</p></button>
                    <p className="already">Already Signed Up? <Link to='/user/login'>Click Here!</Link></p>
                </span>
            </div>
        </div>
        </>
     );
}
 
export default SignUpPage;


