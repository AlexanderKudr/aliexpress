import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [scroll, setScroll] = useState(0)
  const yourfunction = () => {
    const removeOnScroll = window.scrollY > 200;
    //stuff with classes
   
  };
  useEffect(() => {
    window.addEventListener("scroll", yourfunction);
    console.log(window.scrollY)
    return () => {
      window.removeEventListener("scroll", yourfunction);
    };
  }, []);

  return <div className="App">dev test again</div>;
}

export default App;
