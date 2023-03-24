import React from "react";
function intro()
{
    return(
        <div>
        <div  style={{position:'absolute',top:'20%',left:'8%',border:'groove',width:550,height:700,padding:'30px',backgroundColor:'#865DFF',color:'white'}}>
        <h1 style={{position:'relative',left:'10%',fontStyle:'italic',fontFamily:'sans-serif',fontWeight:'bolder'}}>ABOUT</h1><br/>
           A decentralized password manager is a type of password manager that stores your login credentials in a decentralized and secure manner, without relying on a central server or database. Instead of a central authority managing and controlling access to your passwords, a decentralized password manager uses encryption and blockchain technology to securely store and manage your passwords.<br/><br/>

In a decentralized password manager, your passwords are encrypted and stored in a distributed network of nodes, which are all connected through a blockchain. This means that your passwords are not stored on a single server or controlled by a central authority, but rather are distributed across a network of nodes, making it difficult for hackers to access your sensitive information.<br/><br/>

Decentralized password managers also typically use a private key encryption scheme, which means that only you have access to your passwords. This helps to ensure that even if the network is compromised, your passwords remain secure.<br/><br/>

Overall, a decentralized password manager provides a more secure and private way to manage your passwords, as it eliminates the need to rely on a centralized authority to store and manage your sensitive information.<br/>
        </div>
        <div style={{position:'absolute',top:'20%',left:'55%',border:'groove',width:500,height:700,padding:'30px',backgroundColor:'#865DFF',color:'white'}}>
        <h1 style={{position:'relative',left:'10%',fontStyle:'italic',fontFamily:'sans-serif',fontWeight:'bolder'}}>APPLICATIONS</h1><br/>
        Increased security: Decentralized password managers use encryption and blockchain technology to secure your passwords. This means that your passwords are less vulnerable to hacking or theft, as they are not stored in a single central location.<br/><br/>

Increased privacy: Decentralized password managers allow you to maintain control over your passwords, without relying on a third-party provider to manage them. This means that your sensitive information is not shared with any third-party provider, thereby increasing your privacy and reducing the risk of data breaches.<br/><br/>

Convenience: Decentralized password managers provide a single, centralized location for all of your passwords. This eliminates the need to remember multiple passwords for different accounts, thereby making it more convenient to manage your passwords.<br/><br/>

Compatibility: Decentralized password managers are often compatible with a wide range of devices and platforms, including desktop computers, laptops, smartphones, and tablets. This makes it easier to access your passwords from anywhere, at any time.<br/><br/>

Collaboration: Decentralized password managers allow you to share passwords with other users securely, without compromising the security of your passwords. This makes it easier to collaborate with others on shared accounts or projects.<br/>
        </div>
        </div>
    );
}
export default intro;