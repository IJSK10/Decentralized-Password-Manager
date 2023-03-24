import React,{ useState } from "react";
import Generate from "./Generate"
import { useCookies } from "react-cookie";
import { Buffer } from "buffer";
import { sha256 } from "js-sha256";
import { encrypt, decrypt, PrivateKey } from 'eciesjs';
window.Buffer = window.Buffer || Buffer;
function Key()
{
    const [cookies, setCookie] = useCookies(['user']);
    const [bool,setBool]=useState(false);
    const secp256k1=require('secp256k1');
    const [kl,setKey]=useState(
        {
            prkey:"",
            pukey:""
        }
    );
    function gen(PassPhrase)
    {
        let privkeyhex=sha256(PassPhrase);
        const privkey=new Uint8Array(Buffer.from(privkeyhex, 'hex'));
        const pubkey = secp256k1.publicKeyCreate(privkey);
        let pubkeyhex = Buffer.from(pubkey).toString('hex');
        setCookie('Prkey', privkeyhex, { path: '/' });
        setCookie('Pubkey', pubkeyhex, { path: '/' })
        setKey({prkey:privkeyhex, pukey: pubkeyhex});
        //console.log(decrypt(msg, encrypt(hex, data)).toString());
        setBool(true);
    }
    return(
        <div>
            { bool ? <div style={{position:'absolute',left:'25%',top:'35%',width:750,height:175,border:'groove',padding:'30px',backgroundColor:'#865DFF'}}>
            <p style={{textAlign:'center',fontFamily:'cursive',fontSize:'bolder',fontWeight:'bolder',fontStyle:'italic',color:'#F9F9F9'}}>Keys are:</p>
            <p style={{color:"#FCFFE7"}}>Private Key:&nbsp;&nbsp;{kl.prkey}</p>
            <p style={{color:"#FCFFE7"}}>Public Key:&nbsp;&nbsp;{kl.pukey}</p>
            </div> : <Generate gen={gen} />}
        </div>
    );
}
export default Key;