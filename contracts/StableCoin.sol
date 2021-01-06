pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// for test, we create stable coin for ourself.
contract StableCoin is ERC20, Ownable {
    using SafeMath for uint256;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _totalSupply
    ) public ERC20(_name, _symbol) {
        transferOwnership(msg.sender);
        _mint(msg.sender, _totalSupply);
    }
}
