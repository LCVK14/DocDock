import { useEffect, useState } from "react"
import { veryGood}  from "./fetch/CallUseLess.js";

export const UsePi=()=>{
    const [printdiv,setDiv]=useState([]);
    useEffect(() => {

        // Disable text selection for elements
        // with class "no-select"
        const noSelectElements =
            document.querySelectorAll(".no-no");
        noSelectElements.forEach((element) => {
            element.style.webkitUserSelect = "none";
            element.style.mozUserSelect = "none";
            element.style.msUserSelect = "none";
            element.style.userSelect = "none";
        });
    }, []);
    function click(){
        setPi(pi+1);
        async function callUse() {
            console.log(pi);
            const data=await veryGood(pi);
            console.log(data.num);
            setDiv(data.num);
        }
        callUse();
    }
    const [pi,setPi]=useState(1);
    return(
        <div>
            <button onClick={()=>click()}>Click to get Pi</button>
            <div className="no-no">{printdiv.map((st,index)=><div style={{fontSize:`${index*2}px`}}>{st}</div>)}</div>
        </div>
    )
}