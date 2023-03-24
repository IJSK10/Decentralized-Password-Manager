import React, { useState } from "react";
import Form from "./Form";
import Success from "./Success"
import { useCookies } from "react-cookie";
import { encrypt } from "eciesjs";
import { Buffer } from "buffer";
function App2({contract})
{
    const [cookies, setCookie] = useCookies(['user']);
    const [bool,setBool]=useState(false);
    const [data, setData]=useState(
        {
            name:"",
            password:""
        }
    );
    const address=contract.signer.getAddress();
    const mainContract = contract.contract;
    async function store(Username,Password)
    {
        const n=Buffer.from(Username,"utf-8");
        const p=Buffer.from(Password,"utf-8");
        const pubkey=cookies.Pubkey;
        const name = encrypt(pubkey,n);
        const pass = encrypt(pubkey,p);
        const abc=Buffer.from(name).toString('hex');
        const def=Buffer.from(pass).toString('hex');
        mainContract.set(abc,def);
        setBool(true);
        setData(
            {
                name:Username,
                password:Password
            }
        )
        
    }
    return  (
        <div>
            { bool ? <Success data={data} /> : <Form store={store} address={address} />}
        </div>
    );
}
export default App2;