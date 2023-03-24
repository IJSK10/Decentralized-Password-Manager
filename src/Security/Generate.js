import React,{useRef} from "react";

function Generate({gen})
{
    const phrase=useRef();
    function abc()
    {
        gen(phrase.current.value);
    }
    return(
        <div style={{position:'absolute',left:'35%',top:'35%',width:400,height:200,border:'groove',padding:'30px',backgroundColor:'#865DFF'}}>
            <p style={{textAlign:'center',fontSize: 'larger',fontFamily: 'monospace',fontWeight: 'bolder',fontStyle: 'italic',color:'#FCFFE7'}}>Private and Public Key Generation</p>
            <label style={{color:"#FCFFE7"}}>PassPhrase:   </label>
            <input ref={phrase} type="text" id="Passphrase" placeholder="Passphrase" style={{position:'relative',left:'50px'}}/><br/>
            <button onClick={abc} style={{position:'absolute',left:'38%',top:'80%'}}>Submit</button>
        </div>
    );
}
export default Generate;