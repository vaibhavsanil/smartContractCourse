import Web3 from 'web3';

window.ethereum.request({ method: 'eth_requestAccounts' });

const web3 = new Web3(window.ethereum);

export default web3;
// .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });
