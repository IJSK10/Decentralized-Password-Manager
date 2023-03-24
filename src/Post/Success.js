import React from "react";

function Success({data})
{
    return(
        <div style={{position:'absolute',top:'35%',left:'35%',border:'inset',width:400,height:200,padding:'20px',color:'white',backgroundColor:'#865DFF'}}>
        <h4 style={{position:'relative',left:'20%',fontFamily:'sans-serif',fontStyle:'italic',fontWeight:'bolder'}}>Your Credentials</h4><br/>
            <p>Username:&nbsp;{data.name}</p>
            <p>Password:&nbsp;&nbsp;{data.password}</p>
        </div>
    );
}

export default Success;