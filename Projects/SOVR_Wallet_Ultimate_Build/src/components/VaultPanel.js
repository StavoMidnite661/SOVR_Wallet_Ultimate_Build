import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const VaultPanel = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);
  const contractAddress = "0x0000000000000000000000000000000000000000"; // replace with real
  const ABI = []; // replace with actual Vault ABI

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        const contract = new web3.eth.Contract(ABI, contractAddress);
        const result = await contract.methods.getBalance(accounts[0]).call();
        setBalance(result);
      }
    };
    init();
  }, []);

  return (
    <div>
      <h2>Vault Access</h2>
      <p>Wallet: {account}</p>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default VaultPanel;