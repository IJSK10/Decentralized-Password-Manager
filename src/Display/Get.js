import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { decrypt } from 'eciesjs';
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;
function Get({contract})
{
    const [cookies, setCookie] = useCookies(['user']);
    const [data,setData]= useState
    (

        {
            Username:"",
            Password:""
        }
    )
    const mainContract = contract.contract;
    async function details()
    {
       
        const username=await mainContract.getname();
        const password=await mainContract.getpass();
        console.log("Name:"+username);
        console.log("Password:"+password);
        const privkey=cookies.Prkey;
        const name1=new Uint8Array(Buffer.from(username, 'hex'));
        const pass1=new Uint8Array(Buffer.from(password, 'hex'));
        const abc=((decrypt(privkey,name1)).toString());
        const def=((decrypt(privkey,pass1)).toString());
        setData({Username:abc,Password:def});
    }
    useEffect(()=>{details()},[])

    return(
        <div style={{position:'absolute',top:'35%',left:'40%',border:'inset',width:300,height:175,padding:'30px',backgroundColor:'#865DFF',color:'white'}}>
            <p style={{fontWeight:'bolder',position:'relative',left:'10%',fontSize:'larger',fontFamily:'monospace'}}>Your Credentials</p>
            <p>Username:&nbsp;&nbsp;&nbsp;{data.Username}</p>
            <p>Password:&nbsp;&nbsp;&nbsp;{data.Password}</p>
        </div>
    )
}
export default Get;