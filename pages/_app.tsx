import Head from "next/head";
import { AppProps } from "next/app";
import React from "react";
/* ********************************************************** Use vue solana wallet adapter for these ********************************************************** */ 

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

/* ********************************************************** solana web3 js dependency ********************************************************** */

import { clusterApiUrl } from "@solana/web3.js";
import "../styles/index.css";

/* ********************************************************** Wallet adapter ********************************************************** */
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

/* ********************************************************** Props for devnet ********************************************************** */

function MyApp({ Component, pageProps }: AppProps) {
  // Connection endpoint, switch to a mainnet RPC if using mainnet
  const ENDPOINT = clusterApiUrl("devnet");

  return (
    <>
      <Head>
        <title>Mint your golden ticket</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ConnectionProvider endpoint={ENDPOINT}>
        <WalletProvider
          wallets={[
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new TorusWalletAdapter(),
          ]}
          autoConnect
        >
          <WalletModalProvider>
            <Component {...pageProps} />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default MyApp;
