import { useEffect, useState } from "react"
import img11 from '../assets/images/homepage-before-one.png'
import img12 from '../assets/images/img12-homepage1.jpg'
import img13 from '../assets/images/img13-homepage1.jpg'
import img14 from '../assets/images/backgroundimg-homepage1-14.jpg'



const Top = ()=>{

    const [button1color,updatdebutton1color] = useState<string>('#FFBF85')
    const [button2color,updatdebutton2color] = useState<string>('#D1D1D1')
    const [button3color,updatdebutton3color] = useState<string>('#D1D1D1')
    const [button4color,updatdebutton4color] = useState<string>('#D1D1D1')
    // -------------------
    const [loop1,updateloop1] = useState<number>(1)
    let [backgroundimg1,updatebackgroundimg1]= useState<any>(img11)
    let [intervalloop1,updateintervalloop1] = useState<number>(0)
    

    function updateobject(ids:Array<number>){
       
        ids.map((item)=>{
            if(item === 11){
                updatdebutton1color('#D1D1D1')
                return
            }
            if(item === 12){
                updatdebutton2color('#D1D1D1')
                return
            }
            if(item === 13){
                updatdebutton3color('#D1D1D1')
                return
            }
            if(item === 14){
                updatdebutton4color('#D1D1D1')
                return
            }
        })
        
    }

    function buttons(e:any){
    const target:number = e
    const numberarray:(number)[] = [11,12,13,14]

    let notidnumbers = numberarray.filter((item)=>{
        return item !== target
    })

    let idnumbers = numberarray.filter((item)=>{
        return item === target
    })
    let tempnumber = Math.abs(target - 10)
    console.log('this is temp number',tempnumber)

    updateobject(notidnumbers)

    idnumbers.forEach((item)=>{
        if(item === 11){
            updatdebutton1color('#FFBF85')
            updatebackgroundimg1(img11)
        }
        if(item === 12){
            updatdebutton2color('#FFBF85')
            updatebackgroundimg1(img12)
        }
        if(item === 13){
            updatdebutton3color('#FFBF85')
            updatebackgroundimg1(img13)
        }
        if(item === 14){
            updatdebutton4color('#FFBF85')
            updatebackgroundimg1(img14)
        }
    })

    }

    function arrows1(crement:string){
        if(crement === 'increment' && loop1 < 4){
            const number1 = loop1 +1
           updateloop1(number1)
           if(loop1 == 4){
            updateloop1(1)
           }
        }

        if(crement === 'decrement' && loop1 > 1){
            const number1 = loop1 - 1
            updateloop1(number1)
            if(loop1 == 1){
                updateloop1(4)
               }
        }
        const number = loop1 + 10
        console.log(loop1,'loop1',number,'number')
        buttons(number)
        
       
    }



    const [tempvar,updatetempvar] = useState('increment')

    function Interval(){
        setTimeout(()=>{
           updateintervalloop1(intervalloop1+1)
           if(loop1 == 4){
            updatetempvar('decrement')
           }
           if(loop1 == 1){
            updatetempvar('increment')
           }
           arrows1(tempvar)
           console.log('loop',intervalloop1)
         },2000)
    }
     useEffect(()=>Interval(),[intervalloop1])


    return(
        <>
        <div style={{backgroundImage: `url(${backgroundimg1})`}} className="big-container-one">
           <h1 id="topHompageone">Build your dream decoration</h1>
           <h6 id="topHompagetwo">Lorem ipsum is a placehloder that is used by developers</h6>
           {/* ------------------ */}
           <div className="flex-2-home">
            <button className="loop" onClick={()=>{arrows1('decrement')}}></button>
            <button className="loop" onClick={()=>{arrows1('increment')}}></button>
           </div>
           <div className="button-flex-div1">
            <button id="11" style={{width:'1.2rem',height:'1.2rem',border:'0',borderRadius:'50%',cursor:'pointer',backgroundColor:button1color}} onClick={()=>{buttons(11)}}></button>

            <button id="12" style={{width:'1.2rem',height:'1.2rem',border:'0',borderRadius:'50%',cursor:'pointer',backgroundColor:button2color}} onClick={()=>{buttons(12)}}></button>

            <button id="13" style={{width:'1.2rem',height:'1.2rem',border:'0',borderRadius:'50%',cursor:'pointer',backgroundColor:button3color}} onClick={()=>{buttons(13)}}></button>

            <button id="14" style={{width:'1.2rem',height:'1.2rem',border:'0',borderRadius:'50%',cursor:'pointer',backgroundColor:button4color}} onClick={()=>{buttons(14)}}></button>
           </div>
        </div>
        </>
    )
}








const Homepage = () => {


    return ( 
        <>
       <Top/>
        </>
     );
}
 
export default Homepage;

