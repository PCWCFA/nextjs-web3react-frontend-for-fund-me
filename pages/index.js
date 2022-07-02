import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
// See the web3-react github for the different connectors
import { abi, contractAddress } from "./constants.js";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

const injected = new InjectedConnector();

export default function Home() {
  // already wrapped in app.js, so just connect here.
  const { active, activate, library: provider } = useWeb3React();
  const [hasMetamask, setHasMetamask] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum != "undefined") {
      setHasMetamask(true);
    }
  });

  async function connect() {
    console.log("connect() called");
    if (typeof window.ethereum != "undefined") {
      try {
        await activate(injected);
        console.log("injected\n===================", injected);
        setHasMetamask(true);
      } catch (e) {
        console.log(e);
      }
    }
  }

  // fund function
  // For this demo, I will simply fund a fixed amount behind the scene.
  async function fund(/*ethAmount*/) {
    if (active) {
      console.log("provider\n----------------", provider);
      const ethAmount = "5";
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contract.fund({
          value: ethers.utils.parseEther(ethAmount),
        });
        await listenForTransactionMine(transactionResponse, provider);
        console.log("Done!");
        document.getElementById("display-area").innerHTML = "Done!";
      } catch (error) {
        console.log(error);
      }
    }
  }

  function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}...`);
    return new Promise((resolve, reject) => {
      provider.once(transactionResponse.hash, (transactionReceipt) => {
        console.log(
          `Completed with ${transactionReceipt.confirmations} confirmations`
        );
        resolve();
      });
    });
  }

  return (
    <div className={styles.container}>
      {hasMetamask ? (
        active ? (
          "Connected!"
        ) : (
          <>
            Ethers Web3React Frontend
            <button onClick={() => connect()}>Connect</button>
          </>
        )
      ) : (
        "Please install Metamask."
      )}
      {active ? (
        <>
          <button onClick={() => fund()}>Fund</button>
          <div id="display-area"></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
