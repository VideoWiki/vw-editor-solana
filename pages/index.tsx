/* ********************************************************** Use vue solana wallet adapter for these ********************************************************** */ 

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

/* ********************************************************** from API Route ********************************************************** */

import {
  PostResponse as CheckoutPostResponse,
  PostError as CheckoutPostError,
} from "./api/checkout";

/* ********************************************************** solana web3 js dependency ********************************************************** */

import { PublicKey, Transaction } from "@solana/web3.js";

export default function Home() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  /* ********************************************************** Metadata, myAddress and NFT Name must be passed as params ********************************************************** */

  // let METADATA_URI = "https://arweave.net/OZNYTG1Kh3b2p0RPpYCkchLiiAX_1po5PSvOCPSsu3s";
  // const myAddress = new PublicKey("GPaVkHjVRgDxzyqrK95RqcmEKRrfzwUnXGUwiDKq22vS")

  /* ********************************************************** Buy function using wallet ********************************************************** */

  async function buy(e: React.MouseEvent) {
    e.preventDefault();

    
  /* ********************************************************** call to API Route and pass params ********************************************************** */

    // Fetch the transaction from our checkout API
    // We pass the connected wallet as `account`
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ account: publicKey.toBase58() }),
    });

    /* *************************** To print public key use {publickey.toBase58()} *************************** */

    const responseBody = (await response.json()) as
      | CheckoutPostResponse
      | CheckoutPostError;

    if ("error" in responseBody) {
      const error = responseBody.error;
      console.error(error);
      alert(`Error fetching transaction: ${error}`);
      return;
    }

  /* ********************************************************** Transaction using wallet ********************************************************** */  

    // We receive the transaction serialized to base64, deserialize it to send
    const transaction = Transaction.from(
      Buffer.from(responseBody.transaction, "base64")
    );
    try {
      await sendTransaction(transaction, connection);
      alert("Purchase complete!");
    } catch (error) {
      console.error(error);
      alert(`Error sending transaction: ${error}`);
    }
  }

  return (
    <main className="container flex flex-col gap-20 items-center p-4 mx-auto min-h-screen justify-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl">Buy in your browser</h1>
        <div className="basis-1/4">
        {/* ********************************************************** Connect wallet ********************************************************** */}
          <WalletMultiButton />
        </div>
        {/* ********************************************************** Buy button to call buy function onClick ********************************************************** */}
        <button
          type="button"
          className="max-w-fit inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!publicKey}
          onClick={buy}
        >
          Buy now
        </button>
      </div>
    </main>
  );
}
