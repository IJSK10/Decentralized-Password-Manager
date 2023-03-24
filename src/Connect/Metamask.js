import React from "react";
import meta from "./metamask.png"
function ConnectMeta({connect})
{
    return(
        <div style={{position:'absolute',top:'35%',left:'40%',border:'inset',width:300,height:225,padding:'30px'}}>
            <p style={{color:'orange',fontWeight:'bolder',position:'relative',left:'8%',fontSize:'larger'}}>Connecting Metamask</p>
            <img src={meta} width='100' height='100' style={{position:'relative',left:'60px'}}/><br/>
            <button className="con" onClick={connect} style={{backgroundColor:"orange",color:'white'}}>Click to connect to metamask</button>
        </div>

    );
}

export default ConnectMeta;