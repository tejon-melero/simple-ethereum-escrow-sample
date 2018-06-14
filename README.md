# simple-ethereum-escrow-sample
## Escrow contract for payments between buyers  and sellers <br>

An escrow is a service for a buyer to be confident that he does not have to release the funds to the seller unless he is happy with the service provided

Usually a third party is employed to control the funds and acts as a trusted party that charges fees for their service.

An ethereum smart contract can be the trusted party for this kind of transaction because smart contracts by design operate in a trust-les smanner.

This escrow smart contract does the following things:

* A smart contract gets created with the address of the smart contract creator, the address of the seller and the address of the buyer.
* The buyer can deposit a payment into the smart contract
* The seller can call the accept() function on the smart contract to indicate that he is okay with the payment
* The buyer can call the accept() function to indicate that he is okay with the payment
* The buyer can call the cancel() function to indicate that he disagrees with the service
* The seller can call the cancel() function to indicate that he disagrees with the service
* only the us (the escrow service) can make the payment from the escrow contract to the seller



# Installation

## run a local development blockchain and compile the contracts:

`npm install -g truffle`
` truffle develop` --> this will also run a local test blockchain on your machine on port 9545

within the development console run
`compile`
'migrate'

## Install Metamask and connect it to your locally running blockchain.

Metamask https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn
after setting up metamask connect it to your local blockchain:

the command truffle develop outputed some private keys created on your local blockchain.
In the metamask extension click on import account and type in one of the private keys from the truffle develop command


## run the dapp frontend:
 // Serves the front-end on http://localhost:3000
'npm run start'


useful sources and links for this example.:

https://blog.localethereum.com/how-our-escrow-smart-contract-works/
https://etherscan.io/address/0x09678741bd50c3e74301f38fbd0136307099ae5d#code
https://medium.com/@pranav.89/smart-contracting-simplified-escrow-in-solidity-ethereum-b19761e8fe74
https://github.com/ConsenSys/smart-contract-best-practices
