import { useState } from "react"


const Homepage = () => {
    const [button1color,updatdebutton1color] = useState<string>('yellow')
    const [button2color,updatdebutton2color] = useState<string>('grey')
    const [button3color,updatdebutton3color] = useState<string>('grey')
    const [button4color,updatdebutton4color] = useState<string>('grey')
    // -------------------
    const [loop1,updateloop1] = useState<number>(1)
    

    function updateobject(ids:Array<number>){
       
        ids.map((item)=>{
            if(item === 11){
                updatdebutton1color('grey')
                return
            }
            if(item === 12){
                updatdebutton2color('grey')
                return
            }
            if(item === 13){
                updatdebutton3color('grey')
                return
            }
            if(item === 14){
                updatdebutton4color('grey')
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

    updateobject(notidnumbers)

    idnumbers.forEach((item)=>{
        if(item === 11){
            updatdebutton1color('yellow')
        }
        if(item === 12){
            updatdebutton2color('yellow')
        }
        if(item === 13){
            updatdebutton3color('yellow')
        }
        if(item === 14){
            updatdebutton4color('yellow')
        }
    })

    }

    function arrows1(crement:string){
        if(crement === 'increment' && loop1 < 4){
            const number1 = loop1 +1
           updateloop1(number1)
           
        }

        if(crement === 'decrement' && loop1 > 1){
            const number1 = loop1 - 1
            updateloop1(number1)
        }
        let number = loop1 + 10
        console.log(loop1,'loop1',number,'number')
        buttons(number)
        
       
    }

const Top = ()=>{
    return(
        <>
        <div className="big-container-one">
           <h1 id="topHompageone">Build your dream decoration</h1>
           <h6 id="topHompagetwo">Lorem ipsum is a placehloder that is used by developers</h6>
           {/* ------------------ */}
           <div className="flex-2-home">
            <button className="loop" onClick={()=>{arrows1('decrement')}}></button>
            <button className="loop" onClick={()=>{arrows1('increment')}}></button>
           </div>
           <div className="button-flex-div1">
            <button id="11" style={{width:'1.2rem',height:'1.2rem',border:'1px solid black',borderRadius:'50%',cursor:'pointer',backgroundColor:button1color}} onClick={()=>{buttons(11)}}></button>

            <button id="12" style={{width:'1.2rem',height:'1.2rem',border:'1px solid black',borderRadius:'50%',cursor:'pointer',backgroundColor:button2color}} onClick={()=>{buttons(12)}}></button>

            <button id="13" style={{width:'1.2rem',height:'1.2rem',border:'1px solid black',borderRadius:'50%',cursor:'pointer',backgroundColor:button3color}} onClick={()=>{buttons(13)}}></button>

            <button id="14" style={{width:'1.2rem',height:'1.2rem',border:'1px solid black',borderRadius:'50%',cursor:'pointer',backgroundColor:button4color}} onClick={()=>{buttons(14)}}></button>
           </div>
        </div>
        </>
    )
}


    return ( 
        <>
       <Top/>
        </>
     );
}
 
export default Homepage;

