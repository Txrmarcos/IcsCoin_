// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


contract ICS {

    string private _name;
    string private _symbol;
    uint256 private _totalSupply;

    constructor(string memory nome, string memory simbolo, uint256 amount){
        _name = nome;
        _symbol = simbolo;
        mint(msg.sender,amount);

    }

    mapping(address => uint256) balance;

    function name() public view  returns (string memory){
        return _name;
    }

    function symbol() public view  returns (string memory){
        return _symbol;
    }

    function decimals() public view  returns(uint8){
        return 1;
    }

    function totalSupply() public view  returns (uint256){
        return _totalSupply;

    }

    function balanceOf(address _owner) public view  returns (uint256 ){
        return balance[_owner];
    }

    function transfer(address _to, uint256 _value) public  returns (bool){
        transferFrom(msg.sender, _to, _value);
        return true;

    }
        function transferFrom(address _from, address _to, uint256 _value) public  returns (bool){
        require(balance[_from]>= _value);
        unchecked{balance[_from] -= _value;}
        balance[_to] += _value;

        emit Transfer(_from, _to,_value);

        }


    function mint(address owner, uint256 amount)internal  {
        _totalSupply += amount;
        balance[owner] = amount;
        emit Transfer(msg.sender, owner, amount);

    }
    function approve(address _spender, uint256 _value) public  returns (bool){

        return true;
    }


    function allowance(address _owner, address _spender) public view  returns (uint256 remaining){
        return 0;
    }



    event Transfer(address indexed _from, address indexed _to, uint256 _value);


    
}