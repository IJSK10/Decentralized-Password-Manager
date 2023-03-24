import React, { useRef } from "react";

function Form({store})
{

    const pass = useRef();
    const username = useRef();

    function xyz(){
        store(username.current.value,pass.current.value)
    }
    return(
        <div style={{position:'absolute',top:'35%',left:'40%',border:'inset',width:350,height:250,padding:'20px',color:'white',backgroundColor:'#865DFF'}}>
        <h4 style={{position:'relative',left:'30%',fontFamily:'sans-serif',fontStyle:'italic',fontWeight:'bolder'}}>Password</h4><br/>
            <label>UserName&nbsp;&nbsp;&nbsp;</label>
            <input ref={username} type="text" id="Username" placeholder="Username" /><br /><br/>
            <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input ref={pass} type="text" id="Password"  placeholder="Password"/><br /><br/>
            <button onClick={xyz} style={{position:'relative',left:'35%'}}>Submit</button>
        </div>
    );
}

export default Form;