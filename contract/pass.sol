pragma solidity ^0.8.19;

contract Password{
    string public name;
    string public password;
    function set (string memory nam,string memory pass) public
    {
        name=nam;
        password=pass;
        emit Save(name,password);
    }

    event Save(string nam,string pass);

    function getdet() view public returns(string memory ,string memory)
    {
        return (name,password) ;
    }
}